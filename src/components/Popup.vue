<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">

      <template v-slot:activator="{ on, attrs }">
        <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">Add New Project</v-btn>
      </template>

      <v-card>
        <v-card-title><h3>Add A New Project</h3></v-card-title>

        <v-card-text>
          <v-form ref="form" class="px-3">
            <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder" :rules="inputRules"></v-text-field>
            <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil" :rules="inputRules"></v-textarea>
            <v-menu
                v-model="menu2"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto">
              <template v-slot:activator="{ on, attrs }">
                <v-text-field :value="formattedDate" label="Picker without buttons" prepend-icon="mdi-calendar"
                              readonly v-bind="attrs" v-on="on" :rules="inputRules"></v-text-field>
              </template>
              <v-date-picker v-model="dueDate" @input="menu2 = false"></v-date-picker>
            </v-menu>
            <v-btn depressed class="success mx-0 mt-3" @click="submit" :loading="loading" :disabled="loading">Add Project</v-btn>
          </v-form>
        </v-card-text>
      </v-card>

    </v-dialog>
  </div>
</template>
<script>

import momentJalali from 'moment-jalaali'

export default {
  name: "Popup",
  data() {
    return {
      dialog: false,
      title: '',
      content: '',
      dueDate: '',
      menu2: false,
      inputRules: [
        v => v.length >= 3 || 'Maximum length is 3 characters',
      ],
      loading: false,
    }
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true
      }
    },
  },
  computed: {
    formattedDate() {
      return this.dueDate ? momentJalali(this.dueDate).format('jYYYY/jMM/jDD') : ''
    },
  },
  watch: {
    loading() {
      if (this.loading)
        setTimeout(() => {
              this.dialog = false
              this.loading = false
              this.$emit('projectAdded')
              this.title = ''
              this.content = ''
              this.dueDate = ''
            }
            , 3000)
    },
    dialog() {
      if (this.$refs.form)
        this.$refs.form.resetValidation()
    }
  },
}
</script>

<style scoped>

</style>