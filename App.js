import * as React from 'react';

import DashboardPage from './routes';

const HeroApp = (props) => {
  return <>Hello. {DashboardPage ? <DashboardPage /> : null}</>;
};

export default HeroApp;
