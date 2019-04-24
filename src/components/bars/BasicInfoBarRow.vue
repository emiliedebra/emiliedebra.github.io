<!-- Basic Info Bar -->

<template>
  <v-container class="about-page">
    <!-- Avatar -->
    <v-container pt-0 pb-0>
      <v-layout row>
        <v-flex>
          <v-avatar size="200px">
            <img src="/static/img/avatar.jpg">
          </v-avatar>
        </v-flex>
        <!-- Basic Info -->
        <v-flex>
          <v-container pt-4>
            <info-text
              v-for="item in basic"
              :key="item.title"
              :title="item.title"
              :content="item.content"
            ></info-text>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
import InfoText from "../text/InfoText.vue";

export default {
  name: "basic-info-bar-row",
  data() {
    return {
      basic: [
        {
          title: "Full Name",
          content: "Emilie Debra Wood"
        },
        {
          title: "Email",
          content: "emilie@anotherway.co.za"
        },
        {
          title: "Date of Birth",
          content: "13th January 1997"
        },
        {
          title: "Citizenship",
          content: "British"
        }
      ],
      additional: [
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
