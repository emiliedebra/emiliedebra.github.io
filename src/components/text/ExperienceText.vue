<!-- Experience Text -->

<template>
  <v-container class="width-limit-800 text-xs-left" pa-0 pt-2 pb-2>
    <v-layout column>
      <!-- Header -->
      <v-flex>
        <v-layout row>
          <h3 class="subhead">{{ header }}</h3>
        </v-layout>
      </v-flex>
      <!-- Description -->
      <v-flex text-align-left>
        <ul>{{ content.description }}</ul>
      </v-flex>
      <!-- Tech Chips -->
      <v-flex row>
        <!-- <v-tooltip top> -->
        <v-chip
          disabled
          v-for="(item, index) in content.techUsed"
          :key="item.title"
          @click.native="show(item.content, index)"
          slot="activator"
          :selected="item.show"
        >{{ item.title }}</v-chip>
        <!-- <span>{{ item.content }}</span> -->
        <!-- </v-tooltip> -->
      </v-flex>
      <v-flex pt-2>
        <transition name="fade">
          <ul class="italic" v-if="showItem">{{ showItemContent }}</ul>
        </transition>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "experience-text",
  props: ["content"],
  computed: {
    header() {
      return `${this.content.title} | ${this.content.company} | ${
        this.content.date
      }`;
    }
  },
  data() {
    return {
      showItem: false,
      showItemContent: null
    };
  },
  methods: {
    show(item, index) {
      // mimic toggle
      this.clearSelect();
      if (this.showItem && this.showItemContent === item) {
        this.showItem = false;
        this.content.techUsed[index].show = false;
      } else {
        this.showItem = true;
        this.showItemContent = item;
        this.content.techUsed[index].show = true;
      }
    },
    clearSelect() {
      for (const item of this.content.techUsed) {
        item.show = false;
      }
    }
  }
};
</script>
<style>
/* Transitions */
.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.fade-enter-to,
.fade-leave {
  opacity: 1;
}
</style>
