<template>
  <v-container pa-0>
    <v-layout row>
      <v-flex pr-2 xs6 text-xs-right>
        <h3>{{ title }}</h3>
      </v-flex>
      <v-flex xs6 text-xs-left>
        <p>{{ content }}</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'info-text',
  props: ['title', 'content'],
};
</script>
