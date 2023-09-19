<template>
  <div class="max-w-7xl flex justify-between mx-auto px-4 sm:px-6 md:px-8">
    <h1 class="text-2xl font-semibold text-gray-900">
      Logs
    </h1>
    <button
      type="button"
      class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium
      rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none
      focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      @click="fetchData"
    >
      <RefreshIcon
        class="h-4 w-4 mr-1"
        aria-hidden="true"
      />
      Refresh
    </button>
  </div>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
    <div
      v-if="loading"
      class="mt-8"
    >
      <AppLoader />
    </div>
    <div
      v-else-if="error"
      class="mt-8"
    >
      <ErrorAlert title="Error during data fetching">
        <p>{{ error }}</p>
      </ErrorAlert>
    </div>
    <div
      v-else-if="logs.length === 0"
      class="mt-16"
    >
      <div class="text-center">
        <InformationCircleIcon class="mx-auto text-gray-400 w-12 h-12" />
        <h3 class="mt-2 text-sm font-medium text-gray-900">
          No logs
        </h3>
        <p class="mt-1 text-sm text-gray-500">
          There are no logs to show
        </p>
      </div>
    </div>
    <div v-else>
      <div class="py-6">
        <div class="max-w-3xl mx-auto lg:max-w-7xl lg:grid lg:grid-cols-12 lg:gap-4">
          <LogList :logs="logs" :active-log="activeLog" @set-active-log="(log) => activeLog = log" />
          <LogPreview :active-log="activeLog" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { RefreshIcon, InformationCircleIcon } from '@heroicons/vue/outline';
  import { Log } from '../../types/log';
  import { AppLoader, ErrorAlert } from '../../components';
  import LogList from './components/LogList.vue';
  import LogPreview from './components/LogPreview.vue';

  const loading = ref(false);
  const error = ref(<string | null>null);

  const logs = ref(<Log[]>[]);
  const activeLog = ref(<Log | null>null);

  async function fetchData() {
    loading.value = true;
    error.value = null;

    try {
      const response = await fetch('/pro-admin/api/logs', {
        headers: {
          'Content-Type': 'application/json',
          Accepts: 'application/json',
        },
        method: 'GET',
      });
      const json = await response.json();
      logs.value = json.logs;
    } catch (error_) {
      let message;

      if (error_ instanceof Error) message = error_.message;
      else message = String(error_);
      error.value = message;
    } finally {
      loading.value = false;
    }
  }

  fetchData();
</script>
