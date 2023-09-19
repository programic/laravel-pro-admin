<template>
  <main class="lg:col-span-9 xl:col-span-9 border-2 border-gray-300 overflow-scroll" style="height: calc(100vh - 13em);">
    <pre v-if="activeLog" class="p-6">
      {{ activeLog.content }}
    </pre>
  </main>
</template>

<script setup lang="ts">
  import { Log } from '../../../types/log';

  interface Props {
    activeLog: Log | null,
  }
  defineProps<Props>();

</script>