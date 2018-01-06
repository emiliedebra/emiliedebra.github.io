<template>
  <v-container flat class="title" text-xs-center v-resize="onSmallScreen">
    <v-menu offset-y v-if="screenSize">
      <v-btn flat transparent slot="activator">
        <v-icon v-if="this.menuName===''">menu</v-icon>
        {{ menuName }}
        <v-icon v-if="this.menuName!==''">keyboard_arrow_down</v-icon>
      </v-btn>
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title" @click="select(item)">
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-flex v-if="!screenSize">
      <v-btn-toggle v-model="selected">
        <v-btn flat>About Me</v-btn>
        <v-btn flat>Skills</v-btn>
        <v-btn flat>Experience</v-btn>
        <v-btn flat>Education</v-btn>
      </v-btn-toggle>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  name: 'title-bar',
  data() {
    return {
      screenSize: false,
      selected: null,
      menuName: '',
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
      this.$emit('changePage', this.selected);
    },
  },
  methods: {
    select(item) {
      this.selected=item.number;
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
</style>
