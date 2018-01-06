<template>
  <v-container flat class="title" text-xs-center>
    <!-- <transition name="fade" mode="out-in"> -->
      <v-menu offset-y v-if="$mq.resize && $mq.below('650px')">
        <v-btn flat transparent slot="activator">
          {{ menuName }}
          <v-icon>keyboard_arrow_down</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile v-for="item in menuItems" :key="item.title" @click="select(item)">
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-flex v-if="$mq.resize && $mq.above('650px')">
        <v-btn-toggle mandatory v-model="selected">
          <v-btn flat>About Me</v-btn>
          <v-btn flat>Skills</v-btn>
          <v-btn flat>Experience</v-btn>
          <v-btn flat>Education</v-btn>
        </v-btn-toggle>
      </v-flex>
    <!-- </transition> -->
  </v-container>
</template>

<script>
export default {
  name: 'title-bar',
  data() {
    return {
      screenSize: false,
      selected: 0,
      menuName: 'About Me',
      menuItems: [
        {
          title: 'About Me',
          number: 0,
        },
        {
          title: 'Skills',
          number: 1,
        },
        {
          title: 'Experience',
          number: 2,
        },
        {
          title: 'Education',
          number: 3,
        },
      ],
    };
  },
  watch: {
    selected() {
      this.menuName = this.menuItems[this.selected].title;
      this.$emit('changePage', this.selected);
    },
  },
  methods: {
    select(item) {
      this.selected = item.number;
      this.menuName = ` ${item.title}`;
    },
    onSmallScreen() {
      if (window.innerWidth > 1000) {
        this.screenSize = false;
      } else {
        this.screenSize = true;
      }
    },
  },
};
</script>

<style>
  .theme--light .btn-toggle {
    background: none;
  }
  .btn-toggle--selected {
    box-shadow: none;
  }
  .btn__content {
    font-weight: 300;
    font-size: 20px;
  }
  .btn--active .btn__content:before, .btn:focus .btn__content:before, .btn:hover .btn__content:before {
    background-color: none;
    outline: black;
  }
  .title {
    padding: 0;
    margin: 0;
  }
  .fade-enter-active {
  transition: opacity 0.01s;
  }

  .fade-leave-active  {
    transition: opacity 0.01s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0
  }

  .fade-enter-to, .fade-leave {
    opacity: 1;
  }

</style>
