import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import Dashboard from '../views/Dashboard/DashboardIndex.vue';
import FailedJobs from '../views/Jobs/FailedJobsIndex.vue';
import Notifications from '../views/Notifications/NotificationsIndex.vue';
import ExceptionPage from '../views/Jobs/exceptionPage.vue';
import Logs from '../views/Logs/LogsIndex.vue';

const routes = [
  {
    path: `/${window.ProDashboard.config.path ?? 'pro-admin'}`,
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: Dashboard,
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications,
      },
      {
        path: 'jobs',
        name: 'FailedJobs',
        component: FailedJobs,
      },
      {
        path: 'jobs/exception',
        name: 'FailedJobException',
        component: ExceptionPage,
        props: true,
      },
      {
        path: 'logs',
        name: 'Logs',
        component: Logs,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
