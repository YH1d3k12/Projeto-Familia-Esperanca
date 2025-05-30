import { lazy } from 'react';

const Ministries = lazy(() => import('./ministries'));

const ministriesRoutes = [
    { path: '/ministries', component: Ministries },
];

export default ministriesRoutes;
