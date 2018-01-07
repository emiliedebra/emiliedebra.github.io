webpackJsonp([0],[,function(t,e,n){"use strict";var i=n(9),a=n(45),o=n(0),r=o(i.a,a.a,!1,null,null,null);e.a=r.exports},,function(t,e,n){"use strict";var i=n(32),a=n(35),o=n(38),r=n(41);e.a={name:"app",data:function(){return{screenSize:!1,textSize:"70px",enter:!1,pageButton:"about"}},computed:{},methods:{enterCV:function(){this.enter=!0},change:function(t){switch(t){case 0:this.pageButton="about";break;case 1:this.pageButton="skills";break;case 2:this.pageButton="experience";break;case 3:this.pageButton="education";break;default:this.pageButton=null}},onResize:function(){this.$mq.below(600)?this.textSize="30px":this.textSize="70px"}},components:{NameBar:i.a,TitleBar:a.a,EnterBar:o.a,PageView:r.a}}},function(t,e,n){"use strict";e.a={name:"title-bar",props:["text"],data:function(){return{name:"emilie debra wood",initials:"edw"}}}},function(t,e,n){"use strict";e.a={name:"title-bar",data:function(){return{screenSize:!1,selected:0,menuName:"About Me",menuItems:[{title:"About Me",number:0},{title:"Skills",number:1},{title:"Experience",number:2},{title:"Education",number:3}]}},watch:{selected:function(){this.menuName=this.menuItems[this.selected].title,this.$emit("changePage",this.selected)}},methods:{select:function(t){this.selected=t.number,this.menuName=" "+t.title},onSmallScreen:function(){window.innerWidth>1e3?this.screenSize=!1:this.screenSize=!0}}}},function(t,e,n){"use strict";e.a={name:"welcome",methods:{enter:function(){this.$emit("enter")}}}},function(t,e,n){"use strict";var i=n(43),a=n(52),o=n(57),r=n(62);e.a={name:"home",props:["pressed"],components:{AboutPage:i.a,EducationPage:a.a,SkillsPage:o.a,ExperiencePage:r.a}}},function(t,e,n){"use strict";var i=n(1),a=n(46),o=n(48);e.a={name:"about",data:function(){return{screenSize:!0,github:"https://github.com/emiliedebra",linkedin:"https://www.linkedin.com/in/emilie-wood/",basic:[{title:"Full Name",content:"Emilie Debra Wood"},{title:"Date of Birth",content:"13th January 1997"},{title:"Place of Birth",content:"Cambridge, United Kingdom"}],additional:[{title:"Email",content:"emilie@anotherway.co.za"},{title:"Citizenship",content:"British"},{title:"Availability",content:"19th February 2018"}],bio:{title:"Bio",content:"I am a recent UCT BSc Computer Science and Computer Engineering graduate.\n        I have a passion for problem solving with a determined and positive attitude towards\n        solving life's continuous complex problems. This gets applied well in the software development industry,\n        in which I have several years of student vacation work experience developing business applications,\n        both back end and front end. Whilst software engineering utilises my practical and technical side,\n        I am a music and dance enthusiast and am able to approach design problems from\n        an artistic and creative perspective as well.\n        My problem-solving ability is applied throughout all aspects of my life, and I am continuously seeking to gain knowledge.\n        When not gaining this knowledge in a software environment, I am an advocate for self-improvement,\n        and am continuously striving for increased physical and mental health."}}},components:{InfoText:i.a,BasicInfoBarRow:o.a,BasicInfoBarCol:a.a}}},function(t,e,n){"use strict";e.a={name:"info-text",props:["title","content"]}},function(t,e,n){"use strict";var i=n(1);e.a={name:"basic-info-bar-col",data:function(){return{basic:[{title:"Full Name",content:"Emilie Debra Wood"},{title:"Date of Birth",content:"13th January 1997"},{title:"Place of Birth",content:"Cambridge, United Kingdom"}],additional:[{title:"Email",content:"emilie@anotherway.co.za"},{title:"Citizenship",content:"British"},{title:"Availability",content:"19th February 2018"}]}},components:{InfoText:i.a}}},function(t,e,n){t.exports=n.p+"static/img/cv-image.c205736.gif"},function(t,e,n){"use strict";var i=n(1);e.a={name:"basic-info-bar-row",data:function(){return{basic:[{title:"Full Name",content:"Emilie Debra Wood"},{title:"Date of Birth",content:"13th January 1997"},{title:"Place of Birth",content:"Cambridge, United Kingdom"}],additional:[{title:"Email",content:"emilie@anotherway.co.za"},{title:"Citizenship",content:"British"},{title:"Availability",content:"19th February 2018"}]}},components:{InfoText:i.a}}},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg=="},function(t,e,n){"use strict";var i=n(54);e.a={name:"education",data:function(){return{tertiary:[{institution:"University of Cape Town",year:"July 2017 - November 2017",description:"BSc in Computer Science and Computer Engineering",additional:"Awarded Cum Laude graduation",logo:"logo"},{institution:"University of Cape Town",year:"2015 – July 2017",description:"BSc Eng in Electrical and Computer Engineering",additional:"Dean's Merit List Student for 2015, 2016 and 2017",logo:"Port_Shepstone_High_School.gif"}],secondary:[{institution:"Port Shepstone High School",year:"2010 - 2014",description:"National Senior Certificate",additional:"Awarded Dux of the School"}]}},components:{EducationText:i.a}}},function(t,e,n){"use strict";e.a={name:"education-text",props:["content"],computed:{header:function(){return this.content.institution+" | "+this.content.year},logoLink:function(){return"../assets/"+this.content.logo}}}},function(t,e,n){"use strict";var i=n(59);e.a={name:"skills",data:function(){return{skills:["Node.js","Javascript/ES6/7","Flow","Babel","Browserify","Webpack","Express","Java","Vue.js","Vuex","Vuetify","Vue Axios","Vue Router","HTML5 and CSS","Google Material Design","PWA","SPA","ArangoDB","GraphQL","NoSQL","MongoDB","MySQL","C","C++","Python","Assembly","RTOS","Polymer.js","Java Swing","Koa","Rollup","Yarn"],skillsExplained:[{title:"Vue.js and Related",content:["Front end development using Vue.js","HTTP requests handling using Vue Axios","State handling through Vuex","Page routing through Vue Router","Vuetify as a material design framework","Exposure to transitions and animations in Vue.js"]},{title:"Node.js and Related",content:["Development using Node.js and it’s package ecosystem (npm)","Exposure to packages such as Flow, Koa, Express, Rollup, Babel, Browserify and Webpack","Database handling using GraphQL, NoSQL, ArangoDB and MongoDB"]},{title:"Material Web Design",content:["Development of reusable components in Polymer","Familiar with Material Design Guidelines"]},{title:"Progressive Web Applications",content:["Developed PWA using Vue CLI (this web-app)","Created mobile-friendly, scalable web-applications"]},{title:"Computing Algorithms",content:["Studied basic Dynamic Programming implementations","Studied Decrease and Conquer, Divide and Conquer, Brute Force, Greedy Algorithms etc"]},{title:"Concurrent Programming and Threading",content:["Development of basic threaded simulations in Java","Understanding of Parallelism and Concurrency","Exposure to common software problems such as Dining Philosophers"]},{title:"Software Design Patterns",content:["Familiarity with Scrum, Agile, XP","Study of software application architectures","Exposure to design patterns (Layered, Repository, Client-Server etc)"]},{title:"Java, Java Swing",content:["Completed all Java university courses","Developed basic wordsearch game GUI using Swing"]},{title:"Python",content:["Basic number crunching and command line IO programming"]},{title:"MatLab, LaTeX and Embedded C",content:["Use of LaTeX for all University reports","Created audio synthesis using MatLab","Use of Embedded C in programming an STM32F4Discovery Evaluation Board and STM32F0"]}]}},components:{SkillsText:i.a}}},function(t,e,n){"use strict";e.a={name:"skills-text",props:["title","content"]}},function(t,e,n){"use strict";var i=n(64),a=n(66);e.a={name:"experience",data:function(){return{projects:[{title:"Research Paper Management Web Application",institution:"UCT Capstone Project (Final Year Project)",link:"https://github.com/emiliedebra/capstone-demo-front-end",description:"Developed the frontend and a partial backend of a web-application designed to allow\n          easy management of a database of research papers related to the Center of Aritificial Intelligence Research\n          in South Africa.",techUsed:[{title:"Vue.js",content:"Developement of web-application"},{title:"Vuex",content:"Used for global app state handling"},{title:"Vuetify",content:"Implementation of material design"},{title:"Vue Axios",content:"HTTP request handling"},{title:"Node.js",content:"Backend developement"},{title:"Babel",content:"ES6 to browser compilation"},{title:"Express",content:""},{title:"MySQL",content:"Database handling"}]},{title:"Physical Step Sequencer",institution:"UCT Embedded Systems (3rd Year Project)",date:"January 2017 - November 2017",link:"https://github.com/emiliedebra/embedded-project",description:"Developed a physical implementation of a step sequencer using an STM32F4Discovery Evaluation\n           Board. Audio waveforms were synthesised using MatLab and C to mimic sound fonts of drum kits and piano scales.",techUsed:[{title:"C",content:"Programming language used for ARM"},{title:"Atollic",content:"Used for compilation and linking to STM"},{title:"MatLab",content:"Audio waveform manipulation"},{title:"LaTeX",content:"Report handling"}]}],experiences:[{title:"Backend Developer",company:"AnotherwayTech",date:"December 2017 - Present",description:"Involvement in the back-end development of a CryptoCurrency trading system using Javascript/ES6/7,\n           Node.js and Flow. Currently tasked with writing exchange API’s.",techUsed:[{title:"Javascript/ES6/7",content:"Familiarity with modern syntax"},{title:"Node.js",content:"Backend Development"},{title:"Flow",content:"Syntactical type-checking"}]},{title:"Private Tutor",company:"Get Smart Tutors (Cape Town) ",date:"January 2017 - November 2017",description:"Private Tutor for a 1st Year Electrical and Computer Engineering Student at the University of Cape Town\n          (focus on Computer Science and Electrical Engineering Basics)",techUsed:[{title:"Python",content:"Basic IO manipulation"},{title:"Java",content:"Basic IO interaction, Swing"}]},{title:"Computer Science Tutor ",company:"University of Cape Town",date:"January 2016 - November 2017",description:"Tutor for the 1st year Computer Science (CSC1015F, CSC1016S)\n          Courses in basic Python and Java.",techUsed:[{title:"Python",content:"Basic IO manipulation"},{title:"Java",content:"Basic IO interaction, Swing"}]},{title:"Vac Work",company:"AdvancedApps PTY Ltd.",date:"January 2016 - January 2017",description:"Part-time involvement in the back-end development of business applications using Javascript (ES6)\n          and Node.js components which drew on technologies such as GraphQL, ArangoDB and Koa.\n          Some exposure to front-end technologies such as Google Polymer, HTML5 and CSS, as well as Google’s Material Design.",techUsed:[{title:"Javascript/ES6",content:"Development using modern syntax"},{title:"Node.js",content:""},{title:"GraphQL",content:"NoSQL framework"},{title:"ArangoDB",content:"Use of graph design"},{title:"Koa",content:""},{title:"Google Polymer",content:"Material Design familiarity"},{title:"HTM5 and CSS",content:"Use with Vue and Polymer"},{title:"Babel",content:"ES6 to broswer compatibility compilation"}]}]}},components:{ExperienceText:i.a,ProjectText:a.a}}},function(t,e,n){"use strict";e.a={name:"education-text",props:["content"],data:function(){return{divider:" | "}},computed:{header:function(){return this.content.title+" | "+this.content.company+" | "+this.content.date}}}},function(t,e,n){"use strict";e.a={name:"project-text",props:["content"]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(22),a=n(26),o=n.n(a),r=n(27),s=n.n(r),l=n(28),c=(n.n(l),n(30));i.a.config.productionTip=!1,i.a.use(o.a),i.a.use(s.a),new i.a({el:"#app",template:"<App/>",components:{App:c.a}})},,,,,,,function(t,e){},,function(t,e,n){"use strict";function i(t){n(31)}var a=n(3),o=n(70),r=n(0),s=i,l=r(a.a,o.a,!1,s,null,null);e.a=l.exports},function(t,e){},function(t,e,n){"use strict";function i(t){n(33)}var a=n(4),o=n(34),r=n(0),s=i,l=r(a.a,o.a,!1,s,null,null);e.a=l.exports},function(t,e){},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{ref:"name",staticClass:"name-bar text-xs-center"},[n("h1",{key:"small",style:{fontSize:"70px"},attrs:{id:"small"}},[t._v(t._s(t.initials))]),t._v(" "),n("h1",{key:"full",style:{fontSize:"70px"},attrs:{id:"full"}},[t._v(t._s(t.name))]),t._v(" "),n("v-divider")],1)},a=[],o={render:i,staticRenderFns:a};e.a=o},function(t,e,n){"use strict";function i(t){n(36)}var a=n(5),o=n(37),r=n(0),s=i,l=r(a.a,o.a,!1,s,null,null);e.a=l.exports},function(t,e){},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"title",attrs:{flat:"","text-xs-center":""}},[n("v-flex",{attrs:{id:"small"}},[n("v-menu",{attrs:{"offset-y":""}},[n("v-btn",{attrs:{slot:"activator",flat:"",transparent:""},slot:"activator"},[t._v("\n        "+t._s(t.menuName)+"\n        "),n("v-icon",[t._v("keyboard_arrow_down")])],1),t._v(" "),n("v-list",t._l(t.menuItems,function(e){return n("v-list-tile",{key:e.title,on:{click:function(n){t.select(e)}}},[n("v-list-tile-title",[t._v(t._s(e.title))])],1)}))],1)],1),t._v(" "),n("v-flex",{attrs:{id:"full"}},[n("v-btn-toggle",{attrs:{mandatory:""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[n("v-btn",{attrs:{flat:""}},[t._v("About Me")]),t._v(" "),n("v-btn",{attrs:{flat:""}},[t._v("Skills")]),t._v(" "),n("v-btn",{attrs:{flat:""}},[t._v("Experience")]),t._v(" "),n("v-btn",{attrs:{flat:""}},[t._v("Education")])],1)],1)],1)},a=[],o={render:i,staticRenderFns:a};e.a=o},function(t,e,n){"use strict";function i(t){n(39)}var a=n(6),o=n(40),r=n(0),s=i,l=r(a.a,o.a,!1,s,null,null);e.a=l.exports},function(t,e){},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"text-xs-center",attrs:{"pa-0":""}},[n("v-btn",{attrs:{flat:"",icon:""},nativeOn:{click:function(e){t.enter(e)}}},[n("v-icon",[t._v("keyboard_arrow_down")])],1)],1)},a=[],o={render:i,staticRenderFns:a};e.a=o},function(t,e,n){"use strict";function i(t){n(42)}var a=n(7),o=n(69),r=n(0),s=i,l=r(a.a,o.a,!1,s,null,null);e.a=l.exports},function(t,e){},function(t,e,n){"use strict";function i(t){n(44)}var a=n(8),o=n(50),r=n(0),s=i,l=r(a.a,o.a,!1,s,null,null);e.a=l.exports},function(t,e){},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"pa-0":""}},[n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{"pr-2":"",xs6:"","text-xs-right":""}},[n("h3",[t._v(t._s(t.title))])]),t._v(" "),n("v-flex",{attrs:{xs6:"","text-xs-left":""}},[n("p",{attrs:{"pa-0":"","ma-0":""}},[t._v(t._s(t.content))])])],1)],1)},a=[],o={render:i,staticRenderFns:a};e.a=o},function(t,e,n){"use strict";var i=n(10),a=n(47),o=n(0),r=o(i.a,a.a,!1,null,null,null);e.a=r.exports},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-layout",{attrs:{column:""}},[i("v-flex",[i("v-avatar",{attrs:{size:"200px"}},[i("img",{attrs:{src:n(11)}})])],1),t._v(" "),i("v-container",[i("v-layout",{attrs:{column:""}},[i("v-flex",t._l(t.basic,function(t){return i("info-text",{key:t.title,attrs:{title:t.title,content:t.content}})})),t._v(" "),i("v-flex",t._l(t.additional,function(t){return i("info-text",{key:t.title,attrs:{title:t.title,content:t.content}})}))],1)],1)],1)],1)},a=[],o={render:i,staticRenderFns:a};e.a=o},function(t,e,n){"use strict";var i=n(12),a=n(49),o=n(0),r=o(i.a,a.a,!1,null,null,null);e.a=r.exports},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-layout",{attrs:{row:""}},[i("v-flex",[i("v-avatar",{attrs:{size:"200px"}},[i("img",{attrs:{src:n(11)}})])],1),t._v(" "),i("v-container",[i("v-layout",{attrs:{row:""}},[i("v-flex",t._l(t.basic,function(t){return i("info-text",{key:t.title,attrs:{title:t.title,content:t.content}})})),t._v(" "),i("v-flex",t._l(t.additional,function(t){return i("info-text",{key:t.title,attrs:{title:t.title,content:t.content}})}))],1)],1)],1)],1)},a=[],o={render:i,staticRenderFns:a};e.a=o},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"width-limit-800",attrs:{"text-xs-center":""}},[i("basic-info-bar-row",{attrs:{id:"row"}}),t._v(" "),i("basic-info-bar-col",{attrs:{id:"col"}}),t._v(" "),i("v-container",{staticClass:"divider-container",attrs:{"pa-0":"","pt-3":"","pb-3":""}},[i("v-divider")],1),t._v(" "),i("v-card",{staticClass:"transparent",attrs:{flat:""}},[i("v-card-text",[t._v(t._s(t.bio.content))])],1),t._v(" "),i("v-tooltip",{attrs:{top:""}},[i("v-btn",{attrs:{slot:"activator",icon:"",flat:"",href:this.github,target:"_blank","pa-0":"","ma-0":""},slot:"activator"},[i("img",{attrs:{src:n(13),size:"16px"}})]),t._v(" "),i("span",[t._v("View GitHub Profile")])],1),t._v(" "),i("v-tooltip",{attrs:{top:""}},[i("v-btn",{attrs:{slot:"activator",icon:"",flat:"",href:this.linkedin,target:"_blank","pa-0":"","ma-0":""},slot:"activator"},[i("img",{attrs:{src:n(51),size:"16px"}})]),t._v(" "),i("span",[t._v("View LinkedIn Profile")])],1)],1)},a=[],o={render:i,staticRenderFns:a};e.a=o},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAiCAYAAADLTFBPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFMUFCQzU0MTFDN0QxMUUyQjkxNEY3RUNEMkY1ODRBRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFMUFCQzU0MjFDN0QxMUUyQjkxNEY3RUNEMkY1ODRBRCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkUxQUJDNTNGMUM3RDExRTJCOTE0RjdFQ0QyRjU4NEFEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkUxQUJDNTQwMUM3RDExRTJCOTE0RjdFQ0QyRjU4NEFEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+l63yRQAAAYpJREFUeNpiYGBgEADiCUD8f4DwApAb/v//z0AsZhhgB8MdToqjGaGaBhwAHcNIrFomhkECGBkZFYhWO2xCmomJaSGQ4oEaxM3KyrqYYZABlEzBwsJyCFviB4nTMjOSkhExQvrPnz97sPkMl/hAAFIy4r1B62hgMnDBphAonjZo0zQIAzMiqJZih9Y+7FD+/8GSpodkkcdCbcuByegJkLqPVGkI/v79W4fmyQNHIwWnPKg4BJblX4ByMTj0sgNxP7WSB1UcDQR1sDxAwLIYmqVpbOkLGM3/yUl/6AAYI4eAZb7tkGowAR3cSXHjipohDVRTByvngWre//37twJIX0dTA0rfPygJaaqkaaR0TVQ7huptDwqKOpfB2PYgJ/3aDnZHK9Ktl0OtjIgsT4pZQ7qPOGjSNK0Ay2BzEDDppCElmVlQ/hYg+xmQLQVk+wy6kAY5FJmGAieog52GUvIA1apGUHpoOBoY6meBlBSUHh0WGy3yCDl64SBwB8luAA2q03yIgIGKg+oAAQYANTTsUy3H+l8AAAAASUVORK5CYII="},function(t,e,n){"use strict";function i(t){n(53)}var a=n(14),o=n(56),r=n(0),s=i,l=r(a.a,o.a,!1,s,null,null);e.a=l.exports},function(t,e){},function(t,e,n){"use strict";var i=n(15),a=n(55),o=n(0),r=o(i.a,a.a,!1,null,null,null);e.a=r.exports},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"width-limit-500 text-xs-left",attrs:{"pa-0":"","pt-2":""}},[n("v-layout",{attrs:{column:""}},[n("v-flex",[n("h3",[t._v(t._s(t.header))])]),t._v(" "),n("v-flex",{attrs:{"text-align-left":""}},[n("ul",[t._v(t._s(t.content.description))]),t._v(" "),n("ul",[t._v(t._s(t.content.additional))])])],1)],1)},a=[],o={render:i,staticRenderFns:a};e.a=o},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"width-limit-500 text-xs-left",attrs:{flat:""}},[n("h3",[t._v("Tertiary Education")]),t._v(" "),t._l(t.tertiary,function(t){return n("education-text",{key:t.title,attrs:{content:t}})}),t._v(" "),n("v-container",{staticClass:"divider-container",attrs:{"pa-0":"","pt-3":"","pb-3":""}},[n("v-divider")],1),t._v(" "),n("h3",[t._v("Secondary Education")]),t._v(" "),t._l(t.secondary,function(t){return n("education-text",{key:t.title,attrs:{content:t}})})],2)},a=[],o={render:i,staticRenderFns:a};e.a=o},function(t,e,n){"use strict";function i(t){n(58)}var a=n(16),o=n(61),r=n(0),s=i,l=r(a.a,o.a,!1,s,null,null);e.a=l.exports},function(t,e){},function(t,e,n){"use strict";var i=n(17),a=n(60),o=n(0),r=o(i.a,a.a,!1,null,null,null);e.a=r.exports},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"width-limit-600 text-xs-left",attrs:{"pt-2":""}},[n("v-layout",{attrs:{column:""}},[n("v-flex",[n("h3",[t._v(t._s(t.title))])]),t._v(" "),n("v-flex",{attrs:{"text-align-left":""}},t._l(t.content,function(e){return n("li",{key:e},[t._v("\n        "+t._s(e)+"\n      ")])}))],1)],1)},a=[],o={render:i,staticRenderFns:a};e.a=o},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{flat:"","text-xs-center":""}},[n("v-container",{staticClass:"width-limit-1000"},[n("v-layout",{attrs:{row:""}},[n("v-flex",t._l(t.skills,function(e){return n("v-chip",{key:e,attrs:{outline:"",disabled:""}},[t._v(t._s(e))])}))],1)],1),t._v(" "),t._l(t.skillsExplained,function(t){return n("skills-text",{key:t.title,attrs:{title:t.title,content:t.content}})})],2)},a=[],o={render:i,staticRenderFns:a};e.a=o},function(t,e,n){"use strict";function i(t){n(63)}var a=n(18),o=n(68),r=n(0),s=i,l=r(a.a,o.a,!1,s,null,null);e.a=l.exports},function(t,e){},function(t,e,n){"use strict";var i=n(19),a=n(65),o=n(0),r=o(i.a,a.a,!1,null,null,null);e.a=r.exports},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"width-limit-800 text-xs-left",attrs:{"pa-0":"","pt-2":"","pb-2":""}},[n("v-layout",{attrs:{column:""}},[n("v-flex",[n("v-layout",{attrs:{row:""}},[n("h3",[t._v(t._s(t.header))])])],1),t._v(" "),n("v-flex",{attrs:{"text-align-left":""}},[n("ul",[t._v(t._s(t.content.description))])]),t._v(" "),n("v-flex",{attrs:{row:""}},t._l(t.content.techUsed,function(e){return n("v-tooltip",{key:e.title,attrs:{top:""}},[n("v-chip",{attrs:{slot:"activator",disabled:""},slot:"activator"},[t._v(t._s(e.title))]),t._v(" "),n("span",[t._v(t._s(e.content))])],1)}))],1)],1)},a=[],o={render:i,staticRenderFns:a};e.a=o},function(t,e,n){"use strict";var i=n(20),a=n(67),o=n(0),r=o(i.a,a.a,!1,null,null,null);e.a=r.exports},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"width-limit-800 text-xs-left",attrs:{"pa-0":"","pt-2":"","pb-2":""}},[i("v-layout",{attrs:{column:""}},[i("v-flex",[i("v-layout",{attrs:{row:""}},[i("h3",[t._v(t._s(t.content.title))])])],1),t._v(" "),i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{"text-align-left":"","pr-1":""}},[i("ul",[t._v(t._s(t.content.institution))]),t._v(" "),i("ul",[t._v(t._s(t.content.description))])]),t._v(" "),i("v-tooltip",{attrs:{top:""}},[i("v-btn",{attrs:{slot:"activator",icon:"",flat:"",href:this.content.link,target:"_blank"},slot:"activator"},[i("img",{attrs:{src:n(13),size:"16px"}})]),t._v(" "),i("span",[t._v("View project repo")])],1)],1),t._v(" "),i("v-flex",{attrs:{row:""}},t._l(t.content.techUsed,function(e){return i("v-tooltip",{key:e.title,attrs:{top:""}},[i("v-chip",{attrs:{slot:"activator",disabled:""},slot:"activator"},[t._v(t._s(e.title))]),t._v(" "),i("span",[t._v(t._s(e.content))])],1)}))],1)],1)},a=[],o={render:i,staticRenderFns:a};e.a=o},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"width-limit-800",attrs:{flat:"","text-xs-left":""}},[n("h3",[t._v("Projects")]),t._v(" "),t._l(t.projects,function(t){return n("project-text",{key:t.company,attrs:{content:t}})}),t._v(" "),n("v-container",{staticClass:"divider-container",attrs:{"pa-0":"","pt-3":"","pb-3":""}},[n("v-divider")],1),t._v(" "),n("h3",[t._v("Work Experience")]),t._v(" "),t._l(t.experiences,function(t){return n("experience-text",{key:t.company,attrs:{content:t}})})],2)},a=[],o={render:i,staticRenderFns:a};e.a=o},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"page",attrs:{flat:"",grid:""}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},["about"===t.pressed?n("about-page"):t._e(),t._v(" "),"education"===t.pressed?n("education-page"):t._e(),t._v(" "),"skills"===t.pressed?n("skills-page"):t._e(),t._v(" "),"experience"===t.pressed?n("experience-page"):t._e()],1)],1)},a=[],o={render:i,staticRenderFns:a};e.a=o},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{directives:[{name:"resize",rawName:"v-resize",value:t.onResize,expression:"onResize"}],ref:"app"},[n("v-container",{staticClass:"title-container",attrs:{"fill-height":!t.enter,"pt-0":""}},[n("v-layout",{attrs:{column:""}},[t.enter?t._e():n("name-bar",{key:"name-center",attrs:{text:t.textSize}}),t._v(" "),t.enter?t._e():n("enter-bar",{on:{enter:t.enterCV}}),t._v(" "),n("transition",{attrs:{name:"slide-fade"}},[t.enter?n("name-bar",{attrs:{text:t.textSize}}):t._e()],1),t._v(" "),n("transition",{attrs:{name:"slide-fade"}},[t.enter?n("title-bar",{key:"title",on:{changePage:t.change}}):t._e()],1)],1)],1),t._v(" "),n("transition",{attrs:{name:"slide-fade"}},[t.enter?n("v-content",[n("page-view",{attrs:{pressed:t.pageButton}})],1):t._e()],1)],1)},a=[],o={render:i,staticRenderFns:a};e.a=o}],[21]);
//# sourceMappingURL=app.f0ef4a8368ecc7addafc.js.map