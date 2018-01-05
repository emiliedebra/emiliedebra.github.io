<!-- Skills Page -->

<template>
  <v-container flat class="page text-xs-center">
    <v-container>
      <v-flex row>
        <v-chip outline :key="item" v-for="item in skills">{{ item }}</v-chip>
      </v-flex>
    </v-container>
    <skills-text v-for="item in skillsExplained" :key="item.title" :title="item.title" :content="item.content"></skills-text>
  </v-container>
</template>

<script>
import SkillsText from '../components/SkillsText.vue';

export default {
  name: 'skills',
  data() {
    return {
      skills: [
        'Node.js',
        'Javascript/ES6/7',
        'Flow',
        'Babel',
        'Browserify',
        'Webpack',
        'Express',
        'Java',
        'Vue.js',
        'Vuex',
        'Vuetify',
        'Vue Axios',
        'Vue Router',
        'HTML5 and CSS',
        'Google Material Design',
        'PWA',
        'SPA',
        'ArangoDB',
        'GraphQL',
        'NoSQL',
        'MongoDB',
        'MySQL',
        'C',
        'C++',
        'Python',
        'Assembly',
        'RTOS',
        'Polymer.js',
        'Java Swing',
        'Koa',
        'Rollup',
        'Yarn',
      ],
      skillsExplained: [
        {
          title: 'Vue.js and Related',
          content: [
            'Front end development using Vue.js',
            'HTTP requests handling using Vue Axios',
            'State handling through Vuex',
            'Page routing through Vue Router',
            'Vuetify as a material design framework',
            'Exposure to transitions and animations in Vue.js',
          ],
        },
        {
          title: 'Node.js and Related',
          content: [
            'Development using Node.js and it’s package ecosystem (npm)',
            'Exposure to packages such as Flow, Koa, Express, Rollup, Babel, Browserify and Webpack',
            'Database handling using GraphQL, NoSQL, ArangoDB and MongoDB',
          ],
        },
        {
          title: 'Material Web Design',
          content: [
            'Development of reusable components in Polymer',
            'Familiar with Material Design Guidelines',
          ],
        },
        {
          title: 'Progressive Web Applications',
          content: [
            'Developed PWA using Vue CLI (this web-app)',
            'Created mobile-friendly, scalable web-applications',
          ],
        },
        {
          title: 'Computing Algorithms',
          content: [
            'Studied basic Dynamic Programming implementations',
            'Studied Decrease and Conquer, Divide and Conquer, Brute Force, Greedy Algorithms etc',
          ],
        },
        {
          title: 'Concurrent Programming and Threading',
          content: [
            'Development of basic threaded simulations in Java',
            'Understanding of Parallelism and Concurrency',
            'Exposure to common software problems such as Dining Philosophers',
          ],
        },
        {
          title: 'Software Design Patterns',
          content: [
            'Familiarity with Scrum, Agile, XP',
            'Study of software application architectures',
            'Exposure to design patterns (Layered, Repository, Client-Server etc)',
          ],
        },
        {
          title: 'Java, Java Swing',
          content: [
            'Completed all Java university courses',
            'Developed basic wordsearch game GUI using Swing',
          ],
        },
        {
          title: 'Python',
          content: [
            'Basic number crunching and command line IO programming',
          ],
        },
        {
          title: 'MatLab, LaTeX and Embedded C',
          content: [
            'Use of LaTeX for all University reports',
            'Created audio synthesis using MatLab',
            'Use of Embedded C in programming an STM32F4Discovery Evaluation Board and STM32F0',
          ],
        },
      ],
    };
  },
  components: {
    SkillsText,
  },
};
</script>
<style>
</style>
