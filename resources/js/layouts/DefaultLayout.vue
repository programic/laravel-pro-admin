<template>
  <div>
    <TransitionRoot
      as="template"
      :show="sidebarOpen"
    >
      <Dialog
        as="div"
        class="fixed inset-0 flex z-40 md:hidden"
        @close="sidebarOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>
        <TransitionChild
          as="template"
          enter="transition ease-in-out duration-300 transform"
          enter-from="-translate-x-full"
          enter-to="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leave-from="translate-x-0"
          leave-to="-translate-x-full"
        >
          <div class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-800">
            <TransitionChild
              as="template"
              enter="ease-in-out duration-300"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="ease-in-out duration-300"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <div class="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  type="button"
                  class="ml-1 flex items-center justify-center h-10 w-10 rounded-full
                  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  @click="sidebarOpen = false"
                >
                  <span class="sr-only">Close sidebar</span>
                  <XIcon
                    class="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </TransitionChild>
            <div class="flex-shrink-0 flex items-center px-4">
              <img
                class="h-8 w-auto"
                alt="Programic"
              >
            </div>
            <div class="mt-5 flex-1 h-0 overflow-y-auto">
              <nav class="px-2 space-y-1">
                <router-link
                  v-for="item in navigation"
                  :key="item.name"
                  :to=" { name: item.name } "
                  :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                           'group flex items-center px-2 py-2 text-base font-medium rounded-md']"
                >
                  <component
                    :is="item.icon"
                    :class="[item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                             'mr-4 flex-shrink-0 h-6 w-6']"
                    aria-hidden="true"
                  />
                  {{ item.label }}
                </router-link>
              </nav>
            </div>
          </div>
        </TransitionChild>
        <div
          class="flex-shrink-0 w-14"
          aria-hidden="true"
        >
          <!-- Dummy element to force sidebar to shrink to fit close icon -->
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex-1 flex flex-col min-h-0 bg-gray-800">
        <div class="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900">
          <img
            class="h-8 w-auto"
            alt="Programic"
          >
        </div>
        <div class="flex-1 flex flex-col overflow-y-auto">
          <nav class="flex-1 px-2 py-4 space-y-1">
            <router-link
              v-for="item in navigation"
              :key="item.name"
              :to=" { name: item.name } "
              :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                       'group flex items-center px-2 py-2 text-sm font-medium rounded-md']"
            >
              <component
                :is="item.icon"
                :class="[item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                         'mr-3 flex-shrink-0 h-6 w-6']"
                aria-hidden="true"
              />
              {{ item.label }}
            </router-link>
          </nav>
        </div>
      </div>
    </div>
    <div class="md:pl-64 flex flex-col">
      <div class="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
        <button
          type="button"
          class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2
          focus:ring-inset focus:ring-indigo-500 md:hidden"
          @click="sidebarOpen = true"
        >
          <span class="sr-only">Open sidebar</span>
          <MenuAlt2Icon
            class="h-6 w-6"
            aria-hidden="true"
          />
        </button>
        <div class="flex-1 px-4 flex justify-between">
          <div></div>
          <div class="ml-4 flex items-center md:ml-6">
            <a
              href="/"
              class="bg-white p-1 rounded-full text-gray-600 hover:text-gray-400 focus:outline-none
               focus:ring-2 focus:ring-offset-2"
            >
              <span class="sr-only">Exit</span>
              <LogoutIcon
                class="h-7 w-7"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>

      <main class="flex-1">
        <div class="py-6">
          <router-view />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import {
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
  } from '@headlessui/vue';
  import {
    DocumentTextIcon,
    ExclamationCircleIcon,
    HomeIcon,
    LogoutIcon,
    MenuAlt2Icon,
    MailIcon,
    XIcon,
  } from '@heroicons/vue/outline';
  import { RouterLink } from 'vue-router';

  const navigation = [
    {
      label: 'Dashboard',
      name: 'Dashboard',
      icon: HomeIcon,
      current: false,
    },
    {
      label: 'Notifications',
      name: 'Notifications',
      icon: MailIcon,
      current: false,
    },
    {
      label: 'Failed jobs',
      name: 'FailedJobs',
      icon: ExclamationCircleIcon,
      current: false,
    },
    {
      label: 'Logs',
      name: 'Logs',
      icon: DocumentTextIcon,
      current: false,
    },
  ];

  const sidebarOpen = ref(false);

</script>
