<template>
  <v-container class="fill-height" fluid>
    <v-row class="align-center justify-center">
      <v-col cols="12" sm="8" md="8">
        <v-card class="elevation-12">
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row>
                <v-col cols="12" md="8">
                  <v-card-text class="mt-12">
                    <h1 class="text-center display-2 teal--text text--accent-3">ورود به سیستم</h1>
                    <div class="text-center mt-4">
                      <v-btn class="mx-2" fab color="black" outlined>
                        <v-icon>mdi-facebook</v-icon>
                      </v-btn>
                      <v-btn class="mx-2" fab color="black" outlined>
                        <v-icon>mdi-google-plus</v-icon>
                      </v-btn>
                      <v-btn class="mx-2" fab color="black" outlined>
                        <v-icon>mdi-linkedin</v-icon>
                      </v-btn>
                    </div>
                    <h4 class="text-center ml-4 mt-4">ورود ایمیل برای ثبت نام</h4>
                    <v-text-field label="ایمیل" id="email" prepend-icon="mdi-email" type="text" color="teal accent-3"></v-text-field>
                    <v-text-field label="پسوورد" id="password" prepend-icon="mdi-lock" type="password" color="teal accent-3"></v-text-field>
                    <h3 class="text-center mt-3" style="height: 58px">فراموشی رمز عبور</h3>
                  </v-card-text>
                  <div class="text-center mt-3 mb-3">
                    <v-btn rounded dark class="teal accent-3">ورود</v-btn>
                  </div>
                </v-col>
                <v-col cols="12" md="4" class="teal accent-3">
                  <v-card-text class="white--text mt-12">
                    <h1 class="text-center display-1">سلام دوستان!</h1>
                    <h5 class="text-center">اطلاعات خود را وارد کنید و با ما همراه شوید</h5>
                  </v-card-text>
                  <div class="text-center">
                    <v-btn rounded outlined dark @click="step++" class="mb-3">ثبت نام</v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item :value="2">
              <v-row class="fill-height">
                <v-col cols="12" md="4" class="teal accent-3">
                  <v-card-text class="white--text mt-12">
                    <h1 class="text-center display-1">خوش آمدید!</h1>
                    <h5 class="text-center">برای ارتباط با ما لطفا وارد شوید</h5>
                  </v-card-text>
                  <div class="text-center">
                      <v-btn rounded outlined dark @click="step--" class="mb-3">ورود</v-btn>
                  </div>
                </v-col>
                <v-col cols="12" md="8">
                  <v-card-text class="mt-12">
                    <h1 class="text-center display-2 teal--text text--accent-3">ایجاد حساب کاربری</h1>
                    <div class="text-center mt-4">
                      <v-btn class="mx-2" fab color="black" outlined>
                        <v-icon>mdi-facebook</v-icon>
                      </v-btn>
                      <v-btn class="mx-2" fab color="black" outlined>
                        <v-icon>mdi-google-plus</v-icon>
                      </v-btn>
                      <v-btn class="mx-2" fab color="black" outlined>
                        <v-icon>mdi-linkedin</v-icon>
                      </v-btn>
                    </div>
                    <h4 class="text-center mt-4">برای ثبت نام ایمل خود را وارد کنید</h4>
                    <v-form>
                      <v-text-field label="نام" id="email" prepend-icon="mdi-account" type="text" color="teal accent-3"></v-text-field>
                      <v-text-field label="ایمیل" id="email" prepend-icon="mdi-email" type="text" color="teal accent-3"></v-text-field>
                      <v-text-field label="پسورد" id="password" prepend-icon="mdi-lock" type="password" color="teal accent-3"></v-text-field>
                    </v-form>
                  </v-card-text>
                  <div class="text-center mt-3 mb-3">
                    <v-btn rounded dark class="teal accent-3">ثبت نام</v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "login",
  data: () => ({
    step: 1
  }),
}
</script>

<style scoped>

</style>