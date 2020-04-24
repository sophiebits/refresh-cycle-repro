import DashboardPage from './DashboardPage';

export const foo = {};

console.warn('DashboardPage at import time:', DashboardPage);
setTimeout(() => console.warn('DashboardPage after:', DashboardPage), 0);

export default DashboardPage;
