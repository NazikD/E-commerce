<template>
  <GuestLayout title="Reset the password">
    <form class="space-y-6" @submit.prevent="emit('submit')" method="POST">
      <div>
        <div class="mt-2">
          <input
            id="new_password"
            name="new_password"
            placeholder="New Password"
            type="password"
            autocomplete="current-password"
            required="123"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <div class="mt-2">
          <input
            id="repeat_password"
            name="repeat_password"
            placeholder="Repeat Password"
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

      <div>
        <router-link
          class="font-semibold text-indigo-600 hover:text-indigo-500"
          :to="{ name: 'login' }"
          >Reset to login?</router-link
        >
      </div>
    </form>
  </GuestLayout>
</template>

<script setup>
import GuestLayout from "../components/GuestLayout.vue";
</script>
