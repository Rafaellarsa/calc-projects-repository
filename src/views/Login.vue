<template>
    <v-main height="100vh" class="d-flex align-center justify-center">
        <v-card
            width="344"
            title="Project Repository"
        >
    <v-container>
        <v-form @submit.prevent="handleLogin">
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

          <v-alert v-if="errorMessage" type="error" density="compact" class="mt-2">
            {{ errorMessage }}
          </v-alert>
        </v-form>
    </v-container>

<v-divider></v-divider>

<v-card-actions>
  <v-spacer></v-spacer>

  <v-btn color="success" :loading="loading" @click="handleLogin">
    Login
    <v-icon icon="mdi-chevron-right" end></v-icon>
  </v-btn>
</v-card-actions>
</v-card>

        </v-main>
</template>

<script>
  import { signIn } from '@/lib/auth';

  export default {
    data () {
      return {
        email: '',
        password: '',
        showPassword: false,
        loading: false,
        errorMessage: '',
        rules: {
          emailMatch: () => (`The email and password you entered don't match`),
        },
      }
    },
    methods: {
      async handleLogin () {
        this.errorMessage = '';
        this.loading = true;
        try {
          await signIn(this.email, this.password);
          this.$router.push({ name: 'home' });
        } catch (err) {
          this.errorMessage = this.rules.emailMatch();
        } finally {
          this.loading = false;
        }
      },
    },
  }
</script>