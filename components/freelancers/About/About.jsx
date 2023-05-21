// MUI Components
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import StyleIcon from '@mui/icons-material/Style';
// Hooks
import { useSelector } from "react-redux";
// CSS Modules
import styles from "@/styles/modules/freelancers/about.module.css";

const About = () => {
    const chips = useSelector(state => state.constants.value.freelancersAboutChips);
    return (
        <Box className={styles.about}>
            <Box className={styles.containers}>
                <Typography variant="h3" sx={{mr: 2}}>
                    نبذة عني
                </Typography>
                <List>
                    <ListItem sx={{textAlign: "right"}}>
                        - السلام عليكم .. مرحبا بك .. مهندس برمجيات
                    </ListItem>
                    <ListItem sx={{textAlign: "right"}}>
                        - فكرتك ستصبح على أرض الواقع .. فقط كل ما عليك هو التواصل لكي تصل الى ما تريد.
                    </ListItem>
                    <ListItem sx={{textAlign: "right"}}>
                        - سطح مكتب , مواقع, برامج, تطبيقات, قواعد بيانات, هندسة برمجيات
                    </ListItem>
                    <ListItem sx={{textAlign: "right"}}>
                        - برمجة , use cases, UML, هندسة برمجيات, ويب, تطبيق, برامج, تصميمات, جافا, php, سي شارب, ورد بريس, اندرويد
                        يمكنني تقديم اليك الخدمات بشكل مناسب جدا ومميز وبكل امانة
                    </ListItem>
                    <ListItem sx={{textAlign: "right"}}>
                        - ان لم تجد من ينفذ فكرتك بشكل مميز واحترافي و بأمانة فيمكنك التواصل و البدء في التنفيذ بعد الاتفاق على جميع التفاصيل
                        ان كنت تريد فكرة او برنامج تستحدم احدى هذه النقاط فلا تتردد فالتواص
                    </ListItem>
                </List>
            </Box>
            <Box className={styles.containers}>
                <Typography variant="h3" sx={{mr: 2}}>
                    كلمات مفتاحية
                </Typography>
                <Stack direction="row" flexWrap="wrap" rowGap="10px">
                    {
                        chips.map((chip, index) => (
                            <Chip 
                                sx={{mr: 2, px: 1.5}}
                                key={index}
                                label={chip}
                                color="secondary"
                                icon={<StyleIcon />}
                            />
                        ))
                    }
                </Stack>
            </Box>
        </Box>
    )
}

export default About;