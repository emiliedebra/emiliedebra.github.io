<!-- Experience Page -->

<template>
  <v-container flat class="width-limit-800" text-xs-left>
    <h3>Projects</h3>
    <project-text v-for="item in projects" :key="item.company" :content="item"></project-text>
    <v-container class="divider-container" pa-0 pt-3 pb-3>
      <v-divider></v-divider>
    </v-container>
    <h3>Work Experience</h3>
    <experience-text v-for="item in experiences" :key="item.company" :content="item"></experience-text>
  </v-container>
</template>

<script>
import ExperienceText from '../components/ExperienceText.vue';
import ProjectText from '../components/ProjectText.vue';

export default {
  name: 'experience',
  data() {
    return {
      projects: [
        {
          title: 'Research Paper Management Web Application',
          institution: 'UCT Capstone Project (Final Year Project)',
          link: 'https://github.com/emiliedebra/capstone-demo-front-end',
          description: `Developed the frontend and a partial backend of a web-application designed to allow
          easy management of a database of research papers related to the Center of Aritificial Intelligence Research
          in South Africa.`,
          techUsed: ['Vue.js', 'Vuex', 'Vuetify', 'Vue Axios', 'Node.js', 'Babel', 'Express', 'MySQL'],
        },
        {
          title: 'Physical Step Sequencer',
          institution: 'UCT Embedded Systems (3rd Year Project)',
          date: 'January 2017 - November 2017',
          link: 'https://github.com/emiliedebra/embedded-project',
          description: `Developed a physical implementation of a step sequencer using an STM32F4Discovery Evaluation
           Board. Audio waveforms were synthesised using MatLab and C to mimic sound fonts of drum kits and piano scales.`,
          techUsed: ['C', 'Atollic', 'MatLab', 'LaTeX'],

        },
      ],
      experiences: [
        {
          title: 'Vac Work',
          company: 'AnotherwayTech',
          date: 'December 2017 - Present',
          description: `Involvement in the back-end development of a CryptoCurrency trading system using Javascript/ES6/7,
           Node.js and Flow. Currently tasked with writing exchange API’s.`,
          techUsed: ['Javascript/ES6/7', 'Node.js', 'Flow'],

        },
        {
          title: 'Private Tutor',
          company: 'Get Smart Tutors (Cape Town) ',
          date: 'January 2017 - November 2017',
          description: `Private Tutor for a 1st Year Electrical and Computer Engineering Student at the University of Cape Town
          (focus on Computer Science and Electrical Engineering Basics)`,
          techUsed: ['Python', 'Java'],

        },
        {
          title: 'Computer Science Tutor ',
          company: 'University of Cape Town',
          date: 'January 2016 - November 2017',
          description: `Tutor for the 1st year Computer Science (CSC1015F, CSC1016S)
          Courses in basic Python and Java.`,
          techUsed: ['Python', 'Java'],

        },
        {
          title: 'Vac Work',
          company: 'AdvancedApps PTY Ltd.',
          date: 'January 2016 - January 2017',
          description: `Part-time involvement in the back-end development of business applications using Javascript (ES6)
          and Node.js components which drew on technologies such as GraphQL, ArangoDB and Koa.
          Some exposure to front-end technologies such as Google Polymer, HTML5 and CSS, as well as Google’s Material Design.`,
          techUsed: ['Javascript/ES6', 'Node.js', 'GraphQL', 'ArangoDB', 'Koa', 'Google Polymer', 'HTM5 and CSS', 'Babel'],
        },
      ],
    };
  },
  components: {
    ExperienceText,
    ProjectText,
  },
};
</script>
<style>
</style>
