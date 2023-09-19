<template>
  <Component
  is="a"
  :class="{
    'bg-gray-100 border-gray-400 text-gray-700': active,
    'bg-white border-gray-300 text-gray-500 hover:bg-gray-100': !active,
    'cursor-not-allowed': disabled,
  }"
  href="#"
  class="hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
    <slot />
  </Component>
</template>

<script setup lang="ts">

interface Props {
  active?: boolean,
  disabled?: boolean,
}
defineProps<Props>();
</script>