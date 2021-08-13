<template>
  <div>
    <h3>this is home page</h3>
    <p class="pink white--text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias autem beatae blanditiis, deleniti eius ex id illo ipsam laboriosam laborum, laudantium maxime
      necessitatibus neque omnis repellat reprehenderit rerum, sit! Doloribus.</p>
    <p class="pink lighten-4 red--text text--darken-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci beatae cupiditate deserunt doloremque dolorum harum magnam minima,
      molestiae nihil non odio placeat possimus quaerat, quos soluta, vitae voluptatum. Repellat?</p>

    <p class="display-4">Massive display</p>
    <p class="display-1">Smaller display</p>
    <p class="headline">head line</p>
    <p class="subtitle-1 font-weight-bold">subtitle line</p>
    <p class="caption">caption line</p>

    <v-btn class="pink white--text">click me</v-btn>
    <v-btn dark color="pink">click me</v-btn>
    <v-btn depressed dark color="pink">click me</v-btn>
    <v-btn text color="pink">click me</v-btn>
    <v-btn depressed color="pink white--text">
      <v-icon left>mdi-axis-x-arrow-lock</v-icon>
      <span>lock</span>
    </v-btn>

    <v-btn depressed small color="pink white--text">
      <v-icon small left>mdi-axis-x-arrow-lock</v-icon>
      <span>lock</span>
    </v-btn>

    <v-btn depressed large color="pink white--text">
      <span>lock</span>
      <v-icon large right>mdi-email</v-icon>
    </v-btn>

    <v-btn fab depressed small dark color="pink">
      <v-icon>mdi-heart</v-icon>
    </v-btn>
    <v-btn
        class="ma-2"
        outlined
        color="indigo">
      Outlined Button
    </v-btn>


    <v-btn
        :loading="loading3"
        :disabled="loading3"
        color="blue-grey"
        class="ma-2 white--text"
        @click="loader = 'loading3'">
      Upload
      <v-icon
          right
          dark>
        mdi-cloud-upload
      </v-icon>
    </v-btn>

    <v-btn dark class="red hidden-md-and-down">hidden-md-and-down</v-btn>
    <v-btn dark class="green hidden-md-and-up">hidden-md-and-up</v-btn>
    <v-btn dark class="brown hidden-sm-only">hidden-sm-only</v-btn>

    <v-row no-gutters>
      <v-col cols="12" sm="6">
        <v-btn outlined block color="primary">1</v-btn>
      </v-col>
      <v-col cols="4" sm="2">
        <v-btn outlined block color="primary">2</v-btn>
      </v-col>
      <v-col cols="4" sm="2">
        <v-btn outlined block color="primary">2</v-btn>
      </v-col>
      <v-col cols="4" sm="2">
        <v-btn outlined block color="primary">2</v-btn>
      </v-col>
    </v-row>

    <v-row no-gutters justify="space-around">
      <v-col cols="4" md="3">
        <v-btn outlined block color="primary">1</v-btn>
      </v-col>
      <v-col cols="4" md="3">
        <v-btn outlined block color="primary">2</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
name: "test"
}
</script>

<style scoped>

</style>