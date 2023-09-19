<template>
  <AppModal
    ref="modal"
    title="Info"
  >
    <div class="mt-2">
      <div class="mt-8 flex flex-col">
        <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table class="min-w-full divide-y divide-gray-300">
                <thead class="bg-gray-50">
                  <tr class="divide-x divide-gray-200">
                    <th
                      scope="col"
                      colspan="2"
                      class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      {{ job.payload.displayName }}
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">
                  <tr class="divide-x divide-gray-200">
                    <td
                      class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6"
                    >
                      id
                    </td>
                    <td class="whitespace-nowrap p-4 text-sm text-gray-500">
                      {{
                        job.id
                      }}
                    </td>
                  </tr>
                  <tr class="divide-x divide-gray-200">
                    <td
                      class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6"
                    >
                      connection
                    </td>
                    <td class="whitespace-nowrap p-4 text-sm text-gray-500">
                      {{
                        job.connection
                      }}
                    </td>
                  </tr>
                  <tr class="divide-x divide-gray-200">
                    <td
                      class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6"
                    >
                      queue
                    </td>
                    <td class="whitespace-nowrap p-4 text-sm text-gray-500">
                      {{ job.queue }}
                    </td>
                  </tr>
                  <tr class="divide-x divide-gray-200">
                    <td
                      class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6"
                    >
                      job
                    </td>
                    <td class="whitespace-nowrap p-4 text-sm text-gray-500">
                      {{ job.payload.job }}
                    </td>
                  </tr>
                  <tr class="divide-x divide-gray-200">
                    <td
                      class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6"
                    >
                      command name
                    </td>
                    <td class="whitespace-nowrap p-4 text-sm text-gray-500">
                      {{ job.payload.data.commandName }}
                    </td>
                  </tr>
                  <tr
                    v-if="job.payload.maxTries"
                    class="divide-x divide-gray-200"
                  >
                    <td
                      class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6"
                    >
                      max tries
                    </td>
                    <td class="whitespace-nowrap p-4 text-sm text-gray-500">
                      {{ job.payload.maxTries }}
                    </td>
                  </tr>
                  <tr
                    v-if="job.payload.delay"
                    class="divide-x divide-gray-200"
                  >
                    <td
                      class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6"
                    >
                      delay
                    </td>
                    <td class="whitespace-nowrap p-4 text-sm text-gray-500">
                      {{ job.payload.delay }}
                    </td>
                  </tr>
                  <tr
                    v-if="job.payload.timeout"
                    class="divide-x divide-gray-200"
                  >
                    <td
                      class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6"
                    >
                      timeout
                    </td>
                    <td class="whitespace-nowrap p-4 text-sm text-gray-500">
                      {{ job.payload.timeout }}
                    </td>
                  </tr>
                  <tr
                    v-if="job.payload.timeoutAt"
                    class="divide-x divide-gray-200"
                  >
                    <td
                      class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6"
                    >
                      timeout at
                    </td>
                    <td class="whitespace-nowrap p-4 text-sm text-gray-500">
                      {{ job.payload.timeoutAt }}
                    </td>
                  </tr>
                  <tr class="divide-x divide-gray-200">
                    <td
                      class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6"
                    >
                      failed at
                    </td>
                    <td class="whitespace-nowrap p-4 text-sm text-gray-500">
                      {{ job.failed_at }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AppModal>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { FailedJob } from '../../../types/failedJob';
  import { AppModal } from '../../../components';

  interface Props {
    job: FailedJob
  }
  defineProps<Props>();

  const modal = ref(null);

  function open() {
    (modal.value as unknown as typeof AppModal).open();
  }

  defineExpose({
    open,
  });

</script>
