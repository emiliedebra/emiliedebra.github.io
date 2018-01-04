<!-- About Page -->
<template>
  <transition name="fade">
    <v-container text-xs-center class="about-container">
      <v-layout pb-3 row>
        <v-flex xs6>
          <info-text v-for="item in basic" :key="item.title" :title="item.title" :content="item.content"></info-text>
        </v-flex>
        <v-flex xs5>
          <v-avatar size="200px">
            <img src="../../static/img/icons/cv-image.gif">
          </v-avatar>
        </v-flex>
        <v-flex xs6>
          <info-text v-for="item in additional" :key="item.title" :title="item.title" :content="item.content"></info-text>
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
      <v-card flat class="transparent">
        <v-card-text>{{ bio.content }}</v-card-text>
      </v-card>
    </v-container>
  </transition>
</template>

<script>
import InfoText from '../components/InfoText.vue';

export default {
  name: 'about',
  data() {
    return {
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
          title: 'Citizenship',
          content: 'British | South African',
        },
        {
          title: 'Availability',
          content: '19th February 2018',
        },
      ],
      additional: [
        {
          title: 'Language',
          content: 'English',
        },
        {
          title: 'LinkedIn Profile',
          content: 'linkedin.com/in/emilie-wood/',
        },
        {
          title: 'GitHub Profile',
          content: 'github.com/emiliedebra',
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

  components: {
    InfoText,
  },
};
</script>
<style>
.fade-enter-active {
  transition: opacity .3s;
}

.fade-leave-active {
  transition: opacity .0s;
}

.fade-leave {
  opacity: 0;
}

.fade-enter /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.about-container {
  padding: 0;
}
</style>
