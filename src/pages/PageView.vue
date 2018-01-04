<!-- Page -->

<template>
  <v-container flat grid class="page">
    <about-page v-if="pressed==='about'"></about-page>
    <education-page v-if="pressed==='education'"></education-page>
    <skills-page v-if="pressed==='skills'"></skills-page>
    <experience-page v-if="pressed==='experience'"></experience-page>
    <contact-page v-if="pressed==='contact'"></contact-page>
  </v-container>
</template>

<script>
import AboutPage from './AboutPage.vue';
import EducationPage from './EducationPage.vue';
import SkillsPage from './SkillsPage.vue';
import ExperiencePage from './ExperiencePage.vue';
import ContactPage from './ContactPage.vue';

export default {
  name: 'home',
  props: ['pressed'],
  components: {
    AboutPage,
    EducationPage,
    SkillsPage,
    ExperiencePage,
    ContactPage,
  },
};
</script>

<style>
.page {
  padding: 0;
}
</style>
