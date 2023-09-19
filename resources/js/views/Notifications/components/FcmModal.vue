<template>
  <AppModal
    ref="modal"
    title="Fcm"
  >
    <div>
      <div class="hidden sm:block">
        <div class="border-b border-gray-200">
          <nav
            class="-mb-px flex"
            aria-label="Tabs"
          >
            <a
              :class="[tab == 'ios' ? 'border-indigo-500 text-indigo-600' :
                         'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                       'w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm cursor-pointer']"
              @click="changeTab('ios')"
            >
              IOS
            </a>
            <a
              :class="[tab == 'table' ? 'border-indigo-500 text-indigo-600' :
                         'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                       'w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm cursor-pointer']"
              @click="changeTab('table')"
            >
              Table
            </a>
          </nav>
        </div>
      </div>
    </div>
    <div v-if="tab == 'ios'">
      <div class="modal-preview">
        <div class="modal-preview-dialog">
          <div class="dialog-box p-bottom-10">
            <div class="background-blur"></div>
            <div class="header">
              <div class="contents">
                <div class="left">
                  <span class="app-name">{{ appName }}</span>
                </div>
                <div class="right">
                  Nu
                </div>
              </div>
            </div>
            <div
              class="contents main-content pull-left"
              style="padding-left:0px; padding-right: 0px; padding-bottom: 0px;"
            >
              <div
                class="text-left"
                style="padding: 0px 5px;"
              >
                <strong style="white-space: pre-line; letter-spacing: .1px;">
                  {{ notification.fcm?.notification.title }}
                </strong>
              </div>

              <div
                class="truncate-overflow text-left"
                style="padding:0px 5px; white-space: pre-line; letter-spacing: .1px; overflow:hidden;"
                v-html="notification.fcm?.notification.body"
              >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="tab == 'table'">
      <div class="mt-2">
        <div class="mt-8 flex flex-col">
          <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table class="min-w-full divide-y divide-gray-300">
                  <thead class="bg-gray-50">
                    <tr class="divide-x divide-gray-200">
                      <th
                        scope="col"
                        colspan="2"
                        class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        {{ notification.name }}
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 bg-white">
                    <tr class="divide-x divide-gray-200">
                      <td
                        class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6"
                      >
                        Title
                      </td>
                      <td class="whitespace-nowrap p-4 text-sm text-gray-500">
                        {{ notification.fcm?.notification.title }}
                      </td>
                    </tr>
                    <tr class="divide-x divide-gray-200">
                      <td
                        class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6"
                      >
                        Content
                      </td>
                      <td class="whitespace-nowrap p-4 text-sm text-gray-500">
                        {{ notification.fcm?.notification.body }}
                      </td>
                    </tr>
                    <tr class="divide-x divide-gray-200">
                      <td
                        class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6"
                      >
                        Image
                      </td>
                      <td class="whitespace-nowrap p-4 text-sm text-gray-500">
                        {{ notification.fcm?.notification.image }}
                      </td>
                    </tr>
                    <tr class="divide-x divide-gray-200">
                      <td
                        class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6"
                      >
                        Url
                      </td>
                      <td class="whitespace-nowrap p-4 text-sm text-gray-500">
                        {{ notification.fcm?.data.url }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AppModal>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { AppModal } from '../../../components';
  import { Notification } from '../../../types/notification';

  interface Props {
    notification: Notification,
  }
  defineProps<Props>();

  const modal = ref(null);
  const tab = ref('table');

  const appName = window.ProDashboard.config.appName ?? 'App Name';

  function changeTab(type: string) {
    tab.value = type;
  }

  function open() {
    (modal.value as unknown as typeof AppModal).open();
  }

  defineExpose({
    open,
  });

</script>

<style>
.modal-preview {
    background-size: contain;
    background-position: top center;
    background-repeat: no-repeat;
    width: 400px;
    height: 700px;
    /* position: absolute; */
    position: relative;
}

.modal-preview-dialog {
    padding: 240px 85px 0px 85px;
}

.dialog-box {
    position: relative;
    min-height: 80px;
    max-height: 180px;
    border-radius: 10px;
    margin-bottom: 8px;
    overflow: hidden;
    -webkit-box-shadow: 0 2px 5px rgb(0 0 0 / 6%);
    box-shadow: 0 2px 5px rgb(0 0 0 / 6%);
}

.p-bottom-10 {
    padding-bottom: 10px;
}

.dialog-box .background-blur {
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
}

.dialog-box .header {
    height: 32px;
    position: relative;
    color: #efefef;
    padding-top: 5px;
}

.dialog-box .contents {
    z-index: 100;
    position: inherit;
    font-size: 0.8em;
    color: #fff;
}

.contents {
    display: block;
}

.dialog-box .left {
    float: left;
    text-align: left;
    padding: 3px 0 0 5px;
}

.dialog-box .left img {
    width: 20px;
    border-radius: 5px;
    margin-right: 5px;
    vertical-align: middle;
    border: 0;
    display: inline-block;
}

.dialog-box .left .app-name {
    text-transform: uppercase;
    font-weight: 100;
    color: #efefef;
    font-size: 10px;
}

.dialog-box .contents .right {
    color: #efefef;
    font-size: 10px;
    font-weight: 100;
    text-transform: uppercase;
}

.dialog-box .right {
    float: right;
    text-align: right;
    padding: 3px 10px 0 0;
}

.dialog-box .main-content {
    padding: 8px 20px 10px 10px;
    white-space: pre-line;
    letter-spacing: .1px;
}

.pull-left {
    float: left !important;
}

.truncate-overflow {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
</style>
