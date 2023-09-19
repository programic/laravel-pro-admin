<template>
  <div class="max-w-7xl flex justify-between mx-auto px-4 sm:px-6 md:px-8">
    <h1 class="text-2xl font-semibold text-gray-900">
      Notifications
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
      v-else-if="notifications.length === 0"
      class="mt-16"
    >
      <div class="text-center">
        <InformationCircleIcon class="mx-auto text-gray-400 w-12 h-12" />
        <h3 class="mt-2 text-sm font-medium text-gray-900">
          No notifications found
        </h3>
        <p class="mt-1 text-sm text-gray-500">
          There are currently no notifications send by the application
        </p>
      </div>
    </div>
    <div v-else>
      <NotificationsTable
        :notifications="notifications"
        @open-modal="openModal"
      />
    </div>
  </div>
  <DatabaseModal
    ref="databaseModal"
    :notification="modalNotification!"
  />
  <MailModal
    ref="mailModal"
    :notification="modalNotification!"
  />
  <SmsModal
    ref="smsModal"
    :notification="modalNotification!"
  />
  <FcmModal
    ref="fcmModal"
    :notification="modalNotification!"
  />
</template>

<script setup lang="ts">
  import { RefreshIcon, InformationCircleIcon } from '@heroicons/vue/outline';
  import { ref } from 'vue';
  import { Notification } from '../../types/notification';
  import NotificationsTable from './components/NotificationsTable.vue';
  import DatabaseModal from './components/DatabaseModal.vue';
  import MailModal from './components/MailModal.vue';
  import SmsModal from './components/SmsModal.vue';
  import { AppLoader, ErrorAlert } from '../../components';
  import FcmModal from './components/FcmModal.vue';

  const loading = ref(false);
  const error = ref(<string | null>null);

  const databaseModal = ref(null);
  const mailModal = ref(null);
  const smsModal = ref(null);
  const fcmModal = ref(null);

  const notifications = ref(<Notification[]>[]);
  const modalNotification = ref(<Notification | null>null);

  async function fetchData() {
    loading.value = true;
    error.value = null;

    try {
      const response = await fetch('/pro-admin/api/notifications', {
        headers: {
          'Content-Type': 'application/json',
          Accepts: 'application/json',
        },
        method: 'GET',
      });
      const json = await response.json();
      notifications.value = json.notifications;
    } catch (error_) {
      let message;

      if (error_ instanceof Error) message = error_.message;
      else message = String(error_);
      error.value = message;
    } finally {
      loading.value = false;
    }
  }

  function openModal(type: string, notification: Notification) {
    modalNotification.value = notification;

    switch (type) {
      case 'mail': {
        (mailModal.value as unknown as typeof MailModal).open();

        break;
      }
      case 'database': {
        (databaseModal.value as unknown as typeof DatabaseModal).open();

        break;
      }
      case 'sms': {
        (smsModal.value as unknown as typeof SmsModal).open();

        break;
      }
      case 'fcm': {
        (fcmModal.value as unknown as typeof FcmModal).open();

        break;
      }
      default: {
        throw TypeError;
      }
    }
  }

  fetchData();

</script>
