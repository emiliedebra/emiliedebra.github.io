<!-- About Page -->
<template>
  <v-container text-xs-center class="width-limit-800 about-container">
    <v-container text-xs-center>
      <v-layout pb-3 :row="screenSize" :column="!screenSize" v-resize="onSmallScreen" ref="resizableCol">
        <v-flex>
          <info-text v-for="item in basic" :key="item.title" :title="item.title" :content="item.content"></info-text>
        </v-flex>
        <v-flex v-if="screenSize">
          <v-avatar size="200px">
            <img src="../../static/img/icons/cv-image.gif">
          </v-avatar>
        </v-flex>
        <v-flex>
          <info-text v-for="item in additional" :key="item.title" :title="item.title" :content="item.content"></info-text>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container class="divider-container" pa-0 pt-3 pb-3>
      <v-divider></v-divider>
    </v-container>
    <v-card flat class="transparent">
      <v-card-text>{{ bio.content }}</v-card-text>
    </v-card>
    <v-btn icon flat :href="this.github" pa-0 ma-0>
        <img src="../assets/GitHub-Mark-32px.png" size="16px">
    </v-btn>
    <v-btn icon flat :href="this.linkedin" pa-0 ma-0>
      <img src="../assets/In-Black-34px-TM.png" size="16px">
    </v-btn>
  </v-container>
</template>

<script>
import InfoText from '../components/InfoText.vue';

export default {
  name: 'about',
  data() {
    return {
      screenSize: true,
      github: 'https://github.com/emiliedebra',
      linkedin: 'https://www.linkedin.com/in/emilie-wood/',
      basic: [
        {
          title: 'Full Name',
          content: 'Emilie Debra Wood',
        },
        {
          title: 'Date of Birth',
          content: '13th January 1997',
        },
        {
          title: 'Place of Birth',
          content: 'Cambridge, United Kingdom',
        },
      ],
      additional: [
        {
          title: 'Email',
          content: 'emilie@anotherway.co.za',
        },
        {
          title: 'Language',
          content: 'English',
        },
        {
          title: 'Citizenship',
          content: 'British | South African',
        },
        {
          title: 'Availability',
          content: '19th February 2018',
        },
      ],
      bio: {
        title: 'Bio',
        content: `I am a recent UCT BSc Computer Science and Computer Engineering graduate.
        I have a passion for problem solving with a determined and positive attitude towards
        solving life's continuous complex problems. This gets applied well in the software development industry,
        in which I have several years of student vacation work experience developing business applications,
        both back end and front end. Whilst software engineering utilises my practical and technical side,
        I am a music and dance enthusiast and am able to approach design problems from an artistic and creative perspective as well.
        My problem-solving ability is applied throughout all aspects of my life, and I am continuously seeking to gain knowledge.
        When not gaining this knowledge in a software environment, I am an advocate for self-improvement,
        and am continuously striving for increased physical and mental health.`,
      },
    };
  },
  methods: {
    onSmallScreen() {
      if (window.innerWidth < 1000) {
        this.screenSize = false;
      } else {
        this.screenSize = true;
      }
    },
  },
  components: {
    InfoText,
  },
};
</script>
<style>
.about-container {
  padding: 0;
}
</style>
