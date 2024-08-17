import React, { useEffect } from "react";
import { useJKConfigContext } from "../../context/global/JKConfigContext";
import JKPage from "../../component/global/JKPage";
import { Button } from "antd";
import "../test01/OperationsNumber.css";

const OnButtonNumber: React.FC = () => {
  const { sidebarItems } = useJKConfigContext();
  console.log("sidebarItems: ", sidebarItems);

  const [count, setCount] = React.useState(0);

  useEffect(() => {
    setCount(count);
    console.log(count); //count in useState is fired after it has already been returned.
  }, [count]);

  return (
    <JKPage withContent>
      <div className="button-container">
        <Button danger onClick={() => setCount(count - 1)}>
          Subtraction
        </Button>
        <h5>{count}</h5>
        <Button onClick={() => setCount(count + 1)}>
          Addition
        </Button>
      </div>
    </JKPage>
  );
};

export default OnButtonNumber;
