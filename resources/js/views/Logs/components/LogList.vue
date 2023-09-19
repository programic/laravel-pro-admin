<template>
  <div class="lg:col-span-3 xl:col-span-3">
    <nav aria-label="Sidebar" class="top-6 divide-y divide-gray-300 overflow-y-scroll" style="height: calc(100vh - 13em);">
      <!-- Your content -->
      <div class="bg-white shadow overflow-hidden sm:rounded-md">
        <ul role="list" class="divide-y divide-gray-200">
          <li v-for="log in logs" :key="log.name">
            <div @click="$emit('setActiveLog', log)" :class="[(activeLog && activeLog.name === log.name) ? 'bg-gray-100' : 'hover:bg-gray-50', 'block cursor-pointer']">
              <div class="flex items-center px-4 py-4 sm:px-6">
                <div class="min-w-0 flex-1 flex items-center">
                  <div class="flex-shrink-0">
                    <DocumentTextIcon class="h-10 w-10 text-gray-400" />
                  </div>
                  <div class="min-w-0 px-4">
                    <div>
                      <p class="text-sm font-medium truncate">{{ log.name }}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <ChevronRightIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ChevronRightIcon } from '@heroicons/vue/outline';
import { DocumentTextIcon } from '@heroicons/vue/solid';
import { Log } from '../../../types/log';

interface Props {
  logs: Log[],
  activeLog: Log | null,
};
defineProps<Props>();

defineEmits<{ (event: 'setActiveLog', log: Log): void }>();

</script>