<!-- Contact Page -->

<template>
  <transition name="fade">
    <v-container flat class="page width-limit-400 text-xs-center">
      <info-text v-for="item in contactDetails" :key="item.title" :title="item.title" :content="item.content"></info-text>
    </v-container>
  </transition>
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
.fade-enter-active {
  transition: opacity .3s
}

.fade-enter /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}

.fade-leave-active {
  transition: opacity .0s;
}

.fade-leave {
  opacity: 0;
}
</style>
