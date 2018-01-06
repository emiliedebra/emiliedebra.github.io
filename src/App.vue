<template>
  <v-app v-resize="onResize" ref="app">
    <!-- <v-content> -->
      <v-container :fill-height="!enter" pt-0 class="title-container">
        <v-layout column>

          <!-- Before Enter -->
          <name-bar :text="textSize" key="name-center" v-if="!enter"></name-bar>
          <enter-bar v-if="!enter" @enter="enterCV"></enter-bar>

          <!-- After Enter -->
          <transition name="slide-fade">
            <name-bar :text="textSize" v-if="enter"></name-bar>
          </transition>
          <transition name="slide-fade">
            <title-bar key="title" v-if="enter" @changePage="change"></title-bar>
          </transition>
        </v-layout>
      </v-container>
      <v-content v-if="enter">
        <page-view :pressed="pageButton"></page-view>
      </v-content>
    <!-- </v-content> -->
  </v-app>
</template>

<script>
import NameBar from '../src/components/NameBar.vue';
import TitleBar from '../src/components/TitleBar.vue';
import EnterBar from '../src/components/EnterBar.vue';
import PageView from '../src/pages/PageView.vue';

export default {
  name: 'app',
  data() {
    return {
      screenSize: false,
      textSize: '70px',
      enter: false,
      pageButton: '',
    };
  },
  computed: {
  },
  methods: {
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
    onResize() {
      if (this.$refs.app.clientWidth < 600) {
        this.textSize = '30px';
      } else {
        this.textSize = '70px';
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
body {
  margin: 0;
}
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(150px);
  opacity: 0;
}
#app {
  font-family: 'Roboto', sans-serif;
  color: #2c3e50;
  background-color: #fafafa;
  min-width: 200px;
  /* min-height: 400px; */
  /* background-color: #f9fbe7; */
}

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

.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}

.fade-enter-to, .fade-leave {
  opacity: 1;
}

h1 {
  font-weight: 200;
  font-size: 70px;
}

h3 {
  font-weight: 200;
  /* font-size: 70px; */
}

h2 {
  font-weight: 200;
  /* font-size: 70px; */
}
</style>
