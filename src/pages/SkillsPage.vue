<!-- Skills Page -->

<template>
  <v-container flat text-xs-center class="skills-page">
    <v-container class="width-limit-1000">
      <v-layout row>
        <v-flex>
          <v-chip outline disabled :key="index" v-for="(item, index) in skills" @click.native="selectSkills(index)">{{ item.title }}</v-chip>
        </v-flex>
      </v-layout>
    </v-container>
      <v-container class="width-limit-1000">
        <v-layout row>
          <v-flex>
            <transition-group name="fade-chip">
              <v-chip close disabled :key="item.title" v-for="item in skillsSelected" @input="selectSkills(skills.indexOf(item))">{{ item.title }}</v-chip>
            </transition-group>
          </v-flex>
        </v-layout>
      </v-container>
    <transition-group name="reorder">
      <skills-text v-for="item in skillsExplained" :key="item.title" :title="item.title" :content="item.content"></skills-text>
    </transition-group>
  </v-container>
</template>

<script>
import SkillsText from '../components/text/SkillsText.vue';

export default {
  name: 'skills',
  data() {
    return {
      skillsInitial: [
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
          tags: [
            'Vue.js',
            'Vuex',
            'Vue Axios',
            'Vuetify',
            'Vue Router',
            'HTML5 and CSS',
          ],
        },
        {
          title: 'Node.js and Related',
          content: [
            'Development using Node.js and it’s package ecosystem (npm)',
            'Exposure to packages such as Flow, Koa, Express, Rollup, Babel, Browserify and Webpack',
            'Database handling using GraphQL, NoSQL, ArangoDB and MongoDB',
          ],
          tags: [
            'Node.js',
            'Flow',
            'Koa',
            'Express',
            'Rollup',
            'Babel',
            'Browserify',
            'Webpack',
            'GraphQL',
            'NoSQL',
            'ArangoDB',
            'MongoDB',
          ],
        },
        {
          title: 'Material Web Design',
          content: [
            'Development of reusable components in Polymer',
            'Familiar with Material Design Guidelines',
          ],
          tags: [
            'Polymer',
            'Google Material Design',
          ],
        },
        {
          title: 'Progressive Web Applications',
          content: [
            'Developed PWA using Vue CLI (this web-app)',
            'Created mobile-friendly, scalable web-applications',
          ],
          tags: [
            'Vue.js',
            'Vuex',
            'Vue Axios',
            'Vuetify',
            'Vue Router',
            'HTML5 and CSS',
          ],
        },
        {
          title: 'Computing Algorithms',
          content: [
            'Studied basic Dynamic Programming implementations',
            'Studied Decrease and Conquer, Divide and Conquer, Brute Force, Greedy Algorithms etc',
          ],
          tags: [
            'Java',
          ],
        },
        {
          title: 'Concurrent Programming and Threading',
          content: [
            'Development of basic threaded simulations in Java',
            'Understanding of Parallelism and Concurrency',
            'Exposure to common software problems such as Dining Philosophers',
          ],
          tags: [
            'Java',
          ],
        },
        {
          title: 'Software Design Patterns',
          content: [
            'Familiarity with Scrum, Agile, XP',
            'Study of software application architectures',
            'Exposure to design patterns (Layered, Repository, Client-Server etc)',
          ],
          tags: [
          ],

        },
        {
          title: 'Java, Java Swing',
          content: [
            'Completed all Java university courses',
            'Developed basic wordsearch game GUI using Swing',
          ],
          tags: [
            'Java',
            'Java Swing',
          ],

        },
        {
          title: 'Python',
          content: [
            'Basic number crunching and command line IO programming',
          ],
          tags: [
            'Python',
          ],
        },
        {
          title: 'MatLab, LaTeX and Embedded C',
          content: [
            'Use of LaTeX for all University reports',
            'Created audio synthesis using MatLab',
            'Use of Embedded C in programming an STM32F4Discovery Evaluation Board and STM32F0',
          ],
          tags: [
            'C',
            'C++',
            'MatLab',
            'Latex',
          ],
        },
      ],
      skills: [
        {
          title: 'Node.js',
          pressed: false,
        },
        {
          title: 'Javascript/ES6/7',
          pressed: false,
        },
        {
          title: 'Flow',
          pressed: false,
        },
        {
          title: 'Babel',
          pressed: false,
        },
        {
          title: 'Browserify',
          pressed: false,
        },
        {
          title: 'Webpack',
          pressed: false,
        },
        {
          title: 'Express',
          pressed: false,
        },
        {
          title: 'Java',
          pressed: false,
        },
        {
          title: 'Vue.js',
          pressed: false,
        },
        {
          title: 'Vuex',
          pressed: false,
        },
        {
          title: 'Vuetify',
          pressed: false,
        },
        {
          title: 'Vue Axios',
          pressed: false,
        },
        {
          title: 'Vue Router',
          pressed: false,
        },
        {
          title: 'HTML5 and CSS',
          pressed: false,
        },
        {
          title: 'Google Material Design',
          pressed: false,
        },
        {
          title: 'PWA',
          pressed: false,
        },
        {
          title: 'SPA',
          pressed: false,
        },
        {
          title: 'ArangoDB',
          pressed: false,
        },
        {
          title: 'GraphQL',
          pressed: false,
        },
        {
          title: 'NoSQL',
          pressed: false,
        },
        {
          title: 'MongoDB',
          pressed: false,
        },
        {
          title: 'MySQL',
          pressed: false,
        },
        {
          title: 'C',
          pressed: false,
        },
        {
          title: 'C++',
          pressed: false,
        },
        {
          title: 'Python',
          pressed: false,
        },
        {
          title: 'Assembly',
          pressed: false,
        },
        {
          title: 'RTOS',
          pressed: false,
        },
        {
          title: 'Polymer.js',
          pressed: false,
        },
        {
          title: 'Java Swing',
          pressed: false,
        },
        {
          title: 'Koa',
          pressed: false,
        },
        {
          title: 'Rollup',
          pressed: false,
        },
        {
          title: 'Yarn',
          pressed: false,
        },
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
          tags: [
            'Vue.js',
            'Vuex',
            'Vue Axios',
            'Vuetify',
            'Vue Router',
            'HTML5 and CSS',
          ],
        },
        {
          title: 'Node.js and Related',
          content: [
            'Development using Node.js and it’s package ecosystem (npm)',
            'Exposure to packages such as Flow, Koa, Express, Rollup, Babel, Browserify and Webpack',
            'Database handling using GraphQL, NoSQL, ArangoDB and MongoDB',
          ],
          tags: [
            'Node.js',
            'Flow',
            'Koa',
            'Express',
            'Rollup',
            'Babel',
            'Browserify',
            'Webpack',
            'GraphQL',
            'NoSQL',
            'ArangoDB',
            'MongoDB',
          ],
        },
        {
          title: 'Material Web Design',
          content: [
            'Development of reusable components in Polymer',
            'Familiar with Material Design Guidelines',
          ],
          tags: [
            'Polymer',
            'Google Material Design',
          ],
        },
        {
          title: 'Progressive Web Applications',
          content: [
            'Developed PWA using Vue CLI (this web-app)',
            'Created mobile-friendly, scalable web-applications',
          ],
          tags: [
            'Vue.js',
            'Vuex',
            'Vue Axios',
            'Vuetify',
            'Vue Router',
            'HTML5 and CSS',
          ],
        },
        {
          title: 'Computing Algorithms',
          content: [
            'Studied basic Dynamic Programming implementations',
            'Studied Decrease and Conquer, Divide and Conquer, Brute Force, Greedy Algorithms etc',
          ],
          tags: [
            'Java',
          ],
        },
        {
          title: 'Concurrent Programming and Threading',
          content: [
            'Development of basic threaded simulations in Java',
            'Understanding of Parallelism and Concurrency',
            'Exposure to common software problems such as Dining Philosophers',
          ],
          tags: [
            'Java',
          ],
        },
        {
          title: 'Software Design Patterns',
          content: [
            'Familiarity with Scrum, Agile, XP',
            'Study of software application architectures',
            'Exposure to design patterns (Layered, Repository, Client-Server etc)',
          ],
          tags: [
          ],

        },
        {
          title: 'Java, Java Swing',
          content: [
            'Completed all Java university courses',
            'Developed basic wordsearch game GUI using Swing',
          ],
          tags: [
            'Java',
            'Java Swing',
          ],

        },
        {
          title: 'Python',
          content: [
            'Basic number crunching and command line IO programming',
          ],
          tags: [
            'Python',
          ],
        },
        {
          title: 'MatLab, LaTeX and Embedded C',
          content: [
            'Use of LaTeX for all University reports',
            'Created audio synthesis using MatLab',
            'Use of Embedded C in programming an STM32F4Discovery Evaluation Board and STM32F0',
          ],
          tags: [
            'C',
            'C++',
            'MatLab',
            'Latex',
          ],
        },
      ],
      skillsSelected: [],
    };
  },
  components: {
    SkillsText,
  },
  methods: {
    selectSkills(pressed) {
      if (this.skills[pressed].pressed) {
        this.skills[pressed].pressed = false;
        // remove selected
        this.skillsSelected.splice(this.skillsSelected.indexOf(this.skills[pressed]), 1);
        this.reorderSkills();
        // this.skills.splice(this.skills.length, 0, this.skills[pressed]);
        // this.skills.splice(pressed, 1);
      } else {
        this.skills[pressed].pressed = true;
        // add selected
        this.skillsSelected.splice(0, 0, this.skills[pressed]);
        this.reorderSkills();
        // this.skills.splice(0, 0, this.skills[pressed]);
        // this.skills.splice(pressed + 1, 1);
      }
    },
    reorderSkills() {
      this.skillsExplained = [...this.skillsInitial];
      // most recently selected is at index 0
      for (let itemIndex = this.skillsSelected.length - 1; itemIndex > -1; itemIndex--) {
        const item = this.skillsSelected[itemIndex];
        for (const skill of this.skillsExplained) {
          if (skill.tags.indexOf(item.title) !== -1) {
            // add to beginning
            // remove from original
            this.skillsExplained.splice(this.skillsExplained.indexOf(skill), 1);
            this.skillsExplained.splice(0, 0, skill);
            break;
          }
        }
      }
    },
  },
};
</script>
<style>
.skills-page {
  padding-top: 0;
  padding-bottom: 0;
}

.reorder-move {
  transition: transform 1s;
}

.fade-chip-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.fade-chip-enter, .fade-chip-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.fade-chip-leave-active {
  position: absolute;
}
</style>
