<!-- Experience Text -->

<template>
  <v-container class="width-limit-800 text-xs-left" pa-0 pt-2 pb-2>
    <v-layout column>
      <!-- Header -->
      <v-flex>
        <v-layout row>
          <h3>{{ header }}</h3>
        </v-layout>
      </v-flex>
      <!-- Description -->
      <v-flex text-align-left>
        <ul>{{ content.description }}</ul>
      </v-flex>
      <!-- Tech Chips -->
      <v-flex row>
        <v-tooltip top :key="item.title" v-for="item in content.techUsed">
          <v-chip disabled slot="activator">{{ item.title }}</v-chip>
          <span>{{ item.content }}</span>
        </v-tooltip>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'experience-text',
  props: ['content'],
  computed: {
    header() {
      return `${this.content.title} | ${this.content.company} | ${this.content.date}`;
    },
  },
};
</script>
