<template>
  <AppModal
    ref="modal"
    title="Sms"
  >
    <div class="bg-blue-500 smsMessage before:bg-blue-500">
      <p class="text-white">
        {{ notification.sms }}
      </p>
    </div>
  </AppModal>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { Notification } from '../../../types/notification';
  import AppModal from '../../../components/AppModal/AppModal.vue';

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

<style>
.smsMessage {
    border-radius: 20px;
    padding: 8px 15px;
    margin-top: 5px;
    margin-bottom: 5px;
    display: inline-block;
    color: white;
    background-attachment: fixed;
    position: relative;
}

.smsMessage::before {
    content: "";
    position: absolute;
    z-index: 0;
    bottom: 0;
    right: -8px;
    height: 20px;
    width: 20px;
    background-attachment: fixed;
    border-bottom-left-radius: 15px;
}

.smsMessage::after {
    content: "";
    position: absolute;
    z-index: 1;
    bottom: 0;
    right: -10px;
    width: 10px;
    height: 20px;
    background: white;
    border-bottom-left-radius: 10px;
}
</style>
