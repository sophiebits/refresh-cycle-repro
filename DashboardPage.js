import React from 'react';

import Milestones from './Milestones';
import SurveyOverview from './SurveyOverview';
import NudgeOverview from './NudgeOverview';

export const fragment = {};

const DashboardPage = () => {
  return (
    <>
      <Milestones />
      <SurveyOverview />
      <NudgeOverview />
    </>
  );
};

export default DashboardPage;
