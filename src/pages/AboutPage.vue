<!-- About Page -->
<template>
  <v-container text-xs-center class="about-page width-limit-800">
    <!-- Basic Info -->
    <basic-info-bar-row id="row"></basic-info-bar-row>
    <basic-info-bar-col id="col"></basic-info-bar-col>

    <!-- Divider  -->
    <v-container class="divider-container" pa-0 pt-3 pb-3>
      <v-divider></v-divider>
    </v-container>

    <!-- Bio  -->
    <v-card flat v-for="item in bio.content" :key="item" class="transparent">
      <v-card-text class="no-space">{{ item }}</v-card-text>
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
import InfoText from '../components/text/InfoText.vue';
import BasicInfoBarCol from '../components/bars/BasicInfoBarCol.vue';
import BasicInfoBarRow from '../components/bars/BasicInfoBarRow.vue';

export default {
  name: 'about',
  data() {
    return {
      github: 'https://github.com/emiliedebra',
      linkedin: 'https://www.linkedin.com/in/emilie-wood/',
      bio: {
        title: 'Bio',
        content: [
          'UCT BSc Computer Science and Computer Engineering graduate.',

          `With a passion for problem-solving, I have a determined and positive attitude towards life's
          continuous complex problems. I have a strong work ethic which I have enjoyed applying to the challenges
          of the software development environment through several years of work experience, both backend and frontend.`,

          `Together with software, I am a music and dance enthusiast and am able to approach design problems
          from an artistic and creative perspective as well.`,

          `My problem-solving ability is applied throughout all aspects of my life, and I am continuously
          seeking to gain knowledge. When not gaining this knowledge in a software environment,
          I am an advocate for self-improvement and am always striving to better my physical and mental health.`,
        ],
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

  .about-page {
    padding-top: 0;
    padding-bottom: 0;
  }

  .no-space {
    padding-top: 0px;
    padding-bottom: 16px;
  }
</style>
