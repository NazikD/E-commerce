<script setup>
import {ref} from 'vue'
import {LockClosedIcon} from '@heroicons/vue/solid'
import GuestLayout from "../components/GuestLayout.vue";
import store from "../store";
import router from "../router";

// let loading = ref(false);
let errorMsg = ref("");

const user = {
  email: '',
  password: '',
  remember: false
}

function login() {
  store.dispatch('login', user)
    .then(() => {
      router.push({name: 'app.dashboard'})
    })
    .catch(({response}) => {
        errorMsg.value = response.data.message;
    })
}
</script>

<template>
  <GuestLayout title="Sing in to your account">
    <form class="mt-8 space-y-6" method="POST" @submit.prevent="login">
    <div>
      <label
        for="email"
        class="block text-sm font-medium leading-6 text-gray-900"
        >Email address</label
      >
      <div class="mt-2">
        <input
          id="email"
          v-model="user.email"
          name="email"
          type="email"
          autocomplete="email"
          required=""
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>

    <div>
      <div class="flex items-center justify-between">
        <label
          for="password"
          class="block text-sm font-medium leading-6 text-gray-900"
          >Password</label
        >
        <div class="text-sm">
          <router-link
            class="font-semibold text-indigo-600 hover:text-indigo-500"
            :to="{ name: 'requestPassword' }"
            >Forgot password?</router-link
          >
        </div>
      </div>
      <div class="mt-2">
        <input
          id="password"
          v-model="user.password"
          name="password"
          type="password"
          autocomplete="current-password"
          required=""
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>

    <div>
      <button
        type="submit"
        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Sign in
      </button>
    </div>
    <input type="hidden" name="remember" value="true"/>
</form>
  </GuestLayout>
</template>



<style>
</style>
