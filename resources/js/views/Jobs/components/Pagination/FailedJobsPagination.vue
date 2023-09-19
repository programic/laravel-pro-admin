<template>
  <div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
    <div class="flex-1 flex items-center justify-between">
      <div>
        <p class="text-sm text-gray-700">
          Showing
          {{ ' ' }}
          <span class="font-medium">{{ jobs.from }}</span>
          {{ ' ' }}
          to
          {{ ' ' }}
          <span class="font-medium">{{ jobs.to }}</span>
          {{ ' ' }}
          of
          {{ ' ' }}
          <span class="font-medium">{{ jobs.total }}</span>
          {{ ' ' }}
          results
        </p>
      </div>
      <div>
        <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
          <FailedJobsPaginationItem
            :disabled="previousPage === null"
            class="rounded-l-md"
            @click="paginate(previousPage)"
          >
            <span class="sr-only">Previous</span>
            <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
          </FailedJobsPaginationItem>
          <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
          <a href="#" aria-current="page" class="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 1 </a>
          <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 2 </a>
          <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"> 3 </a>
          <span class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"> ... </span>
          <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"> 8 </a>
          <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 9 </a>
          <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 10 </a>
          <FailedJobsPaginationItem
            :disabled="nextPage === null"
            class="rounded-r-md"
            @click="paginate(nextPage)"
          >
            <span class="sr-only">Next</span>
            <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
          </FailedJobsPaginationItem>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/solid';
  import { computed } from '@vue/reactivity';
  import { PaginatedJobs } from '../../../../types/failedJob';
  import FailedJobsPaginationItem from './FailedJobsPaginationItem.vue';

  interface Props {
    jobs: PaginatedJobs
  }
  const props = defineProps<Props>();

  const emit = defineEmits<{
    (event: 'paginate', page: number): void,
  }>();

  const previousPage = computed(() => {
    const previousPage = props.jobs.current_page - 1;
    return previousPage > 0 ? previousPage : null;
  });

  const nextPage = computed(() => {
    const nextPage = props.jobs.current_page + 1;
    return nextPage <= props.jobs.last_page ? nextPage : null;
  })

  function paginate(page: number | null) {
    if (page) {
      emit('paginate', page);
    }
  }
</script>