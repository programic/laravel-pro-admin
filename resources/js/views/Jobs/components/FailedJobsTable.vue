<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                  >
                    id
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    display name
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    command name
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    time
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    info
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr
                  v-for="job in jobs.data"
                  :key="job.id"
                >
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                    <p>
                      {{ job.id }}
                    </p>
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <p>
                      {{ job.payload.displayName }}
                    </p>
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <p>
                      {{ job.payload.data.commandName }}
                    </p>
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <p>
                      {{ job.failed_at }}
                    </p>
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <button
                      class="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs
                      font-medium rounded text-gray-700 bg-slate-100 hover:bg-gray-50 focus:outline-none"
                      @click="$emit('openModal', job)"
                    >
                      Info
                    </button>
                    <router-link
                      :to="{ name: 'FailedJobException', params: { exception: job.exception } }"
                      class="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs
                      font-medium rounded text-gray-700 bg-slate-100 hover:bg-gray-50 focus:outline-none"
                    >
                      Exception
                    </router-link>
                  </td>
                </tr>
              </tbody>
            </table>
            <failed-jobs-pagination :jobs="jobs" @paginate="(page) => $emit('paginate', page)" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { RouterLink } from 'vue-router';
  import FailedJobsPagination from './Pagination/FailedJobsPagination.vue';
  import { FailedJob, PaginatedJobs } from '../../../types/failedJob';

  interface Props {
    jobs: PaginatedJobs
  }
  defineProps<Props>();

  defineEmits<{
    (event: 'openModal', job: FailedJob): void,
    (event: 'paginate', page: number): void,
  }>();

</script>
