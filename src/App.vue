<template>
  <v-app v-resize="onResize" ref="app">
    <transition name="slide-up">
      <v-container :fill-height="!enter" pt-0 class="title-container">
        <v-flex column>
          <name-bar :text="textSize" key="name-center"></name-bar>
          <title-bar v-if="enter" @changePage="change"></title-bar>
          <enter-bar v-if="!enter" @enter="enterCV"></enter-bar>
        </v-flex>
      </v-container>
    </transition>
    <page-view v-if="enter" :pressed="pageButton"></page-view>
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
      screenSize: true,
      textSize: '70px',
      enter: false,
      pageButton: 'about',
    };
  },
  computed: {
  },
  methods: {
    enterCV() {
      this.enter = true;
      // do name-bar transition
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
    max-height: 230px;
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
