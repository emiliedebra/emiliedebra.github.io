<template>
  <transition name="fade">
    <v-container flat class="title text-xs-center">
      <v-flex row>
        <v-btn-toggle v-model="selected">
          <v-btn flat>About Me</v-btn>
          <v-btn flat>Skills and Experience</v-btn>
          <v-btn flat>Education</v-btn>
          <v-btn flat>Contact Me</v-btn>
        </v-btn-toggle>
      </v-flex>
    </v-container>
  </transition>
</template>

<script>
export default {
  name: 'title-bar',
  data() {
    return {
      selected: 0,
    };
  },
  watch: {
    selected() {
      this.$emit('changePage', this.selected);
    },
  },
};
</script>

<style>
  .fade-enter-active {
    transition: opacity .5s
  }

  .fade-enter /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0
  }
  .theme--light .btn-toggle {
    background: none;
  }
  .btn-toggle--selected {
    box-shadow: none;
  }
  .btn__content {
    font-weight: 200;
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
