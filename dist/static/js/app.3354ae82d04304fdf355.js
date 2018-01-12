webpackJsonp([1],[,,,,,,,,,,function(t,e,n){"use strict";var i=n(25),a=n(74),s=n(0),o=s(i.a,a.a,!1,null,null,null);e.a=o.exports},,,,,,,,,function(t,e,n){"use strict";var i=n(61),a=n(64),s=n(67),o=n(70);e.a={name:"app",data:function(){return{no:"none",enter:!1,pageButton:"about",scroll:!0}},computed:{},methods:{onScroll:function(){this.scroll=0===window.pageYOffset},enterCV:function(){this.enter=!0},change:function(t){switch(t){case 0:this.pageButton="about";break;case 1:this.pageButton="skills";break;case 2:this.pageButton="experience";break;case 3:this.pageButton="education";break;default:this.pageButton=null}}},components:{NameBar:i.a,TitleBar:a.a,EnterBar:s.a,PageView:o.a}}},function(t,e,n){"use strict";e.a={name:"name-bar",data:function(){return{name:"emilie debra wood",initials:"edw"}}}},function(t,e,n){"use strict";e.a={name:"title-bar",data:function(){return{screenSize:!1,selected:0,menuName:"About Me",menuItems:[{title:"About Me",number:0},{title:"Skills",number:1},{title:"Experience",number:2},{title:"Education",number:3}]}},watch:{selected:function(){this.menuName=this.menuItems[this.selected].title,this.$emit("changePage",this.selected)}},methods:{select:function(t){this.selected=t.number,this.menuName=" "+t.title},onSmallScreen:function(){window.innerWidth>1e3?this.screenSize=!1:this.screenSize=!0}}}},function(t,e,n){"use strict";e.a={name:"enter-bar",methods:{enter:function(){this.$emit("enter")}}}},function(t,e,n){"use strict";var i=n(72),a=n(81),s=n(86),o=n(122);e.a={name:"home",props:["pressed"],components:{AboutPage:i.a,EducationPage:a.a,SkillsPage:s.a,ExperiencePage:o.a}}},function(t,e,n){"use strict";var i=n(10),a=n(75),s=n(77);e.a={name:"about",data:function(){return{github:"https://github.com/emiliedebra",linkedin:"https://www.linkedin.com/in/emilie-wood/",basic:[{title:"Full Name",content:"Emilie Debra Wood"},{title:"Date of Birth",content:"13th January 1997"},{title:"Place of Birth",content:"Cambridge, United Kingdom"}],additional:[{title:"Email",content:"emilie@anotherway.co.za"},{title:"Citizenship",content:"British"},{title:"Availability",content:"19th February 2018"}],bio:{title:"Bio",content:["UCT BSc Computer Science and Computer Engineering graduate.","I have a passion for problem solving, with a determined and positive attitude towards\n          solving life's continuous complex problems. This is applied effectively in the software development industry,\n          in which I have several years of student vacation work experience developing business applications -\n          both backend and frontend.","Whilst software engineering utilises my practical and technical side,\n          I am a music and dance enthusiast with the ability to approach design problems from\n          an artistic and creative perspective as well.","My problem-solving ability is applied throughout all aspects of my life, and I am continuously\n          seeking to gain knowledge. When not gaining this knowledge in a software environment,\n          I am an advocate for self-improvement and am always striving to better my physical and mental health."]}}},components:{InfoText:i.a,BasicInfoBarRow:s.a,BasicInfoBarCol:a.a}}},function(t,e,n){"use strict";e.a={name:"info-text",props:["title","content"]}},function(t,e,n){"use strict";var i=n(10);e.a={name:"basic-info-bar-col",data:function(){return{basic:[{title:"Full Name",content:"Emilie Debra Wood"},{title:"Date of Birth",content:"13th January 1997"},{title:"Place of Birth",content:"Cambridge, United Kingdom"}],additional:[{title:"Email",content:"emilie@anotherway.co.za"},{title:"Citizenship",content:"British"},{title:"Availability",content:"19th February 2018"}]}},components:{InfoText:i.a}}},function(t,e,n){"use strict";var i=n(10);e.a={name:"basic-info-bar-row",data:function(){return{basic:[{title:"Full Name",content:"Emilie Debra Wood"},{title:"Date of Birth",content:"13th January 1997"},{title:"Place of Birth",content:"Cambridge, United Kingdom"}],additional:[{title:"Email",content:"emilie@anotherway.co.za"},{title:"Citizenship",content:"British"},{title:"Availability",content:"19th February 2018"}]}},components:{InfoText:i.a}}},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg=="},function(t,e,n){"use strict";var i=n(83);e.a={name:"education",data:function(){return{tertiary:[{institution:"University of Cape Town",year:"July 2017 - November 2017",description:"BSc in Computer Science and Computer Engineering",additional:"Graduated with a 76.5% average",logo:"logo"},{institution:"University of Cape Town",year:"2015 – July 2017",description:"BSc Eng in Electrical and Computer Engineering",additional:"Dean's Merit List Student for 2015, 2016 and 2017",logo:"Port_Shepstone_High_School.gif"}],secondary:[{institution:"Port Shepstone High School",year:"2010 - 2014",description:"National Senior Certificate",additional:"Awarded Dux of the School"}]}},components:{EducationText:i.a}}},function(t,e,n){"use strict";e.a={name:"education-text",props:["content"],computed:{header:function(){return this.content.institution+" | "+this.content.year},logoLink:function(){return"../../assets/"+this.content.logo}}}},function(t,e,n){"use strict";var i=n(11),a=n.n(i),s=n(111),o=n.n(s),r=n(119);e.a={name:"skills",data:function(){return{skillsInitial:[{title:"Vue.js and Related",content:["Front end development using Vue.js","HTTP request handling using Vue Axios","State handling through Vuex","Page routing through Vue Router","Vuetify as a material design framework","Exposure to transitions and animations in Vue.js"],tags:["Vue.js","Vuex","Vue Axios","Vuetify","Vue Router","HTML5 and CSS","SWA"]},{title:"Node.js and Related",content:["Development using Node.js and it’s package ecosystem (npm)","Exposure to packages such as Flow, Koa, Express, Rollup, Babel, Browserify and Webpack","Database handling using GraphQL, NoSQL, ArangoDB and MongoDB"],tags:["Node.js","Javascript/ES6/7","Flow","Koa","Express","Rollup","Babel","Browserify","Webpack","GraphQL","NoSQL","ArangoDB","MongoDB"]},{title:"Material Web Design",content:["Development of reusable components in Polymer","Familiarity with Material Design Guidelines"],tags:["Polymer.js","Google Material Design"]},{title:"Progressive Web Applications",content:["Development of a PWA using Vue CLI (this web-app)","Creation of mobile-friendly, scalable web-applications"],tags:["Vue.js","Vuex","Vue Axios","Vuetify","Vue Router","HTML5 and CSS","PWA"]},{title:"Computing Algorithms",content:["Study of basic Dynamic Programming implementations","Study of Decrease and Conquer, Divide and Conquer, Brute Force, Greedy Algorithms etc","Implementation in Java"],tags:["Java"]},{title:"Concurrent Programming and Threading",content:["Development of basic threaded simulations in Java","Understanding of Parallelism and Concurrency","Exposure to common software problems such as Dining Philosophers"],tags:["Java"]},{title:"Software Design Patterns",content:["Familiarity with Scrum, Agile, XP","Study of software application architectures","Exposure to design patterns (Layered, Repository, Client-Server etc)"],tags:[]},{title:"Java, Java Swing",content:["Completion of all Java university courses","Development of a basic game GUI using Swing"],tags:["Java","Java Swing"]},{title:"Python",content:["Basic number crunching and command line IO programming"],tags:["Python"]},{title:"MatLab, LaTeX and Embedded C",content:["Use of LaTeX for all University reports","Audio synthesis using MatLab","Use of Embedded C in programming a STM32F4Discovery Evaluation Board and STM32F0"],tags:["C","C++","MatLab","Latex","Assembly","RTOS"]}],skills:[{title:"Node.js",pressed:!1},{title:"Javascript/ES6/7",pressed:!1},{title:"Flow",pressed:!1},{title:"Babel",pressed:!1},{title:"Browserify",pressed:!1},{title:"Webpack",pressed:!1},{title:"Express",pressed:!1},{title:"Java",pressed:!1},{title:"Vue.js",pressed:!1},{title:"Vuex",pressed:!1},{title:"Vuetify",pressed:!1},{title:"Vue Axios",pressed:!1},{title:"Vue Router",pressed:!1},{title:"HTML5 and CSS",pressed:!1},{title:"Google Material Design",pressed:!1},{title:"PWA",pressed:!1},{title:"SPA",pressed:!1},{title:"ArangoDB",pressed:!1},{title:"GraphQL",pressed:!1},{title:"NoSQL",pressed:!1},{title:"MongoDB",pressed:!1},{title:"MySQL",pressed:!1},{title:"C",pressed:!1},{title:"C++",pressed:!1},{title:"Python",pressed:!1},{title:"Assembly",pressed:!1},{title:"RTOS",pressed:!1},{title:"Polymer.js",pressed:!1},{title:"Java Swing",pressed:!1},{title:"Koa",pressed:!1},{title:"Rollup",pressed:!1},{title:"Yarn",pressed:!1}],skillsExplained:[],skillsSelected:[]}},components:{SkillsText:r.a},mounted:function(){this.skillsExplained=[].concat(o()(this.skillsInitial))},methods:{selectSkills:function(t){this.skills[t].pressed?(this.skills[t].pressed=!1,this.skillsSelected.splice(this.skillsSelected.indexOf(this.skills[t]),1),this.reorderSkills()):(this.skills[t].pressed=!0,this.skillsSelected.splice(0,0,this.skills[t]),this.reorderSkills())},reorderSkills:function(){this.skillsExplained=[].concat(o()(this.skillsInitial));for(var t=this.skillsSelected.length-1;t>-1;t--){var e=this.skillsSelected[t],n=!0,i=!1,s=void 0;try{for(var r,l=a()(this.skillsExplained);!(n=(r=l.next()).done);n=!0){var c=r.value;-1!==c.tags.indexOf(e.title)&&(this.skillsExplained.splice(this.skillsExplained.indexOf(c),1),this.skillsExplained.splice(0,0,c))}}catch(t){i=!0,s=t}finally{try{!n&&l.return&&l.return()}finally{if(i)throw s}}}}}}},,,,,,,,,,,,,,,function(t,e,n){"use strict";e.a={name:"skills-text",props:["title","content"]}},function(t,e,n){"use strict";var i=n(124),a=n(127);e.a={name:"experience",data:function(){return{projects:[{title:"Research Paper Management Web Application",institution:"UCT Capstone Project (Final Year Project)",link:"https://github.com/emiliedebra/capstone-demo-front-end",description:"Developed the frontend and a partial backend of a web-application designed to allow\n          easy management of a database of research papers related to the Center of Aritificial Intelligence Research\n          in South Africa.",techUsed:[{title:"Vue.js",content:"Used Vue CLI with Node.js as the basic technology behind the project. The app is bundled using Webpack.",show:!1},{title:"Vuex",content:"Used for global app state handling with a local store of\n              states shared between different pages in the app. Used for non-sensitive state handling.",show:!1},{title:"Vuetify",content:"Used as the basic material UI framework.\n              The app followed a standard layout that follows the Google Material Design guidelines",show:!1},{title:"Vue Axios",content:"Used as the HTTP client library, implementing Promise handling.",show:!1},{title:"Node.js",content:"The backend of the app was developed (not fully by me), using an npm package ecosystem and ES6",show:!1},{title:"Babel",content:"Package used for ES6 to ES5 translation",show:!1},{title:"Express",content:"Used as the web framework for Node.js",show:!1},{title:"MySQL",content:"Database handling",show:!1}]},{title:"Physical Step Sequencer",institution:"UCT Embedded Systems (3rd Year Project)",date:"January 2017 - November 2017",link:"https://github.com/emiliedebra/embedded-project",description:"Developed a physical implementation of a step sequencer using an STM32F4Discovery Evaluation\n           Board. Audio waveforms were synthesised using MatLab and C to mimic sound fonts of drum kits and piano scales.",techUsed:[{title:"C",content:"Language chosen for all programming of the microcontrollers",show:!1},{title:"Atollic",content:"IDE used for compilation and linking to STM microcontrollers",show:!1},{title:"MatLab",content:"Used for performing audio waveform manipulation",show:!1},{title:"LaTeX",content:"Report handling",show:!1}]}],experiences:[{title:"Backend Developer",company:"AnotherwayTech",date:"December 2017 - Present",description:"Involvement in the back-end development of a CryptoCurrency trading system using Javascript/ES6/7,\n           Node.js and Flow. Currently tasked with writing exchange API’s.",techUsed:[{title:"Javascript/ES6/7",content:"Familiarity with modern syntax"},{title:"Node.js",content:"Exposure to using the package ecosystem (npm), with focus on babel, webpack and browserify"},{title:"Flow",content:"Implementation of syntactical type-checking"}]},{title:"Private Tutor",company:"Get Smart Tutors (Cape Town) ",date:"January 2017 - November 2017",description:"Private Tutor for a 1st Year Electrical and Computer Engineering Student at the University of Cape Town\n          (focus on Computer Science and Electrical Engineering Basics)",techUsed:[{title:"Python",content:"Basic text-based development"},{title:"Java",content:"Basic application developement with the GUI implemented in Swing"}]},{title:"Computer Science Tutor ",company:"University of Cape Town",date:"January 2016 - November 2017",description:"Tutor for the 1st year Computer Science (CSC1015F, CSC1016S)\n          Courses in basic Python and Java.",techUsed:[{title:"Python",content:"Basic text-based development"},{title:"Java",content:"Basic application developement with the GUI implemented in Swing"}]},{title:"Backend and Frontend Developer",company:"AdvancedApps PTY Ltd.",date:"January 2016 - January 2017",description:"Part-time involvement in the backend development of business applications using Javascript (ES6)\n          and Node.js components which drew on technologies such as GraphQL, ArangoDB and Koa.\n          Some exposure to frontend technologies such as Google Polymer, HTML5 and CSS, as well as Google’s Material Design.",techUsed:[{title:"Javascript/ES6",content:"Development of the backend of a simple messaging system using modern syntax"},{title:"GraphQL",content:"NoSQL framework used for database handling"},{title:"ArangoDB",content:"Use of graph model, with some exposure to KV and document models"},{title:"Koa",content:"Used as the web framework for Node.js"},{title:"Google Polymer",content:"Material Design familiarity and basic component creation"},{title:"HTML5 and CSS",content:"Good familiarity with HTML and CSS"},{title:"Babel",content:"ES6 to ES5 translation"}]}]}},components:{ExperienceText:i.a,ProjectText:a.a}}},function(t,e,n){"use strict";var i=n(11),a=n.n(i);e.a={name:"experience-text",props:["content"],computed:{header:function(){return this.content.title+" | "+this.content.company+" | "+this.content.date}},data:function(){return{showItem:!1,showItemContent:null}},methods:{show:function(t,e){this.clearSelect(),this.showItem&&this.showItemContent===t?(this.showItem=!1,this.content.techUsed[e].show=!1):(this.showItem=!0,this.showItemContent=t,this.content.techUsed[e].show=!0)},clearSelect:function(){var t=!0,e=!1,n=void 0;try{for(var i,s=a()(this.content.techUsed);!(t=(i=s.next()).done);t=!0){i.value.show=!1}}catch(t){e=!0,n=t}finally{try{!t&&s.return&&s.return()}finally{if(e)throw n}}}}}},function(t,e,n){"use strict";var i=n(11),a=n.n(i);e.a={name:"project-text",props:["content"],data:function(){return{showItem:!1,showItemContent:null}},methods:{show:function(t,e){this.clearSelect(),this.showItem&&this.showItemContent===t?(this.showItem=!1,this.content.techUsed[e].show=!1):(this.showItem=!0,this.showItemContent=t,this.content.techUsed[e].show=!0)},clearSelect:function(){var t=!0,e=!1,n=void 0;try{for(var i,s=a()(this.content.techUsed);!(t=(i=s.next()).done);t=!0){i.value.show=!1}}catch(t){e=!0,n=t}finally{try{!t&&s.return&&s.return()}finally{if(e)throw n}}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(51),a=n(55),s=n.n(a),o=n(56),r=n.n(o),l=n(57),c=(n.n(l),n(59));i.a.config.productionTip=!1,i.a.use(s.a),i.a.use(r.a),new i.a({el:"#app",template:"<App/>",components:{App:c.a}})},,,,,,,function(t,e){},,function(t,e,n){"use strict";function i(t){n(60)}var a=n(19),s=n(132),o=n(0),r=i,l=o(a.a,s.a,!1,r,null,null);e.a=l.exports},function(t,e){},function(t,e,n){"use strict";function i(t){n(62)}var a=n(20),s=n(63),o=n(0),r=i,l=o(a.a,s.a,!1,r,null,null);e.a=l.exports},function(t,e){},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"name-container",attrs:{"text-xs-center":""}},[n("h1",{attrs:{id:"small"}},[t._v(t._s(t.initials))]),t._v(" "),n("h1",{attrs:{id:"full"}},[t._v(t._s(t.name))]),t._v(" "),n("v-divider")],1)},a=[],s={render:i,staticRenderFns:a};e.a=s},function(t,e,n){"use strict";function i(t){n(65)}var a=n(21),s=n(66),o=n(0),r=i,l=o(a.a,s.a,!1,r,null,null);e.a=l.exports},function(t,e){},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"title",attrs:{flat:"","text-xs-center":""}},[n("v-flex",{attrs:{id:"small"}},[n("v-menu",{attrs:{"offset-y":""}},[n("v-btn",{attrs:{slot:"activator",flat:"",transparent:""},slot:"activator"},[t._v("\n        "+t._s(t.menuName)+"\n        "),n("v-icon",[t._v("keyboard_arrow_down")])],1),t._v(" "),n("v-list",t._l(t.menuItems,function(e){return n("v-list-tile",{key:e.title,on:{click:function(n){t.select(e)}}},[n("v-list-tile-title",[t._v(t._s(e.title))])],1)}))],1)],1),t._v(" "),n("v-flex",{attrs:{id:"full"}},[n("v-btn-toggle",{attrs:{mandatory:""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[n("v-btn",{attrs:{flat:""}},[t._v("About Me")]),t._v(" "),n("v-btn",{attrs:{flat:""}},[t._v("Skills")]),t._v(" "),n("v-btn",{attrs:{flat:""}},[t._v("Experience")]),t._v(" "),n("v-btn",{attrs:{flat:""}},[t._v("Education")])],1)],1)],1)},a=[],s={render:i,staticRenderFns:a};e.a=s},function(t,e,n){"use strict";function i(t){n(68)}var a=n(22),s=n(69),o=n(0),r=i,l=o(a.a,s.a,!1,r,null,null);e.a=l.exports},function(t,e){},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"text-xs-center",attrs:{"pa-0":""}},[n("v-btn",{attrs:{flat:"",icon:""},nativeOn:{click:function(e){t.enter(e)}}},[n("v-icon",[t._v("keyboard_arrow_down")])],1)],1)},a=[],s={render:i,staticRenderFns:a};e.a=s},function(t,e,n){"use strict";function i(t){n(71)}var a=n(23),s=n(131),o=n(0),r=i,l=o(a.a,s.a,!1,r,null,null);e.a=l.exports},function(t,e){},function(t,e,n){"use strict";function i(t){n(73)}var a=n(24),s=n(79),o=n(0),r=i,l=o(a.a,s.a,!1,r,null,null);e.a=l.exports},function(t,e){},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"pa-0":""}},[n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{"pr-2":"",xs6:"","text-xs-right":""}},[n("h3",[t._v(t._s(t.title))])]),t._v(" "),n("v-flex",{attrs:{xs6:"","text-xs-left":""}},[n("p",{attrs:{"pa-0":"","ma-0":""}},[t._v(t._s(t.content))])])],1)],1)},a=[],s={render:i,staticRenderFns:a};e.a=s},function(t,e,n){"use strict";var i=n(26),a=n(76),s=n(0),o=s(i.a,a.a,!1,null,null,null);e.a=o.exports},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"about-page"},[n("v-layout",{attrs:{column:""}},[n("v-flex",[n("v-avatar",{attrs:{size:"200px"}},[n("img",{attrs:{src:"/static/img/avatar.jpg"}})])],1),t._v(" "),n("v-container",[n("v-layout",{attrs:{column:""}},[n("v-flex",t._l(t.basic,function(t){return n("info-text",{key:t.title,attrs:{title:t.title,content:t.content}})})),t._v(" "),n("v-flex",t._l(t.additional,function(t){return n("info-text",{key:t.title,attrs:{title:t.title,content:t.content}})}))],1)],1)],1)],1)},a=[],s={render:i,staticRenderFns:a};e.a=s},function(t,e,n){"use strict";var i=n(27),a=n(78),s=n(0),o=s(i.a,a.a,!1,null,null,null);e.a=o.exports},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"about-page"},[n("v-layout",{attrs:{row:""}},[n("v-flex",[n("v-avatar",{attrs:{size:"200px"}},[n("img",{attrs:{src:"/static/img/avatar.jpg"}})])],1),t._v(" "),n("v-container",[n("v-layout",{attrs:{row:""}},[n("v-flex",t._l(t.basic,function(t){return n("info-text",{key:t.title,attrs:{title:t.title,content:t.content}})})),t._v(" "),n("v-flex",t._l(t.additional,function(t){return n("info-text",{key:t.title,attrs:{title:t.title,content:t.content}})}))],1)],1)],1)],1)},a=[],s={render:i,staticRenderFns:a};e.a=s},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"about-page width-limit-800",attrs:{"text-xs-center":""}},[i("basic-info-bar-row",{attrs:{id:"row"}}),t._v(" "),i("basic-info-bar-col",{attrs:{id:"col"}}),t._v(" "),i("v-container",{staticClass:"divider-container",attrs:{"pa-0":"","pt-3":"","pb-3":""}},[i("v-divider")],1),t._v(" "),t._l(t.bio.content,function(e){return i("v-card",{key:e,staticClass:"transparent",attrs:{flat:""}},[i("v-card-text",{staticClass:"no-space"},[t._v(t._s(e))])],1)}),t._v(" "),i("v-tooltip",{attrs:{top:""}},[i("v-btn",{attrs:{slot:"activator",icon:"",flat:"",href:this.github,target:"_blank","pa-0":"","ma-0":""},slot:"activator"},[i("img",{attrs:{src:n(28),size:"16px"}})]),t._v(" "),i("span",[t._v("View GitHub Profile")])],1),t._v(" "),i("v-tooltip",{attrs:{top:""}},[i("v-btn",{attrs:{slot:"activator",icon:"",flat:"",href:this.linkedin,target:"_blank","pa-0":"","ma-0":""},slot:"activator"},[i("img",{attrs:{src:n(80),size:"16px"}})]),t._v(" "),i("span",[t._v("View LinkedIn Profile")])],1)],2)},a=[],s={render:i,staticRenderFns:a};e.a=s},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAiCAYAAADLTFBPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFMUFCQzU0MTFDN0QxMUUyQjkxNEY3RUNEMkY1ODRBRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFMUFCQzU0MjFDN0QxMUUyQjkxNEY3RUNEMkY1ODRBRCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkUxQUJDNTNGMUM3RDExRTJCOTE0RjdFQ0QyRjU4NEFEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkUxQUJDNTQwMUM3RDExRTJCOTE0RjdFQ0QyRjU4NEFEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+l63yRQAAAYpJREFUeNpiYGBgEADiCUD8f4DwApAb/v//z0AsZhhgB8MdToqjGaGaBhwAHcNIrFomhkECGBkZFYhWO2xCmomJaSGQ4oEaxM3KyrqYYZABlEzBwsJyCFviB4nTMjOSkhExQvrPnz97sPkMl/hAAFIy4r1B62hgMnDBphAonjZo0zQIAzMiqJZih9Y+7FD+/8GSpodkkcdCbcuByegJkLqPVGkI/v79W4fmyQNHIwWnPKg4BJblX4ByMTj0sgNxP7WSB1UcDQR1sDxAwLIYmqVpbOkLGM3/yUl/6AAYI4eAZb7tkGowAR3cSXHjipohDVRTByvngWre//37twJIX0dTA0rfPygJaaqkaaR0TVQ7huptDwqKOpfB2PYgJ/3aDnZHK9Ktl0OtjIgsT4pZQ7qPOGjSNK0Ay2BzEDDppCElmVlQ/hYg+xmQLQVk+wy6kAY5FJmGAieog52GUvIA1apGUHpoOBoY6meBlBSUHh0WGy3yCDl64SBwB8luAA2q03yIgIGKg+oAAQYANTTsUy3H+l8AAAAASUVORK5CYII="},function(t,e,n){"use strict";function i(t){n(82)}var a=n(29),s=n(85),o=n(0),r=i,l=o(a.a,s.a,!1,r,null,null);e.a=l.exports},function(t,e){},function(t,e,n){"use strict";var i=n(30),a=n(84),s=n(0),o=s(i.a,a.a,!1,null,null,null);e.a=o.exports},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"width-limit-500 text-xs-left",attrs:{"pa-0":"","pt-2":""}},[n("v-layout",{attrs:{column:""}},[n("v-flex",[n("h3",{staticClass:"subhead"},[t._v(t._s(t.header))])]),t._v(" "),n("v-flex",{attrs:{"text-align-left":""}},[n("ul",[t._v(t._s(t.content.description))]),t._v(" "),n("ul",{staticClass:"italic"},[t._v(t._s(t.content.additional))])])],1)],1)},a=[],s={render:i,staticRenderFns:a};e.a=s},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"education-page width-limit-500",attrs:{flat:"","text-xs-left":""}},[n("h3",{staticClass:"head"},[t._v("Tertiary Education")]),t._v(" "),t._l(t.tertiary,function(t){return n("education-text",{key:t.title,attrs:{content:t}})}),t._v(" "),n("v-container",{staticClass:"divider-container",attrs:{"pa-0":"","pt-3":"","pb-3":""}},[n("v-divider")],1),t._v(" "),n("h3",{staticClass:"head"},[t._v("Secondary Education")]),t._v(" "),t._l(t.secondary,function(t){return n("education-text",{key:t.title,attrs:{content:t}})})],2)},a=[],s={render:i,staticRenderFns:a};e.a=s},function(t,e,n){"use strict";function i(t){n(87)}var a=n(31),s=n(121),o=n(0),r=i,l=o(a.a,s.a,!1,r,null,null);e.a=l.exports},function(t,e){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var i=n(46),a=n(120),s=n(0),o=s(i.a,a.a,!1,null,null,null);e.a=o.exports},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"width-limit-600 text-xs-left",attrs:{"pt-2":""}},[n("v-layout",{attrs:{column:""}},[n("v-flex",[n("h3",{staticClass:"subhead"},[t._v(t._s(t.title))])]),t._v(" "),n("v-flex",{attrs:{"text-align-left":""}},t._l(t.content,function(e){return n("li",{key:e},[t._v("\n        "+t._s(e)+"\n      ")])}))],1)],1)},a=[],s={render:i,staticRenderFns:a};e.a=s},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"skills-page",attrs:{flat:"","text-xs-center":""}},[n("v-container",{staticClass:"width-limit-1000"},[n("v-layout",{attrs:{row:""}},[n("v-flex",t._l(t.skills,function(e,i){return n("v-chip",{key:i,attrs:{outline:"",disabled:"",selected:e.pressed},nativeOn:{click:function(e){t.selectSkills(i)}}},[t._v(t._s(e.title))])}))],1)],1),t._v(" "),n("v-container",{staticClass:"width-limit-1000"},[n("v-layout",{attrs:{row:""}},[n("v-flex",[n("transition-group",{attrs:{name:"fade-chip"}},t._l(t.skillsSelected,function(e){return n("v-chip",{key:e.title,attrs:{close:"",disabled:""},on:{input:function(n){t.selectSkills(t.skills.indexOf(e))}}},[t._v(t._s(e.title))])}))],1)],1)],1),t._v(" "),n("transition-group",{attrs:{name:"reorder"}},t._l(t.skillsExplained,function(t){return n("skills-text",{key:t.title,attrs:{title:t.title,content:t.content}})}))],1)},a=[],s={render:i,staticRenderFns:a};e.a=s},function(t,e,n){"use strict";function i(t){n(123)}var a=n(47),s=n(130),o=n(0),r=i,l=o(a.a,s.a,!1,r,null,null);e.a=l.exports},function(t,e){},function(t,e,n){"use strict";function i(t){n(125)}var a=n(48),s=n(126),o=n(0),r=i,l=o(a.a,s.a,!1,r,null,null);e.a=l.exports},function(t,e){},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"width-limit-800 text-xs-left",attrs:{"pa-0":"","pt-2":"","pb-2":""}},[n("v-layout",{attrs:{column:""}},[n("v-flex",[n("v-layout",{attrs:{row:""}},[n("h3",{staticClass:"subhead"},[t._v(t._s(t.header))])])],1),t._v(" "),n("v-flex",{attrs:{"text-align-left":""}},[n("ul",[t._v(t._s(t.content.description))])]),t._v(" "),n("v-flex",{attrs:{row:""}},t._l(t.content.techUsed,function(e,i){return n("v-chip",{key:e.title,attrs:{slot:"activator",disabled:"",selected:e.show},nativeOn:{click:function(n){t.show(e.content,i)}},slot:"activator"},[t._v(t._s(e.title))])})),t._v(" "),n("v-flex",{attrs:{"pt-2":""}},[n("transition",{attrs:{name:"fade"}},[t.showItem?n("ul",{staticClass:"italic"},[t._v(t._s(t.showItemContent))]):t._e()])],1)],1)],1)},a=[],s={render:i,staticRenderFns:a};e.a=s},function(t,e,n){"use strict";function i(t){n(128)}var a=n(49),s=n(129),o=n(0),r=i,l=o(a.a,s.a,!1,r,null,null);e.a=l.exports},function(t,e){},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"width-limit-800 text-xs-left",attrs:{"pa-0":"","pt-2":"","pb-2":""}},[i("v-layout",{attrs:{column:""}},[i("v-flex",[i("v-layout",{attrs:{row:""}},[i("h3",{staticClass:"subhead"},[t._v(t._s(t.content.title))])])],1),t._v(" "),i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{"text-align-left":"","pr-1":""}},[i("ul",{staticClass:"italic"},[t._v(t._s(t.content.institution))]),t._v(" "),i("ul",[t._v(t._s(t.content.description))])]),t._v(" "),i("v-tooltip",{attrs:{top:""}},[i("v-btn",{attrs:{slot:"activator",icon:"",flat:"",href:this.content.link,target:"_blank"},slot:"activator"},[i("img",{attrs:{src:n(28),size:"16px"}})]),t._v(" "),i("span",[t._v("View project repo")])],1)],1),t._v(" "),i("v-flex",{attrs:{row:""}},t._l(t.content.techUsed,function(e,n){return i("v-chip",{key:e.title,attrs:{slot:"activator",disabled:"",selected:e.show},nativeOn:{click:function(i){t.show(e.content,n)}},slot:"activator"},[t._v(t._s(e.title))])})),t._v(" "),i("v-flex",{attrs:{"pt-2":""}},[i("transition",{attrs:{name:"fade"}},[t.showItem?i("ul",{staticClass:"italic"},[t._v(t._s(t.showItemContent))]):t._e()])],1)],1)],1)},a=[],s={render:i,staticRenderFns:a};e.a=s},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"experience-page width-limit-800",attrs:{flat:"","text-xs-left":""}},[n("h3",{staticClass:"head"},[t._v("Work Experience")]),t._v(" "),t._l(t.experiences,function(t){return n("experience-text",{key:t.company,attrs:{content:t}})}),t._v(" "),n("v-container",{staticClass:"divider-container",attrs:{"pa-0":"","pt-3":"","pb-3":""}},[n("v-divider")],1),t._v(" "),n("h3",{staticClass:"head"},[t._v("Projects")]),t._v(" "),t._l(t.projects,function(t){return n("project-text",{key:t.company,attrs:{content:t}})})],2)},a=[],s={render:i,staticRenderFns:a};e.a=s},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"page",attrs:{flat:"",grid:""}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},["about"===t.pressed?n("about-page"):t._e(),t._v(" "),"education"===t.pressed?n("education-page"):t._e(),t._v(" "),"skills"===t.pressed?n("skills-page"):t._e(),t._v(" "),"experience"===t.pressed?n("experience-page"):t._e()],1)],1)},a=[],s={render:i,staticRenderFns:a};e.a=s},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{ref:"app"},[t.enter?t._e():n("v-container",{staticClass:"title-container",attrs:{"fill-height":""}},[n("v-layout",{attrs:{column:""}},[n("name-bar",{key:"name-center"}),t._v(" "),n("enter-bar",{on:{enter:t.enterCV}})],1)],1),t._v(" "),n("transition",{attrs:{name:"slide-fade"}},[t.enter?n("v-container",{attrs:{"pl-0":"","pr-0":""}},[n("v-layout",{attrs:{column:""}},[n("v-toolbar",{attrs:{flat:"",fixed:"","text-xs-center":"",app:"",height:"160px"}},[n("v-toolbar-items",[n("v-layout",{attrs:{column:""}},[t.enter?n("name-bar"):t._e(),t._v(" "),n("title-bar",{key:"title",on:{changePage:t.change}})],1)],1)],1),t._v(" "),n("v-content",[n("page-view",{attrs:{pressed:t.pageButton}})],1)],1)],1):t._e()],1)],1)},a=[],s={render:i,staticRenderFns:a};e.a=s}],[50]);
//# sourceMappingURL=app.3354ae82d04304fdf355.js.map