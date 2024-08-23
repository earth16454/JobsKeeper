import { createContext, useContext } from 'react';
import { JAMFormValues } from '../constant/JAMInterface';

interface JobApplicationManagementContextState {
  formValues?: JAMFormValues;
  setFormValues: React.Dispatch<React.SetStateAction<JAMFormValues | undefined>>;
}

const JobApplicationManagementContext = createContext<JobApplicationManagementContextState | null>(null);

export const useJobApplicationManagementContext = () => {
  const JobApplicationManagementConsumer = useContext(JobApplicationManagementContext);

  if (!JobApplicationManagementConsumer) {
    throw new Error('useJobApplicationManagementContext must be used within a JobApplicationManagementProvider');
  }
  return JobApplicationManagementConsumer;
};

export default JobApplicationManagementContext;
