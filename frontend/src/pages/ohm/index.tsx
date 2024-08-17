import React from "react";
import PersonalInformationTable from "./PersonalInformationTable";
import PersonalInformationForm from "./PersonalInformationForm";
import { InformationForm, InformationTable } from "../../interface/Information";

const PersonalInformation: React.FC = () => {
  const [dataSoursePersonalInformation, setDataSoursePersonalInformation] =
    React.useState<InformationTable[]>([]);
  const [showForm, setShowForm] = React.useState<boolean>(true);

  const handlePersonalInformationForm = (values: InformationForm) => {
    const newData: InformationTable = {
      fullname: values.fullname,
      gender: values.gender,
      phone: values.phone,
      email: values.email,
      address: values.address,
    };
    setDataSoursePersonalInformation([
      ...dataSoursePersonalInformation,
      newData,
    ]);
    setShowForm(false);
  };
  return (
    <>
      {showForm ? (
        <PersonalInformationForm onFinish={handlePersonalInformationForm} />
      ) : (
        <PersonalInformationTable dataSource={dataSoursePersonalInformation} />
      )}
    </>
  );
};
export default PersonalInformation;
