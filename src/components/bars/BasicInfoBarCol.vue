<!-- Basic Info Bar -->

<template>
  <v-container class="about-page">
    <v-layout column>
      <!-- Avatar -->
      <v-flex>
        <v-avatar size="200px">
          <img src="/static/img/avatar.jpg">
        </v-avatar>
      </v-flex>
      <!-- Text Info -->
      <v-container>
        <v-layout column>
          <!-- Basic Info -->
          <v-flex>
            <info-text
              v-for="item in basic"
              :key="item.title"
              :title="item.title"
              :content="item.content"
            ></info-text>
          </v-flex>
          <!-- Additional Info -->
          <v-flex>
            <info-text
              v-for="item in additional"
              :key="item.title"
              :title="item.title"
              :content="item.content"
            ></info-text>
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
import InfoText from "../text/InfoText.vue";

export default {
  name: "basic-info-bar-col",
  data() {
    return {
      basic: [
        {
          title: "Full Name",
          content: "Emilie Debra Wood"
        },
        {
          title: "Date of Birth",
          content: "13th January 1997"
        },
        {
          title: "Email",
          content: "emilie@anotherway.co.za"
        }
      ],
      additional: [
        {
          title: "Citizenship",
          content: "British"
        }
        // {
        //   title: 'Availability',
        //   content: 'Immediate',
        // },
      ]
    };
  },
  components: {
    InfoText
  }
};
</script>
