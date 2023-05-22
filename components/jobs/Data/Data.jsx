// Comonents
import Apply from "../Apply/Apply";
import Offers from "../Offers/Offers";
// MUI Components
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
// Hooks
import { useState } from "react";
// CSS Modules
import styles from "@/styles/modules/jobs/data.module.css";
// 
const Data = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (event) => {
        setActiveTab(Number(event.target.id));
    }

    const handleTabPanels = () => {
        switch (activeTab) {
            case 0: return <Apply />
            case 1: return <Offers />
        }
    }

    return (
        <>
            <Box className={styles.jobsDataTabs}>
              <Tabs value={activeTab}>
                <Tab id={0} onClick={handleTabClick} label="قدم علي الوظيفة" />
                <Tab id={1} onClick={handleTabClick} label="العروض المقدمة" />
              </Tabs>
            </Box>
            <Box className={styles.jobsDataContainer}>
                {handleTabPanels()}
            </Box>
        </>
    )
}

export default Data;