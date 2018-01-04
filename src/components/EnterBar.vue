<template>
  <v-container pa-0 class="text-xs-center">
    <v-btn @click.native="enter" flat icon>
      <v-icon>keyboard_arrow_down</v-icon>
    </v-btn>
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
</style>
