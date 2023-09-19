<template>
  <div class="max-w-7xl flex justify-between mx-auto px-4 sm:px-6 md:px-8">
    <h1 class="text-2xl font-semibold text-gray-900">
      Failed jobs
    </h1>
    <button
      type="button"
      class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium
      rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none
      focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      @click="() => fetchData()"
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
      v-else-if="jobs && jobs.data.length === 0"
      class="mt-16"
    >
      <div class="text-center">
        <ThumbUpIcon class="mx-auto text-gray-400 w-12 h-12" />
        <h3 class="mt-2 text-sm font-medium text-gray-900">
          No failed jobs
        </h3>
        <p class="mt-1 text-sm text-gray-500">
          There are no failed jobs to report
        </p>
      </div>
    </div>
    <div v-else>
      <FailedJobsTable
        :jobs="jobs!"
        @open-modal="openModal"
        @paginate="fetchData"
      />
    </div>
  </div>
  <FailedJobsModal
    ref="failedJobsModal"
    :job="modalJob!"
  />
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { RefreshIcon } from '@heroicons/vue/outline';
  import { ThumbUpIcon } from '@heroicons/vue/solid';
  import { FailedJob, PaginatedJobs } from '../../types/failedJob';
  import { AppLoader, ErrorAlert } from '../../components';
  import FailedJobsTable from './components/FailedJobsTable.vue';
  import FailedJobsModal from './components/FailedJobsModal.vue';

  const loading = ref(false);
  const error = ref(<string | null>null);

  const failedJobsModal = ref(null);

  const jobs = ref(<PaginatedJobs | null>null);
  const modalJob = ref(<FailedJob | null>null);

  async function fetchData(page = 1) {
    loading.value = true;
    error.value = null;

    try {
      const response = await fetch(`/pro-admin/api/jobs?page=${page}`, {
        headers: {
          'Content-Type': 'application/json',
          Accepts: 'application/json',
        },
        method: 'GET',
      });
      const json = await response.json();
      jobs.value = json.failedJobs;
    } catch (error_) {
      let message;

      if (error_ instanceof Error) message = error_.message;
      else message = String(error_);
      error.value = message;
    } finally {
      loading.value = false;
    }
  }

  function openModal(job: FailedJob) {
    modalJob.value = job;

    (failedJobsModal.value as unknown as typeof FailedJobsTable).open();
  }

  fetchData();

</script>
