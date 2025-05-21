import { lazy } from 'react';

const Home = lazy(() => import('./donation'));
const Donate = lazy(() => import('./donation'));

const donationRoutes = [
    { path: '/', component: Home },
    { path: '/donation', component: Donate },
];

export default donationRoutes;
