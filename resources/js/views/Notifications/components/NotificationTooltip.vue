<template>
  <div class="relative inline-block">
    <InformationCircleIcon class="h-4 w-4 inline-block tooltip-icon" />
    <div class="tooltip">
      <span>{{ tooltip }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { InformationCircleIcon } from '@heroicons/vue/solid';

  interface Props {
    tooltip: string
  }
  defineProps<Props>();

</script>

<style scoped>
.tooltip-icon:hover ~ .tooltip {
    opacity: 1;
}

.tooltip {
    color: #ffffff;
    text-align: center;
    padding: 5px;
    border-radius: 5px;
    bottom: 20px;
    left: 50%;
    margin-left: -16px;
    opacity: 0;
    transition: opacity 500ms;
    position: absolute;
    z-index: 1;
    background: #000000;
}
</style>
