<template>
    <v-main height="100vh" class="d-flex align-center justify-center">
        <v-card
            width="344"
            title="Project Repository"
        >
    <v-container>
        <v-text-field
        v-model="email"
        color="primary"
        label="Email"
        variant="underlined"
      ></v-text-field>

      <v-text-field
            v-model="password"
            color="primary"
        label="Password"
        placeholder="Enter your password"
        variant="underlined"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            name="input-10-1"
            @click:append="showPassword = !showPassword"
          ></v-text-field>
    </v-container>

<v-divider></v-divider>

<v-card-actions>
  <v-spacer></v-spacer>

  <v-btn color="success" :to="{ name: 'home' }">
    Login
    <v-icon icon="mdi-chevron-right" end></v-icon>
  </v-btn>
</v-card-actions>
</v-card>

        </v-main>
</template>

<script>
  export default {
    data () {
      return {
        showPassword: false,
        password: '',
        rules: {
          emailMatch: () => (`The email and password you entered don't match`),
        },
      }
    },
  }
</script>