<template>
  <v-container ref="name" class="name-bar text-xs-center">
    <transition name="fade-name" mode="out-in">
      <h1 :style="{ fontSize: '70px' }" key="full" v-if="$mq.resize && $mq.above('650px')">{{ name }}</h1>
      <h1 :style="{ fontSize: '70px' }" v-if="$mq.resize && $mq.below('650px')">{{ initials }}</h1>
    </transition>
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
      initials: 'edw',
    };
  },
};
</script>

<style>
  .fade-name-enter-active {
  transition: opacity 0.1s;
  }

  .fade-name-leave-active  {
    transition: opacity 0.1s;
  }

  .fade-name-enter, .fade-name-leave-to /* .fade-name-leave-active below version 2.1.8 */ {
    opacity: 0
  }

  .fade-name-enter-to, .fade-name-leave {
    opacity: 1;
  }

</style>
