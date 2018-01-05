<!-- Contact Page -->

<template>
  <v-container flat class="page width-limit-400 text-xs-center">
    <info-text v-for="item in contactDetails" :key="item.title" :title="item.title" :content="item.content"></info-text>
  </v-container>
</template>

<script>
import InfoText from '../components/InfoText.vue';

export default {
  name: 'contact',
  data() {
    return {
      contactDetails: [
        {
          title: 'Email',
          content: 'emilie@anotherway.co.za',
        },
        {
          title: 'LinkedIn',
          content: 'Coming Soon',
        },
      ],
    };
  },
  components: {
    InfoText,
  },
};
</script>
<style>
</style>
