<template>
  <v-container class="width-limit-500 text-xs-left" pa-0 pt-2>
    <v-layout column>
      <v-flex>
        <h3>{{ header }}</h3>
      </v-flex>
      <v-flex text-align-left>
        <ul>{{ content.description }}</ul>
        <ul>{{ content.additional }}</ul>
      </v-flex>
      <!-- <img src="logoLink" width="70px" height="70px"> -->
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'education-text',
  props: ['content'],
  computed: {
    header() {
      return `${this.content.institution} | ${this.content.year}`;
    },
    logoLink() {
      return `../assets/${this.content.logo}`;
    },
  },
};
</script>
