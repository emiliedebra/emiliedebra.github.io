<!-- Page -->

<template>
  <v-container flat grid class="page">
    <transition name="fade" mode="out-in">
      <about-page v-if="pressed==='about'"></about-page>
      <education-page v-if="pressed==='education'"></education-page>
      <skills-page v-if="pressed==='skills'"></skills-page>
      <experience-page v-if="pressed==='experience'"></experience-page>
    </transition>
  </v-container>
</template>

<script>
import AboutPage from './AboutPage.vue';
import EducationPage from './EducationPage.vue';
import SkillsPage from './SkillsPage.vue';
import ExperiencePage from './ExperiencePage.vue';

export default {
  name: 'home',
  props: ['pressed'],
  components: {
    AboutPage,
    EducationPage,
    SkillsPage,
    ExperiencePage,
  },
};
</script>

<style>

.page {
  padding: 0;
}

 /* Transitions */
.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-leave-active  {
  transition: opacity 0.1s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}

.fade-enter-to, .fade-leave {
  opacity: 1;
}
</style>
