<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
    <h1 class="text-2xl font-semibold text-gray-900">
      Dashboard
    </h1>
  </div>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
    <!-- Replace with your content -->
    <div class="px-4 py-6 sm:px-0">
      <button @click="getData">
        get data
      </button>
      <p>{{ message }}</p>
    </div>
    <!-- /End replace -->
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { ResponseData } from '.';

  const message = ref('test');

  async function getData() {
    const response = await fetch('http://127.0.0.1:8000/pro-admin/api/pro-admin', {
      headers: {
        'Content-Type': 'application/json',
        Accepts: 'application/json',
      },
      method: 'GET',
    });

    const json: ResponseData = await response.json();
    message.value = json.data;
  }

</script>
