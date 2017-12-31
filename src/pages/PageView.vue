<!-- Page -->

<template>
  <v-container flat class="page text-xs-center">
    <about-page v-if="pressed==='about'"></about-page>
  </v-container>
</template>

<script>
import AboutPage from './AboutPage.vue';

export default {
  name: 'home',
  props: ['pressed'],
  components: {
    AboutPage,
  },
};
</script>
<style>
.container {
  padding: 0;
  padding-top: 20px;
}
</style>
