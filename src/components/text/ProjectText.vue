<!-- Project Text -->

<template>
  <v-container class="width-limit-800 text-xs-left" pa-0 pt-2 pb-2>
    <v-layout column>
      <!-- Title -->
      <v-flex>
        <v-layout row>
          <h3 class="subhead">{{ content.title }}</h3>
        </v-layout>
      </v-flex>
      <!-- Info -->
      <v-layout row>
        <v-flex text-align-left pr-1>
          <ul class="italic">{{ content.institution }}</ul>
          <ul>{{ content.description }}</ul>
        </v-flex>
        <!-- External Repo Link -->
        <v-tooltip top>
          <v-btn icon flat :href="this.content.link" slot="activator" target="_blank">
            <img src="../../assets/GitHub-Mark-32px.png" size="16px">
          </v-btn>
          <span>View project repo</span>
        </v-tooltip>
      </v-layout>
      <!-- Tech Chips -->
      <v-flex row>
        <!-- <v-tooltip top> -->
          <v-chip disabled v-for="(item, index) in content.techUsed" :key="item.title" @click.native="show(item.content, index)" slot="activator" :selected="item.show">{{ item.title }}</v-chip>
          <!-- <span>{{ item.content }}</span> -->
        <!-- </v-tooltip> -->
      </v-flex>
      <v-flex>
        <ul v-if="showItem">{{ showItemContent }}</ul>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'project-text',
  props: ['content'],
  data() {
    return {
      showItem: false,
      showItemContent: null,
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
    },
  },
};
</script>
