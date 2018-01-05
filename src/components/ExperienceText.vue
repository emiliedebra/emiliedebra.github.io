<template>
  <v-container class="width-limit-800 text-xs-left" pa-0 pt-2 pb-2>
    <v-layout column>
      <v-flex>
        <v-layout row>
          <h3>{{ header }}</h3>
        </v-layout>
      </v-flex>
      <v-flex text-align-left>
        <ul>{{ content.description }}</ul>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'education-text',
  props: ['content'],
  data() {
    return {
      divider: ' | ',
    };
  },
  computed: {
    header() {
      return `${this.content.title} | ${this.content.company} | ${this.content.date}`;
    },
  },
};
</script>
