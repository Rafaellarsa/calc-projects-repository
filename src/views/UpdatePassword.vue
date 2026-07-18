<template>
    <v-main height="100vh" class="d-flex align-center justify-center">
        <v-card
            width="344"
            title="Set your password"
        >
    <v-container>
        <v-form @submit.prevent="handleUpdatePassword">
        <v-text-field
            v-model="password"
            color="primary"
            label="New password"
            variant="underlined"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
          ></v-text-field>

          <v-text-field
            v-model="confirmPassword"
            color="primary"
            label="Confirm password"
            variant="underlined"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
          ></v-text-field>

          <v-alert v-if="errorMessage" type="error" density="compact" class="mt-2">
            {{ errorMessage }}
          </v-alert>
          <v-alert v-if="successMessage" type="success" density="compact" class="mt-2">
            {{ successMessage }}
          </v-alert>
        </v-form>
    </v-container>

<v-divider></v-divider>

<v-card-actions>
  <v-spacer></v-spacer>

  <v-btn color="success" :loading="loading" @click="handleUpdatePassword">
    Set password
    <v-icon icon="mdi-chevron-right" end></v-icon>
  </v-btn>
</v-card-actions>
</v-card>

        </v-main>
</template>

<script>
  import { updatePassword } from '@/lib/auth';

  export default {
    data () {
      return {
        password: '',
        confirmPassword: '',
        showPassword: false,
        loading: false,
        errorMessage: '',
        successMessage: '',
      }
    },
    methods: {
      async handleUpdatePassword () {
        this.errorMessage = '';
        this.successMessage = '';

        if (this.password !== this.confirmPassword) {
          this.errorMessage = 'Passwords do not match.';
          return;
        }
        if (this.password.length < 8) {
          this.errorMessage = 'Password must be at least 8 characters.';
          return;
        }

        this.loading = true;
        try {
          await updatePassword(this.password);
          this.successMessage = 'Password updated. Redirecting...';
          setTimeout(() => this.$router.push({ name: 'home' }), 1500);
        } catch (err) {
          this.errorMessage = 'Something went wrong. Try the link again.';
        } finally {
          this.loading = false;
        }
      },
    },
  }
</script>