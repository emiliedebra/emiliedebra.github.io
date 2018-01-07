<template>
  <v-container ref="name" class="name-bar text-xs-center">
    <h1 :style="{ fontSize: '70px' }" id="small" key="small">{{ initials }}</h1>
    <h1 :style="{ fontSize: '70px' }" id="full" key="full">{{ name }}</h1>
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
  /* Media Queries */
  @media (min-width: 651px) {
    #small { display: none }
    #full { display: block }
  }

  @media (min-width: 0px) and (max-width: 650px) {
    #full { display: none }
    #small { display: block }
  }
</style>
