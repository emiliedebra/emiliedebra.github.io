<template>
  <v-container ref="name" class="name-bar text-xs-center">
    <h1 :style="{ fontSize: text }">{{ name }}</h1>
    <v-divider></v-divider>
  </v-container>
</template>

<script>
export default {
  name: 'title-bar',
  props: ['text'],
  data() {
    return {
      name: 'emilie debra wood',
      fontSize: '70px',
    };
  },
};
</script>

<style>
</style>
