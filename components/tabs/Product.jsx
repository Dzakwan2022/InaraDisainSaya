import { useState } from "react";
import "animate.css";
import Image from "next/image";


  
  const Tabs = () => {
  const [activeTab, setActiveTab] = useState('month');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    
  };
    return (
      <>
       
  
      </>
    );
  };
  
  export default Tabs;
  