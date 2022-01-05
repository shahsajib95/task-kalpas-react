import React, { useState } from "react";
import CardData from "../../components/CardData/CardData";
import SideBar from "../../components/SideBar";

const Home = () => {
  // Sidebr Extend
  const [extendBar, setExtendBar] = useState<boolean>(false);
    // Toggle Card
  const [toggle, setToggle] = useState<string>("list");
  return (
    <>
      <div>
        {/* Sider */}
        <SideBar
          extendBar={extendBar}
          setExtendBar={setExtendBar}
          setToggle={setToggle}
          toggle={toggle}
        />
        {/* Main Com       */}
        <CardData setExtendBar={setExtendBar} toggle={toggle} />
      </div>
    </>
  );
};

export default Home;
