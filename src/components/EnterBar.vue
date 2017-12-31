<template>
  <v-container fill-height class="welcome-container">
    <v-container flat class="text-xs-center">
      <v-container class="text-xs-right">
        <v-btn @click.native="enter" flat icon>
          <v-icon>arrow_forward</v-icon>
        </v-btn>
      </v-container>
    </v-container>
  </v-container>
</template>

<script>

export default {
  name: 'welcome',
  methods: {
    enter() {
      this.$emit('enter');
    },
  },
};
</script>
<style>
  #welcome-container {
    padding: 0;
    padding-top: 20px;
    max-width: 575px;
  }
</style>
