<!-- Skills Page -->

<template>
  <v-container flat text-xs-center class="skills-page">
    <v-container class="width-limit-1000">
      <v-layout row>
        <v-flex>
          <v-chip
            outline
            disabled
            :selected="item.pressed"
            :key="index"
            v-for="(item, index) in skills"
            @click.native="selectSkills(index)"
          >{{ item.title }}</v-chip>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container class="width-limit-1000">
      <v-layout row>
        <v-flex>
          <transition-group name="fade-chip">
            <v-chip
              close
              disabled
              :key="item.title"
              v-for="item in skillsSelected"
              @input="selectSkills(skills.indexOf(item))"
            >{{ item.title }}</v-chip>
          </transition-group>
        </v-flex>
      </v-layout>
    </v-container>
    <transition-group name="reorder">
      <skills-text
        v-for="item in skillsExplained"
        :key="item.title"
        :title="item.title"
        :content="item.content"
      ></skills-text>
    </transition-group>
  </v-container>
</template>

<script>
import SkillsText from "../components/text/SkillsText.vue";

export default {
  name: "skills",
  data() {
    return {
      skillsInitial: [
        {
          title: "Vue.js and Related",
          content: [
            "Front end development using Vue.js",
            "HTTP request handling using Vue Axios",
            "Application state management using Vuex",
            "Page routing using Vue Router",
            "Vuetify as a material design framework with customisation",
            "Exposure to transitions and animations in Vue.js"
          ],
          tags: [
            "Vue.js",
            "Vuex",
            "Vue-Axios",
            "Vuetify",
            "Vue-Router",
            "HTML5 and CSS",
            "SPA"
          ]
        },
        {
          title: "React and Related",
          content: [
            "Front end development using React",
            "Application state management using Redux",
            "Page routing using React Router",
            "Material UI as a material design framework with customisation",
            "Exposure to transitions and animations in React (Material UI)"
          ],
          tags: ["React", "React Router", "Redux", "Material UI", "PWA", "SPA"]
        },
        {
          title: "Node.js and Related",
          content: [
            "Development using Node.js and it’s package ecosystem (npm)",
            "Exposure to packages and frameworks such as Flow, Koa, Express, Rollup and Babel",
            "Database handling using GraphQL, ArangoDB (NoSQL) and MongoDB"
          ],
          tags: [
            "Node.js",
            "Javascript/ES5/6/7",
            "Flow",
            "Koa",
            "Express",
            "Rollup",
            "Babel",
            "GraphQL",
            "NoSQL",
            "ArangoDB",
            "MongoDB"
          ]
        },
        {
          title: "Testing with Mocha and Chai",
          content: [
            "Implementation of unit tests using Mocha framework",
            "Use of Chai alongside Mocha"
          ],
          tags: ["Mocha", "Chai"]
        },
        {
          title: "HTTP and WebSockets",
          content: [
            "Development of socket communication and real-time messaging",
            "Use of sockets for asynchronous communication"
          ],
          tags: ["HTTP", "WebSockets"]
        },
        {
          title: "Events",
          content: [
            "Use of EventEmitter through inheritance in custom classes",
            "Familiarity with client-server emitters and listeners"
          ],
          tags: ["EventEmitter"]
        },
        {
          title: "Material Web Design",
          content: [
            "Development of reusable components in Polymer",
            "Familiarity with Google Material Design Guidelines"
          ],
          tags: ["Polymer.js", "Google Material Design"]
        },
        {
          title: "Progressive Web Applications",
          content: [
            "Development of a PWA using Vue CLI (this web-app)",
            "Creation of mobile-friendly, scalable web-applications"
          ],
          tags: [
            "Vue.js",
            "Vuex",
            "Vue-Axios",
            "Vuetify",
            "Vue-Router",
            "HTML5 and CSS",
            "PWA"
          ]
        },
        {
          title: "Computing Algorithms",
          content: [
            "Study of basic Dynamic Programming implementations",
            "Study of Decrease and Conquer, Divide and Conquer, Brute Force, Greedy Algorithms etc"
          ],
          tags: ["Algorithms"]
        },
        {
          title: "Concurrent Programming and Threading",
          content: [
            "Development of basic threaded simulations",
            "Understanding of Parallelism and Concurrency",
            "Exposure to common software problems such as Dining Philosophers"
          ],
          tags: ["Concurrency", "Parallelism"]
        },
        {
          title: "Software Design Patterns",
          content: [
            "Familiarity with Scrum, Agile, XP",
            "Study of software application architectures",
            "Exposure to design patterns (Layered, Repository, Client-Server etc)"
          ],
          tags: ["Design Patterns"]
        },
        {
          title: "Java, Java Swing",
          content: [
            "Completion of all Java university courses",
            "Development of a basic game GUI using Swing"
          ],
          tags: ["Java", "Java Swing"]
        },
        {
          title: "Python",
          content: ["Basic number crunching and command line IO programming"],
          tags: ["Python"]
        },
        {
          title: "MatLab, LaTeX and Embedded C",
          content: [
            "Use of LaTeX for all University reports",
            "Audio synthesis using MatLab",
            "Use of Embedded C in programming a STM32F4Discovery Evaluation Board and STM32F0"
          ],
          tags: ["C", "C++", "MatLab", "Latex", "Assembly", "RTOS"]
        }
      ],
      skills: [
        {
          title: "Node.js",
          pressed: false
        },
        {
          title: "Javascript/ES5/6/7",
          pressed: false
        },
        {
          title: "Flow",
          pressed: false
        },
        {
          title: "Chai",
          pressed: false
        },
        {
          title: "Mocha",
          pressed: false
        },
        {
          title: "WebSockets",
          pressed: false
        },
        {
          title: "HTTP",
          pressed: false
        },
        {
          title: "EventEmitter",
          pressed: false
        },
        {
          title: "Babel",
          pressed: false
        },
        {
          title: "Express",
          pressed: false
        },
        {
          title: "Koa",
          pressed: false
        },
        {
          title: "Rollup",
          pressed: false
        },
        {
          title: "React",
          pressed: false
        },
        {
          title: "Redux",
          pressed: false
        },
        {
          title: "React Router",
          pressed: false
        },
        {
          title: "Vue.js",
          pressed: false
        },
        {
          title: "Vuex",
          pressed: false
        },
        {
          title: "Vuetify",
          pressed: false
        },
        {
          title: "Vue-Axios",
          pressed: false
        },
        {
          title: "Vue-Router",
          pressed: false
        },
        {
          title: "HTML5 and CSS",
          pressed: false
        },
        {
          title: "Google Material Design",
          pressed: false
        },
        {
          title: "PWA",
          pressed: false
        },
        {
          title: "SPA",
          pressed: false
        },
        {
          title: "ArangoDB",
          pressed: false
        },
        {
          title: "GraphQL",
          pressed: false
        },
        {
          title: "NoSQL",
          pressed: false
        },
        {
          title: "MongoDB",
          pressed: false
        },
        {
          title: "MySQL",
          pressed: false
        },
        {
          title: "C",
          pressed: false
        },
        {
          title: "C++",
          pressed: false
        },
        {
          title: "Java",
          pressed: false
        },
        {
          title: "Python",
          pressed: false
        },
        {
          title: "Assembly",
          pressed: false
        },
        {
          title: "RTOS",
          pressed: false
        },
        {
          title: "Polymer.js",
          pressed: false
        },
        {
          title: "Java Swing",
          pressed: false
        },
        {
          title: "Parallelism",
          pressed: false
        },
        {
          title: "Algorithms",
          pressed: false
        },
        {
          title: "Concurrency",
          pressed: false
        },
        {
          title: "Design Patterns",
          pressed: false
        }
      ],
      skillsExplained: [],
      skillsSelected: []
    };
  },
  components: {
    SkillsText
  },
  mounted() {
    this.skillsExplained = [...this.skillsInitial];
  },
  methods: {
    selectSkills(pressed) {
      if (this.skills[pressed].pressed) {
        this.skills[pressed].pressed = false;
        // remove selected
        this.skillsSelected.splice(
          this.skillsSelected.indexOf(this.skills[pressed]),
          1
        );
        this.reorderSkills();
        // this.skills.splice(this.skills.length, 0, this.skills[pressed]);
        // this.skills.splice(pressed, 1);
      } else {
        this.skills[pressed].pressed = true;
        // add selected
        this.skillsSelected.splice(0, 0, this.skills[pressed]);
        this.reorderSkills();
        // this.skills.splice(0, 0, this.skills[pressed]);
        // this.skills.splice(pressed + 1, 1);
      }
    },
    reorderSkills() {
      this.skillsExplained = [...this.skillsInitial];
      // most recently selected is at index 0
      for (
        let itemIndex = this.skillsSelected.length - 1;
        itemIndex > -1;
        itemIndex--
      ) {
        const item = this.skillsSelected[itemIndex];
        for (const skill of this.skillsExplained) {
          if (skill.tags.indexOf(item.title) !== -1) {
            // add to beginning
            // remove from original
            this.skillsExplained.splice(this.skillsExplained.indexOf(skill), 1);
            this.skillsExplained.splice(0, 0, skill);
            // break;
          }
        }
      }
    }
  }
};
</script>
<style>
.skills-page {
  padding-top: 0;
  padding-bottom: 0;
}

.reorder-move {
  transition: transform 1s;
}

.fade-chip-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.fade-chip-enter,
.fade-chip-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.fade-chip-leave-active {
  position: absolute;
}
</style>
