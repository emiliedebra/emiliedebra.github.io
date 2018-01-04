<template>
  <transition name="fade">
    <v-container class="text-xs-center">
      <h1>{{ name }}</h1>
      <v-divider></v-divider>
    </v-container>
  </transition>
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
 .fade-enter-active {
    transition: opacity .5s
  }

  .fade-enter /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0
  }
</style>
