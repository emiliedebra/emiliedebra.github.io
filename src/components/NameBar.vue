<template>
  <v-container class="text-xs-center">
    <h1>{{ name }}</h1>
    <v-divider></v-divider>
  </v-container>
</template>

<script>
export default {
  name: 'title-bar',
  data() {
    return {
      name: 'emilie debra wood',
    };
  },
};
</script>

<style>
</style>
