<template>
  <v-container class="width-limit-800 text-xs-left" pa-0 pt-2 pb-2>
    <v-layout column>
      <v-flex>
        <v-layout row>
          <h3>{{ content.title }}</h3>
        </v-layout>
      </v-flex>
      <v-layout row>
        <v-flex text-align-left pr-1>
          <ul>{{ content.institution }}</ul>
          <ul>{{ content.description }}</ul>
        </v-flex>
        <v-btn icon flat :href="this.content.link">
          <img src="../assets/GitHub-Mark-32px.png" size="16px">
        </v-btn>
      </v-layout>
      <v-flex row>
        <v-chip :key="item" v-for="item in content.techUsed">{{ item }}</v-chip>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'project-text',
  props: ['content'],
};
</script>
