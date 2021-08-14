<template>
  <v-app >
  <v-layout class="grey lighten-4" style="min-height: 100vh">


    <Navbar></Navbar>

    <v-main  class="mx-4 mb-4">
      <router-view></router-view>
    </v-main>
  </v-layout>

  </v-app>
</template>

<script>

import Navbar from "@/components/Navbar";

export default {
  name: 'App',

  components: {
    Navbar
  },

  data: () => ({
    //
  }),
};
</script>

<style>
.m-app{
  min-height: 100vh;
  background: blue;
}
</style>
