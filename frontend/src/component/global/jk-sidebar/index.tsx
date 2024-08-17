import React from "react";
import { Layout, Menu, MenuProps } from "antd";
import { useNavigate } from "react-router-dom";
import { useJKConfigContext } from "../../../context/global/JKConfigContext";

const { Sider } = Layout;

const JKSidebar: React.FC = () => {
  const { sidebarSelectedKeys, sidebarOpenKeys, sidebarItems } =
    useJKConfigContext();
  const [selectedKeys, setSelectedKeys] =
    React.useState<MenuProps["selectedKeys"]>();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (sidebarSelectedKeys) {
      if (sidebarSelectedKeys[0] === "") {
        setSelectedKeys(["jk_job_application_management"]);
      } else {
        setSelectedKeys(sidebarSelectedKeys);
      }
    }
  }, [sidebarSelectedKeys]);

  const handleMenu: MenuProps["onClick"] = (e) => {
    if (e.key === "jk_job_application_management") {
      navigate("/");
    } else {
      navigate(`/${e.key}`);
    }
  };
  return (
    <>
      <Sider width={280}>
        <Menu
          mode="inline"
          selectedKeys={selectedKeys}
          openKeys={sidebarOpenKeys}
          style={{ height: "100%" }}
          items={sidebarItems}
          onClick={handleMenu}
        />
      </Sider>
    </>
  );
};

export default JKSidebar;
