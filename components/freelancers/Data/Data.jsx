import About from "../About/About";
import Projects from "../Projects/Projects";
import Reviews from "../Reviews/Reviews";
import { Box, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import styles from "@/styles/modules/freelancers/data.module.css";

const Data = () => {
    const [activeTab, setActiveTab] = useState(2);

    const handleTabClick = (event) => {
        setActiveTab(Number(event.target.id));
    }

    const handleTabPanels = () => {
        switch (activeTab) {
            case 0: return <Reviews />
            case 1: return <Projects />
            case 2: return <About />
        }
    }

    return (
        <>
            <Box className={styles.freelancerDataTabs} sx={{ borderColor: 'divider' }}>
              <Tabs value={activeTab}>
                <Tab id={0} onClick={handleTabClick} label="التقييمات" />
                <Tab id={1} onClick={handleTabClick} label="معرض الأعمال" />
                <Tab id={2} onClick={handleTabClick} label="عن مستقل" />
              </Tabs>
            </Box>
            <Box className={styles.freelancerDataContainer}>
                {handleTabPanels()}
            </Box>
        </>
    )
}

export default Data;