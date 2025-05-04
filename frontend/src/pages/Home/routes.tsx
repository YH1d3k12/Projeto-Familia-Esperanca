import { lazy } from 'react';

const Home = lazy(() => import('./home'));
const About = lazy(() => import('./about'));

const homeRoutes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
];

export default homeRoutes;
