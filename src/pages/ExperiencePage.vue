<!-- Experience Page -->

<template>
  <v-container flat class="experience-page width-limit-800" text-xs-left>
    <h3 class="head">Work Experience</h3>
    <experience-text v-for="item in experiences" :key="item.company" :content="item"></experience-text>
    <v-container class="divider-container" pa-0 pt-3 pb-3>
      <v-divider></v-divider>
    </v-container>
    <h3 class="head">Projects</h3>
    <project-text v-for="item in projects" :key="item.company" :content="item"></project-text>
  </v-container>
</template>

<script>
import ExperienceText from '../components/text/ExperienceText.vue';
import ProjectText from '../components/text/ProjectText.vue';

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
          techUsed: [
            {
              title: 'Vue.js',
              content: 'Used Vue CLI with Node.js as the basic technology behind the project. The app is bundled using Webpack.',
              show: false,
            },
            {
              title: 'Vuex',
              content: `Used for global application state handling with a local store of
              states shared between different pages in the application. Used for non-sensitive state handling.`,
              show: false,
            },
            {
              title: 'Vuetify',
              content: `Used as the basic material UI framework.
              The app followed a standard layout that conforming to the Google Material Design guidelines`,
              show: false,
            },
            {
              title: 'Vue-Axios',
              content: 'Used as the HTTP client library, implementing Promise-based HTTP requests.',
              show: false,
            },
            {
              title: 'Node.js',
              content: 'The backend of the application was developed using the npm package ecosystem and ES6/7',
              show: false,
            },
            {
              title: 'Babel',
              content: 'Used for transpiling ES6 to browser compatible code',
              show: false,
            },
            {
              title: 'Express',
              content: 'Used as the web framework for Node.js',
              show: false,
            },
            {
              title: 'MySQL',
              content: 'Database handling',
              show: false,
            }],
        },
        {
          title: 'Physical Step Sequencer',
          institution: 'UCT Embedded Systems (3rd Year Project)',
          date: 'January 2017 - November 2017',
          link: 'https://github.com/emiliedebra/embedded-project',
          description: `Developed a physical implementation of a step sequencer using an STM32F4Discovery Evaluation
           Board. Audio waveforms were synthesised using MatLab and C to mimic sound fonts of drum kits and piano scales.`,
          techUsed: [
            {
              title: 'C',
              content: 'Language chosen for all programming of the microcontrollers',
              show: false,
            },
            {
              title: 'Atollic',
              content: 'IDE used for compilation and linking to STM microcontrollers',
              show: false,
            },
            {
              title: 'MatLab',
              content: 'Used for performing audio waveform manipulation',
              show: false,
            },
            {
              title: 'LaTeX',
              content: 'Report handling',
              show: false,
            },
          ],
        },
      ],
      experiences: [
        {
          title: 'Backend Developer',
          company: 'AnotherwayTech',
          date: 'December 2017 - Present',
          description: `Involvement in the back-end development of a CryptoCurrency trading system using Javascript/ES6/7,
           Node.js and Flow. Currently tasked with writing exchange API’s.`,
          techUsed: [
            {
              title: 'Javascript/ES5/6/7',
              content: 'Familiarity with modern syntax',
            },
            {
              title: 'Node.js',
              content: 'Development using a Node environement with exposure to the package ecosystem (npm)',
            },
            {
              title: 'Flow',
              content: 'Implementation of the framework used for syntactical type-checking',
            },
          ],
        },
        {
          title: 'Private Tutor',
          company: 'Get Smart Tutors (Cape Town) ',
          date: 'January 2017 - November 2017',
          description: `Private Tutor for a 1st Year Electrical and Computer Engineering Student at the University of Cape Town
          (focus on Computer Science and Electrical Engineering Basics)`,
          techUsed: [
            {
              title: 'Python',
              content: 'Basic text-based development',
            },
            {
              title: 'Java',
              content: 'Basic application developement with the GUI implemented in Swing',
            },
          ],
        },
        {
          title: 'Computer Science Tutor ',
          company: 'University of Cape Town',
          date: 'January 2016 - November 2017',
          description: `Tutor for the 1st year Computer Science (CSC1015F, CSC1016S)
          Courses in basic Python and Java.`,
          techUsed: [
            {
              title: 'Python',
              content: 'Basic text-based development',
            },
            {
              title: 'Java',
              content: 'Basic application developement with the GUI implemented in Swing',
            },
          ],
        },
        {
          title: 'Backend and Frontend Developer',
          company: 'AdvancedApps PTY Ltd.',
          date: 'January 2016 - January 2017',
          description: `Part-time involvement in the backend development of business applications using Javascript (ES6)
          and Node.js components which drew on technologies such as GraphQL, ArangoDB and Koa.
          Some exposure to frontend technologies such as Google Polymer, HTML5 and CSS, as well as Google’s Material Design.`,
          techUsed: [
            {
              title: 'Javascript/ES5/6',
              content: 'Development of the backend of a simple messaging system using modern syntax',
            },
            {
              title: 'GraphQL',
              content: 'Query language and server-side runtime used for data handling',
            },
            {
              title: 'ArangoDB',
              content: 'Use of graph model, with some exposure to KV and document models',
            },
            {
              title: 'Koa',
              content: 'Used as the web framework for Node.js',
            },
            {
              title: 'Google Polymer',
              content: 'Material Design familiarity and basic component creation and customisation',
            },
            {
              title: 'HTML5 and CSS',
              content: 'Good familiarity with HTML and CSS for customising components',
            },
            {
              title: 'Babel',
              content: 'Used for transpiling ES6 to browser compatible code',
            },
          ],
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
.experience-page {
  padding-top: 0;
  padding-bottom: 0;
}
</style>
