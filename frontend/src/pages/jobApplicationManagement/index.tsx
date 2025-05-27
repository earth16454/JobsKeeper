import React from 'react';
import JobApplicationManagerContextProvider from './context/JobApplicationManagerContextProvider';
import JobApplicationManager from './JobApplicationManagement';

const index: React.FC = () => {
  return (
    <JobApplicationManagerContextProvider>
      <JobApplicationManager />
    </JobApplicationManagerContextProvider>
  );
};

export default index;
