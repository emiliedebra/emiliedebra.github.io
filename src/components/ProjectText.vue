<template>
  <v-container class="width-limit-600 text-xs-left" pa-0 pt-2 pb-2>
    <v-layout column>
      <v-flex>
        <v-layout row>
          <h3>{{ content.title }}</h3>
        </v-layout>
      </v-flex>
      <v-flex text-align-left>
        <ul>{{ content.institution }}</ul>
        <ul>{{ content.description }}</ul>
        <ul>{{ content.link}}</ul>
      </v-flex>
      <v-btn icon flat :href="this.content.link" pa-0 ma-0>
        <v-icon>link</v-icon>
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'education-text',
  props: ['content'],
};
</script>
