<template>
  <v-app ref="app">

    <!-- Before Enter -->
    <v-container fill-height v-if="!enter" class="title-container">
      <v-layout column>
        <name-bar key="name-center"></name-bar>
        <enter-bar @enter="enterCV"></enter-bar>
      </v-layout>
    </v-container>

    <!-- After Enter -->
    <transition name="slide-fade">
      <v-container v-if="enter" pl-0 pr-0>
        <v-layout column>
          <v-toolbar flat fixed text-xs-center app height='160px'>
            <v-toolbar-items>
              <v-layout column>
                  <name-bar v-if="enter"></name-bar>
                    <title-bar key="title"  @changePage="change"></title-bar>
              </v-layout>
            </v-toolbar-items>
          </v-toolbar>
          <v-content>
              <page-view :pressed="pageButton"></page-view>
          </v-content>
        </v-layout>
      </v-container>
    </transition>
  </v-app>
</template>

<script>
import NameBar from '../src/components/bars/NameBar.vue';
import TitleBar from '../src/components/bars/TitleBar.vue';
import EnterBar from '../src/components/bars/EnterBar.vue';
import PageView from '../src/pages/PageView.vue';

export default {
  name: 'app',
  data() {
    return {
      no: 'none',
      enter: false,
      pageButton: 'about',
      scroll: true,
    };
  },
  computed: {
  },
  methods: {
    onScroll() {
      this.scroll = window.pageYOffset === 0;
    },
    enterCV() {
      this.enter = true;
    },
    change(prop) {
      switch (prop) {
        case 0:
          this.pageButton = 'about';
          break;
        case 1:
          this.pageButton = 'skills';
          break;
        case 2:
          this.pageButton = 'experience';
          break;
        case 3:
          this.pageButton = 'education';
          break;
        default:
          this.pageButton = null;
      }
    },
  },
  components: {
    NameBar,
    TitleBar,
    EnterBar,
    PageView,
  },
};
</script>

<style>

 /* Transitions */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .2s ease;
}
.slide-fade-leave-to {
  opacity: 0;
}
.slide-fade-enter {
  transform: translateY(150px);
  opacity: 0;
}

/* App Restyling */
#app {
  font-family: 'Roboto', sans-serif;
  color: #2c3e50;
  background-color: #eeeeee;
  /* background-color: #f7ffd8; */
  /* background-color: #f0ffe8; */
  /* background-color: #d7ccc8; */
  /* background-color: #bdbdbd; */
  min-width: 200px;
  /* min-height: 400px; */
}

.content, .content__wrap {
  padding: 0;
}

main.content {
  padding: 0;
}
.toolbar__content {
  justify-content: center;
  background-color: #eeeeee;
}

  /* Chip restyling */
.application .theme--light.chip, .theme--light .chip {
  background-color: #9ea7aa;
  /* background-color: #c4cca6; */
  /* background-color: #bdccb6; */
  /* background-color: #707070; */
}

.chip.chip--outline {
  border-color: #9ea7aa;
  color: #1b1b1b;
}

.chip:hover, .chip.chip--outline:hover {
    background-color: #2c3e50;
    border-color: #2c3e50;
}

.chip--selected {
  background-color: #2c3e50 !important;
}

 /* Container Restyling */
.title-container {
    padding: 0;
    padding-top: 20px;
    max-width: 650px;
    max-height: 174px;
    /* min-height: 180px; */
}

.divider-container {
  max-width: 500px;
  padding: 0;
  padding-bottom: 3;
  padding-top: 3;
}

 /* Custom Classes */
.width-limit-500 {
  max-width: 500px;
}

.width-limit-600 {
  max-width: 600px;
}

.width-limit-800 {
  max-width: 800px;
}

.width-limit-1000 {
  max-width: 1000px;
}

.transparent-background {
  background-color: none;
}

/* Text Restyling */
h1 {
  font-weight: 200;
  font-size: 70px;
}

h3 {
  font-weight: 200;
}

h2 {
  font-weight: 200;
}

.head {
  font-size: 25px;
}
.subhead {
  font-size: 20px;
}

.italic {
  font-style: italic;
}
</style>
