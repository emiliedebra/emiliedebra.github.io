<!-- Contact Page -->

<template>
  <transition name="fade">
    <v-container flat class="page text-xs-center">
      <h3>Coming Soon</h3>
    </v-container>
  </transition>
</template>

<script>

export default {
  name: 'contact',
};
</script>
<style>
.fade-enter-active {
  transition: opacity .3s
}

.fade-enter /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}

.fade-leave-active {
  transition: opacity .0s;
}

.fade-leave {
  opacity: 0;
}
</style>
