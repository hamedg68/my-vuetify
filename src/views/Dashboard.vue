<template>
  <div class="dashboard">
    <h1 class="subtitle-1 grey--text">داشبورد</h1>
    <v-container class="my-5">

      <v-row class="mb-3 ml-0">

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small text depressed color="grey white--text" @click="sortBy('title')" v-bind="attrs" v-on="on">
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase">بر اساس پروژه</span>
            </v-btn>
          </template>
          <span>مرتب سازی بر اساس نام پروژه</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small text depressed color="grey white--text" class="ml-1" @click="sortBy('person')" v-bind="attrs" v-on="on">
              <v-icon left small>mdi-account</v-icon>
              <span class="caption text-lowercase">بر اساس نام</span>
            </v-btn>
          </template>
          <span>مرتب سازی بر اساس نام شخص</span>
        </v-tooltip>
      </v-row>

      <v-card flat v-for="(project,index) in projects" :key="index">
        <v-row class="ma-0 pa-3" :class="`project ${project.status}`">

          <v-col cols="12" md="6">
            <div class="caption grey--text">Project title</div>
            <div>{{ project.title }}</div>
          </v-col>

          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-col>

          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-col>

          <v-col cols="6" sm="4" md="2" class="text-right">
            <v-chip small class="caption my-2 white--text" :class="`${project.status}`">{{ project.statusFa }}</v-chip>
          </v-col>
        </v-row>

        <v-divider></v-divider>

      </v-card>

    </v-container>
  </div>
</template>

<script>

export default {
  name: "Dashboard",
  components: {},
  data() {
    return {
      projects: [
        {
          title: 'طراحی وب سایت جدید',
          person: 'حامد گرجی',
          due: '۱۴۰۰/۰۵/۱۴',
          status: 'ongoing',
          statusFa: 'در حال انجام',
          statusID: 0,
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
        },
        {
          title: 'Code up the homepage',
          person: 'Chun Li',
          due: '10th Jan 2019',
          status: 'complete',
          statusFa: 'انجام شده',
          statusID: 1,
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
        },
        {
          title: 'Design video thumbnails',
          person: 'Ryu',
          due: '20th Dec 2018',
          status: 'complete',
          statusFa: 'انجام شده',
          statusID: 1,
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
        },
        {
          title: 'Create a community forum',
          person: 'Gouken',
          due: '20th Oct 2018',
          status: 'overdue',
          statusFa: 'انجام نشده',
          statusID: 2,
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
        },
      ]
    }
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
    }
  }
}
</script>

<style scoped>

.project.complete {
  border-left: 4px solid #3cd1c2;
}

.project.ongoing {
  border-left: 4px solid orange;
}

.project.overdue {
  border-left: 4px solid tomato;
}

.v-chip.complete {
  background-color: #3dd1c2 !important;
}

.v-chip.ongoing {
  background-color: #ffaa2c !important;
}

.v-chip.overdue {
  background-color: #f83e70 !important;
}

</style>