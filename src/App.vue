<template>
  <v-app>
    <v-container :fill-height="!enter" class="title-container">
      <v-flex column>
        <transition name="fade">
          <name-bar ref="name"></name-bar>
        </transition>
        <title-bar v-if="enter" @changePage="change"></title-bar>
        <enter-bar v-if="!enter" @enter="enterCV"></enter-bar>
        <!-- <router-view></router-view> -->
      </v-flex>
    </v-container>
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
      this.$refs.name.style.color = 'red';
    },
    change(prop) {
      switch (prop) {
        case 0:
          this.pageButton = 'about';
          break;
        case 1:
          this.pageButton = 'education';
          break;
        case 2:
          this.pageButton = 'skills';
          break;
        case 3:
          this.pageButton = 'contact';
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
body {
  margin: 0;
}

#app {
  font-family: 'Roboto', sans-serif;
  color: #2c3e50;
  background-color: #fafafa;
  /* background-color: #f9fbe7; */
}
.title-container {
    padding: 0;
    padding-top: 20px;
    max-width: 650px;
    max-height: 230px;
}

.transparent-background {
  background-color: none;
}
h1 {
  font-weight: 100;
  font-size: 70px;
}
h3 {
  font-weight: 200;
  /* font-size: 70px; */
}
</style>
