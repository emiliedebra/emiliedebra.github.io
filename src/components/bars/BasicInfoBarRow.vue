<!-- Basic Info Bar -->

<template>
  <v-container class="about-page">
    <v-layout row>
      <!-- Avatar -->
      <v-flex>
        <v-avatar size="200px">
          <img src="/static/img/avatar.png">
        </v-avatar>
      </v-flex>
      <v-container>
        <v-layout row>
          <!-- Basic Info -->
          <v-flex>
            <info-text v-for="item in basic" :key="item.title" :title="item.title" :content="item.content"></info-text>
          </v-flex>
          <!-- Additional Info -->
          <v-flex>
            <info-text v-for="item in additional" :key="item.title" :title="item.title" :content="item.content"></info-text>
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
import InfoText from '../text/InfoText.vue';

export default {
  name: 'basic-info-bar-row',
  data() {
    return {
      basic: [
        {
          title: 'Full Name',
          content: 'Emilie Debra Wood',
        },
        {
          title: 'Date of Birth',
          content: '13th January 1997',
        },
        {
          title: 'Place of Birth',
          content: 'Cambridge, United Kingdom',
        },
      ],
      additional: [
        {
          title: 'Email',
          content: 'emilie@anotherway.co.za',
        },
        {
          title: 'Citizenship',
          content: 'British',
        },
        {
          title: 'Availability',
          content: '19th February 2018',
        },
      ],
    };
  },
  components: {
    InfoText,
  },
};
</script>
