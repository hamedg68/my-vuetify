<template>
  <div class="home">
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
        @click="loader = 'loading3'"
    >
      Upload
      <v-icon
          right
          dark
      >
        mdi-cloud-upload
      </v-icon>
    </v-btn>

  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

</style>