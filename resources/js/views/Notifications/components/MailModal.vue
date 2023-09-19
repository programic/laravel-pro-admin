<template>
  <AppModal
    ref="modal"
    title="Email"
  >
    <div class="mt-2 border-2 border-slate-200">
      <div
        v-html="notification.mail"
      ></div>
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
