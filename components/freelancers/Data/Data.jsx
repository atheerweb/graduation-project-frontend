import { Box, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import styles from "@/styles/modules/freelancers/data.module.css";

const Data = () => {
    const [activeTab, setActiveTab] = useState(2);

    const handleTabClick = (event) => {
        setActiveTab(Number(event.target.id));
    }

    return (
        <>
            <Box className={styles.dataTabs} sx={{ borderColor: 'divider' }}>
              <Tabs value={activeTab}>
                <Tab id={0} onClick={handleTabClick} label="التقييمات" />
                <Tab id={1} onClick={handleTabClick} label="معرض الأعمال" />
                <Tab id={2} onClick={handleTabClick} label="عن مستقل" />
              </Tabs>
            </Box>
        </>
    )
}

export default Data;