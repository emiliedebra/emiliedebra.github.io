<!-- Education Page -->

<template>
  <transition name="fade">
    <v-container flat class="page text-xs-center">
      <v-container class="width-limit-400 text-xs-left" pa-0>
        <h3>Tertiary Education</h3>
        <education-text v-for="item in tertiary" :key="item.title" :content="item"></education-text>
      </v-container>
      <v-container class="width-limit-400" pa-0 pt-3 pb-3>
        <v-divider></v-divider>
      </v-container>
      <v-container class="width-limit-400 text-xs-left" pa-0>
        <h3>Secondary Education</h3>
        <education-text v-for="item in secondary" :key="item.title" :content="item"></education-text>
      </v-container>
    </v-container>
  </transition>
</template>

<script>
import EducationText from '../components/EducationText.vue';

export default {
  name: 'education',
  data() {
    return {
      tertiary: [
        {
          institution: 'University of Cape Town',
          year: 'July 2017 - November 2017',
          description: 'BSc in Computer Science and Computer Engineering',
          additional: 'Awarded Cum Laude graduation',
        },
        {
          institution: 'University of Cape Town',
          year: '2015 – July 2017',
          description: 'BSc Eng in Electrical and Computer Engineering',
          additional: 'Dean\'s Merit List Student for 2015, 2016 and 2017',
        },
      ],
      secondary: [
        {
          institution: 'Port Shepstone High School',
          year: '2010 - 2014',
          description: 'National Senior Certificate',
          additional: 'Awarded Dux of the School',
        },
      ],
    };
  },
  components: {
    EducationText,
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
