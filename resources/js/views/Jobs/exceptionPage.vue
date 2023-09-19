<template>
  <div class="max-w-7xl flex justify-between mx-auto px-4 sm:px-6 md:px-8">
    <router-link
      :to="{name: 'FailedJobs'}"
      type="button"
      class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium
      rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none
      focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Back
    </router-link>
  </div>
  <div class="max-w-full mx-auto px-4 sm:px-6 md:px-8 mt-10">
    <pre class="overflow-auto bg-black text-white">{{ exception }}</pre>
  </div>
</template>

<script setup lang="ts">
  import { RouterLink } from 'vue-router';

  interface Props {
    exception: string,
  }
  defineProps<Props>();
</script>
