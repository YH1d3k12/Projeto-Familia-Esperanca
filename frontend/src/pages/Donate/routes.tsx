import { lazy } from 'react';

const Donate = lazy(() => import('./donation'));

const donationRoutes = [
    { path: '/', component: Donate },
    { path: '/donation', component: Donate },
];

export default donationRoutes;
