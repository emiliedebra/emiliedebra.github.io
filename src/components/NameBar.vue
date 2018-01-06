<template>
  <v-container ref="name" class="name-bar text-xs-center">
    <h1 :style="{ fontSize: '70px' }" v-if="$mq.resize && $mq.above('650px')">{{ name }}</h1>
    <h1 :style="{ fontSize: '70px' }" v-if="$mq.resize && $mq.below('650px')">{{ initials }}</h1>
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
</style>
