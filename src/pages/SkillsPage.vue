<!-- Skills Page -->

<template>
  <transition name="fade">
    <v-container flat class="page text-xs-center">
      <skills-text v-for="item in skills" :key="item.title" :title="item.title" :content="item.content"></skills-text>
    </v-container>
  </transition>
</template>

<script>
import SkillsText from '../components/SkillsText.vue';

export default {
  name: 'skills',
  data() {
    return {
      skills: [
        {
          title: 'Vue.js and Related',
          content: [
            'Front end development using Vue.js. (emiliedebrawood.github.io)',
            'HTTP requests handling using Vue Axios',
            'State handling through Vuex',
            'Page routing through Vue Router',
            'Use of Vuetify as a material design framework',
            'PWA and SPA development',
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
      ],
    };
  },
  components: {
    SkillsText,
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
