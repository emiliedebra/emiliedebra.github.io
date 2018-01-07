<!-- Name Bar -->

<template>
  <v-container ref="name" text-xs-center>
    <h1 id="small">{{ initials }}</h1>
    <h1 id="full">{{ name }}</h1>
    <v-divider></v-divider>
  </v-container>
</template>

<script>
export default {
  name: 'name-bar',
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
