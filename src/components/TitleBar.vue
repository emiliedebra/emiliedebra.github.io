<template>
  <v-container flat class="title text-xs-center">
    <v-flex row>
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
