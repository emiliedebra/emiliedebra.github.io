<!-- Education Page -->

<template>
  <v-container flat class="page text-xs-center">
    <v-container class="width-limit-500 text-xs-left" pa-0>
      <h3>Tertiary Education</h3>
      <education-text v-for="item in tertiary" :key="item.title" :content="item"></education-text>
    </v-container>
    <v-container class="divider-container" pa-0 pt-3 pb-3>
      <v-divider></v-divider>
    </v-container>
    <v-container class="width-limit-500 text-xs-left" pa-0>
      <h3>Secondary Education</h3>
      <education-text v-for="item in secondary" :key="item.title" :content="item"></education-text>
    </v-container>
  </v-container>
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
</style>
