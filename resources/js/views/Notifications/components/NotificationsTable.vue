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
                    Name
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Channels
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Preview
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr
                  v-for="notification in notifications"
                  :key="notification.name"
                >
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                    <p>
                      <NotificationTooltip
                        v-if="notification.description"
                        :tooltip="notification.description"
                      /> {{ notification.name }}
                    </p>
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <p
                      v-for="channel in notification.channels"
                      :key="channel"
                    >
                      {{ channel }}
                    </p>
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <button
                      v-if="notification.mail"
                      class="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs
                      font-medium rounded text-gray-700 bg-slate-100 hover:bg-gray-50 focus:outline-none"
                      @click="$emit('openModal', 'mail', notification)"
                    >
                      Mail
                    </button>
                    <button
                      v-if="notification.array"
                      class="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs
                      font-medium rounded text-gray-700 bg-slate-100 hover:bg-gray-50 focus:outline-none"
                      @click="$emit('openModal', 'database', notification)"
                    >
                      database
                    </button>
                    <button
                      v-if="notification.sms"
                      class="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs
                      font-medium rounded text-gray-700 bg-slate-100 hover:bg-gray-50 focus:outline-none"
                      @click="$emit('openModal', 'sms', notification)"
                    >
                      Sms
                    </button>
                    <button
                      v-if="notification.fcm"
                      class="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs
                      font-medium rounded text-gray-700 bg-slate-100 hover:bg-gray-50 focus:outline-none"
                      @click="$emit('openModal', 'fcm', notification)"
                    >
                      Fcm
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Notification } from '../../../types/notification';
  import NotificationTooltip from './NotificationTooltip.vue';

  interface Props {
    notifications: Notification[]
  }
  defineProps<Props>();

  defineEmits<{(event: 'openModal', type: string, notification: Notification): void }>();

</script>
