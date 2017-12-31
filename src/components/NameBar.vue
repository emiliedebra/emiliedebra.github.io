<template>
  <v-container class="name text-xs-center">
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
h1 {
  font-weight: 100;
  font-size: 70px;
}
</style>
