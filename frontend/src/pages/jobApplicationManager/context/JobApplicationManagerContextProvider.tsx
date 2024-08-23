import React from 'react';
import { JAMFormValues } from '../constant/JAMInterface';
import JobApplicationManagementContext from './JobApplicationManagerContext';

interface JobApplicationManagerContextProviderProps {
  children?: React.ReactNode;
}

const JobApplicationManagerContextProvider: React.FC<JobApplicationManagerContextProviderProps> = ({ children }) => {
  const [formValues, setFormValues] = React.useState<JAMFormValues>();

  return <JobApplicationManagementContext.Provider value={{ formValues, setFormValues }}>{children}</JobApplicationManagementContext.Provider>;
};

export default JobApplicationManagerContextProvider;
