<template>
  <nav>

    <v-snackbar v-model="snackbar" :timeout="4000" bottom color="success">پروژه جدید اضافه شد!</v-snackbar>

    <v-app-bar flat app>
      <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">مدیریت</span>
        <span> پروژه</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <div class="text-center">
        <v-menu bottom offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="grey" text v-bind="attrs" v-on="on">
              <v-icon>mdi-chevron-down</v-icon>
              <span>منو</span>
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="(item, index) in links" :key="index" :to="item.route">
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <v-btn text color="pink">
        <span>خروج</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" right class="primary" app>
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img src="../assets/avatar-1.png" alt="a">
          </v-avatar>
          <p class="white--text subtitle-2 mt-1 text-center">حامد گرجی</p>
        </v-flex>
      </v-layout>

      <popup @projectAdded="snackbar = true"></popup>

      <v-list nav dense>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <v-list-item v-for="(link,index) in links" :key="index" :to="link.route">
            <v-list-item-icon>
              <v-icon class="white--text">{{ link.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from "@/components/Popup";
export default {
  name: "Navbar",
  components:{
    'popup' : Popup
  },
  data() {
    return {
      drawer: true,
      links: [
        {icon: 'mdi-view-dashboard', text: 'داشبورد', route: '/'},
        {icon: 'mdi-folder', text: 'پروژه های من', route: '/projects'},
        {icon: 'mdi-account-group', text: 'تیم', route: '/team'},
      ],
      offset : true,
      snackbar : false
    }
  }
}
</script>

<style scoped>

</style>