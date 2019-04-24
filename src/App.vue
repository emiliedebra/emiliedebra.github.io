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
      <!-- <v-parallax src="../static/img/background/mona-eendra-208388.jpg"> -->
      <v-container v-if="enter" pl-0 pr-0>
        <v-layout column>
          <v-toolbar flat fixed text-xs-center app height="160px">
            <v-toolbar-items>
              <v-layout column>
                <name-bar v-if="enter"></name-bar>
                <title-bar key="title" @changePage="change"></title-bar>
              </v-layout>
            </v-toolbar-items>
          </v-toolbar>
          <v-content>
            <page-view :pressed="pageButton"></page-view>
          </v-content>
        </v-layout>
      </v-container>
      <!-- </v-parallax> -->
    </transition>
  </v-app>
</template>

<script>
import NameBar from "../src/components/bars/NameBar.vue";
import TitleBar from "../src/components/bars/TitleBar.vue";
import EnterBar from "../src/components/bars/EnterBar.vue";
import PageView from "../src/pages/PageView.vue";

export default {
  name: "app",
  data() {
    return {
      no: "none",
      enter: false,
      pageButton: "about",
      scroll: true
    };
  },
  computed: {},
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
          this.pageButton = "about";
          break;
        case 1:
          this.pageButton = "skills";
          break;
        case 2:
          this.pageButton = "experience";
          break;
        case 3:
          this.pageButton = "education";
          break;
        default:
          this.pageButton = null;
      }
    }
  },
  components: {
    NameBar,
    TitleBar,
    EnterBar,
    PageView
  }
};
</script>

<style>
/* Transitions */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s ease;
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
  font-family: "Roboto", sans-serif;
  color: #2c3e50;
  background-color: #eeeeee;
  /* background-color: #e8eaf6; */
  /* background-color: #f7f1e7e0; */
  /* background-color: #f0ffe8; */
  /* background-color: #d7ccc8; */
  /* background-color: #bdbdbd; */
  min-width: 200px;
  /* min-height: 400px; */
}

.content,
.content__wrap {
  padding: 0;
}

main.content {
  padding: 0;
}
.toolbar__content {
  justify-content: center;
  background-color: #eeeeee;
  /* background-color: #f7f1e7e0; */
  /* background-color: #e8eaf6; */
}

/* Chip restyling */
.application .theme--light.chip,
.theme--light .chip {
  background-color: grey-lighten-3;
  /* background-color: #ddc2cac2; */
  /* background-color: #fce4ec; */
  /* background-color: #bdccb6; */
  /* background-color: #707070; */
}

.chip.chip--outline {
  border-color: #aa9ea4;
  color: #1b1b1b;
}

.chip:hover,
.chip.chip--outline:hover {
  background-color: #135e5ab6;
  border-color: #135e5ab6;
}

.chip--selected {
  background-color: #135e5ab6 !important;
}
.chip--selected.chip--outline {
  background-color: #135e5ab6 !important;
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
