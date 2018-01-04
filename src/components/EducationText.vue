<template>
  <v-container pa-0 pt-2>
    <v-layout column>
      <v-flex>
        <h3>{{ content.institution }}</h3>
      </v-flex>
      <v-flex text-align-left>
        <ul>{{ content.description }}</ul>
        <ul>{{ content.year }}</ul>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'education-text',
  props: ['content'],
};
</script>
