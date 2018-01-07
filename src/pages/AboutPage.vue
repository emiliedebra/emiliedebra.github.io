<!-- About Page -->
<template>
  <v-container text-xs-center class="width-limit-800">
    <basic-info-bar-row id="row"></basic-info-bar-row>
    <basic-info-bar-col id="col"></basic-info-bar-col>

    <!-- Divider  -->
    <v-container class="divider-container" pa-0 pt-3 pb-3>
      <v-divider></v-divider>
    </v-container>

    <!-- Bio  -->
    <v-card flat class="transparent">
      <v-card-text>{{ bio.content }}</v-card-text>
    </v-card>

    <!-- Buttons  -->
    <v-tooltip top>
      <v-btn icon flat :href="this.github" target="_blank" slot="activator" pa-0 ma-0>
          <img src="../assets/GitHub-Mark-32px.png" size="16px">
      </v-btn>
      <span>View GitHub Profile</span>
    </v-tooltip>
    <v-tooltip top>
      <v-btn icon flat :href="this.linkedin" target="_blank" slot="activator" pa-0 ma-0>
        <img src="../assets/In-Black-34px-TM.png" size="16px">
      </v-btn>
      <span>View LinkedIn Profile</span>
    </v-tooltip>
  </v-container>
</template>

<script>
import InfoText from '../components/InfoText.vue';
import BasicInfoBarCol from '../components/BasicInfoBarCol.vue';
import BasicInfoBarRow from '../components/BasicInfoBarRow.vue';

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
          title: 'Citizenship',
          content: 'British',
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
        I am a music and dance enthusiast and am able to approach design problems from
        an artistic and creative perspective as well.
        My problem-solving ability is applied throughout all aspects of my life, and I am continuously seeking to gain knowledge.
        When not gaining this knowledge in a software environment, I am an advocate for self-improvement,
        and am continuously striving for increased physical and mental health.`,
      },
    };
  },
  components: {
    InfoText,
    BasicInfoBarRow,
    BasicInfoBarCol,
  },
};
</script>
<style>
  /* Media Queries */
  @media (min-width: 651px) {
    #row { display: block }
    #col { display: none }
  }
  @media (min-width: 0px) and (max-width: 650px) {
    #row { display: none }
    #col { display: block }
  }
</style>
