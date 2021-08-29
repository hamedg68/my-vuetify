<template>
  <div class="team">
    <h1 class="subtitle-1 grey--text">تیم</h1>
    <v-container class="my-5">
      <v-row no-gutters>
        <v-col cols="12" sm="6" md="4" lg="3" v-for="(person,index) in team" :key="index">

          <v-card flat class="text-center ma-2">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img v-bind:src="require(`../assets/avatar-${person.avatar}.png`)" alt="a">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subtitle-2">{{person.name}}</div>
              <div class="grey--text">{{person.role}}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="grey">
                <v-icon small left>mdi-message</v-icon>
                <span>پیام</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Team",
  data(){
    return{
      team: [
        { name: 'حامد گرجی', role: 'طراح وب سایت', avatar: '1' },
        { name: 'Ryu', role: 'Graphic designer', avatar: '2' },
        { name: 'Chun Li', role: 'Web developer', avatar: '3' },
        { name: 'Gouken', role: 'Social media maverick', avatar: '4' },
        { name: 'Yoshi', role: 'Sales guru', avatar: '5'}
      ]
    }
  }
}
</script>

<style scoped>

</style>