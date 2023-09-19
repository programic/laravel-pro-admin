<template>
  <AppModal
    ref="modal"
    title="Database"
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
                      {{ notification.name }}
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">
                  <tr class="divide-x divide-gray-200">
                    <td
                      class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6"
                    >
                      Level
                    </td>
                    <td class="whitespace-nowrap p-4 text-sm text-gray-500">
                      {{
                        notification.array?.level
                      }}
                    </td>
                  </tr>
                  <tr class="divide-x divide-gray-200">
                    <td
                      class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6"
                    >
                      Subject
                    </td>
                    <td class="whitespace-nowrap p-4 text-sm text-gray-500">
                      {{
                        notification.array?.subject
                      }}
                    </td>
                  </tr>
                  <tr
                    v-if="notification.array!.introLines.length > 0"
                    class="divide-x divide-gray-200"
                  >
                    <td
                      class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6"
                    >
                      Message
                    </td>
                    <td class="whitespace-nowrap p-4 text-sm text-gray-500">
                      <p
                        v-for="line in notification.array?.introLines"
                        :key="line"
                      >
                        {{ line }}
                      </p>
                    </td>
                  </tr>
                  <tr
                    v-if="notification.array!.outroLines.length > 0"
                    class="divide-x divide-gray-200"
                  >
                    <td
                      class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6"
                    >
                      Outro message
                    </td>
                    <td class="whitespace-nowrap p-4 text-sm text-gray-500">
                      <p
                        v-for="line in notification.array?.outroLines"
                        :key="line"
                      >
                        {{ line }}
                      </p>
                    </td>
                  </tr>
                  <tr class="divide-x divide-gray-200">
                    <td
                      class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6"
                    >
                      Action text
                    </td>
                    <td class="whitespace-nowrap p-4 text-sm text-gray-500">
                      {{ notification.array?.actionText }}
                    </td>
                  </tr>
                  <tr class="divide-x divide-gray-200">
                    <td
                      class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6"
                    >
                      Action url
                    </td>
                    <td class="whitespace-nowrap p-4 text-sm text-gray-500">
                      {{ notification.array?.actionUrl }}
                    </td>
                  </tr>
                  <tr
                    v-if="'appActionUrl' in notification.array!"
                    class="divide-x divide-gray-200"
                  >
                    <td
                      class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6"
                    >
                      App action url
                    </td>
                    <td class="whitespace-nowrap p-4 text-sm text-gray-500">
                      {{ notification.array?.appActionUrl }}
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
  import { Notification } from '../../../types/notification';
  import { AppModal } from '../../../components';

  interface Props {
    notification: Notification,
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
