// MUI Components
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
// Next Components
import Image from "next/image";
// Hooks
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
// CSS Modules
import styles from '@/styles/modules/layouts/MultipageLayout/layout.module.css';

const Footer = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { footerLinks, footerIcons } = useSelector(state => state.constants.value);
    const theme = useTheme();

    useEffect(() => {
        typeof window !== "undefined" &&
        JSON.parse(localStorage.getItem('user'))
          ? setIsLoggedIn(true)
          : setIsLoggedIn(false);
      }, [ typeof window ]);

    return (
        <Box className={styles.footer}>
            <Image src="/images/footer_logo.png" alt="علمنى" height={85} width={130} />
            <Stack direction="row" gap="25px">
                {
                    footerIcons(theme.palette.secondary.main)
                }
            </Stack>
            <Box className={styles.footerContent}>
                <Stack className={styles.footerLinksStack} direction="row" columnGap="25px">
                    {
                        footerLinks.map((link, index) => (
                            <Link 
                                key={index} 
                                href={ link.title === 'صاحب عمل' ? isLoggedIn ? link.href : '/signin' : link.href }
                                sx={{textDecoration: "none", color: theme.palette.accent.primary}}
                                className={styles.footerLinks}
                            >
                                {link.title}
                            </Link>
                        ))
                    }
                </Stack>
                <Typography className={styles.footerBody}>
                    أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ
                </Typography>
            </Box>
            
        </Box>
    )
}

export default Footer;