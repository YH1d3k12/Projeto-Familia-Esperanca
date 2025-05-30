import { lazy } from 'react';

const Ministries = lazy(() => import('./ministry'));

const ministriesRoutes = [{ path: '/ministries', component: Ministries }];

export default ministriesRoutes;
