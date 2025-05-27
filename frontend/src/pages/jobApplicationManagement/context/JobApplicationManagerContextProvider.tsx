import React from 'react';
import { JAMFormValues, JAMTableData } from '../constant/JAMInterface';
import JobApplicationManagementContext from './JobApplicationManagerContext';
import mockData from '../mockData.json';
import moment from 'moment';

interface JobApplicationManagerContextProviderProps {
  children?: React.ReactNode;
}

const JobApplicationManagerContextProvider: React.FC<JobApplicationManagerContextProviderProps> = ({ children }) => {
  const [formValues, setFormValues] = React.useState<JAMFormValues>();
  const [tableData, setTableData] = React.useState<JAMTableData[]>([]);

  React.useMemo(() => {
    setTableData(mockData);
  }, []);

  React.useEffect(() => {
    if (formValues) {
      const newKey = tableData.length > 0 ? Number(tableData[tableData.length - 1].key) + 1 : 1;
      const newTableData: JAMTableData[] = [
        ...tableData,
        { ...formValues, key: newKey, ApplicationDate: moment(formValues.ApplicationDate, 'DD-MM-YYYY HH:mm:ss').format('DD-MM-YYYY HH:mm:ss') },
      ];
      setTableData(newTableData);
    }
  }, [formValues]);

  return (
    <JobApplicationManagementContext.Provider value={{ formValues, setFormValues, tableData, setTableData }}>
      {children}
    </JobApplicationManagementContext.Provider>
  );
};

export default JobApplicationManagerContextProvider;
