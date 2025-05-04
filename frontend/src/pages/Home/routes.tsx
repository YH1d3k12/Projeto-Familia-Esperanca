import { lazy } from 'react';

const Home = lazy(() => import('./home'));

const homeRoutes = [{ path: '/', component: Home }];

export default homeRoutes;
