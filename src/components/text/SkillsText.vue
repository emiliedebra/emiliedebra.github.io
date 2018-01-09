<!-- Skills Text -->

<template>
  <v-container class="width-limit-600 text-xs-left" pt-2>
    <v-layout column>
      <!-- Title -->
      <v-flex>
        <h3 class="subhead">{{ title }}</h3>
      </v-flex>
      <!-- Bullet Points -->
      <v-flex text-align-left>
        <li v-for="item in content" :key="item">
          {{ item }}
        </li>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'skills-text',
  props: ['title', 'content'],
};
</script>
