import { lazy } from 'react';

const Home = lazy(() => import('./index'));

const homeRoutes = [{ path: '/home', component: Home }];

export default homeRoutes;
