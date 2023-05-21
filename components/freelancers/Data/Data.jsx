// Components
import About from "../About/About";
import Projects from "../Projects/Projects";
import Reviews from "../Reviews/Reviews";
// MUI Components
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
// Hooks
import { useState } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
// CSS Modules
import styles from "@/styles/modules/freelancers/data.module.css";
// 
const Data = () => {
    const [activeTab, setActiveTab] = useState(0);
    const media = useMediaQuery("(max-width: 750px)");

    const handleTabClick = (event) => {
        setActiveTab(Number(event.target.id));
    }

    const handleTabPanels = () => {
        switch (activeTab) {
            case 0: return <About />
            case 1: return <Projects />
            case 2: return <Reviews />
        }
    }

    return (
        <>
            <Box className={styles.freelancerDataTabs}>
              <Tabs value={activeTab} sx={{mx: media ? "25px" : "120px"}}>
                <Tab id={0} onClick={handleTabClick} label="عن مستقل" />
                <Tab id={1} onClick={handleTabClick} label="معرض الأعمال" />
                <Tab id={2} onClick={handleTabClick} label="التقييمات" />
              </Tabs>
            </Box>
            <Box className={styles.freelancerDataContainer}>
                {handleTabPanels()}
            </Box>
        </>
    )
}

export default Data;