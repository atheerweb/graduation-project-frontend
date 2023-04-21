import { Box, Stack, Link, Typography } from "@mui/material";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
import styles from '@/styles/modules/layouts/MultipageLayout/layout.module.css';

const Footer = () => {
    const { footerLinks, footerIcons } = useSelector(state => state.constants.value);
    const theme = useTheme();

    return (
        <Box className={styles.footer}>
            <Image src="/images/footer_logo.png" alt="علمنى" height={85} width={130} />
            <Box className={styles.footerContent}>
                <Stack className={styles.footerLinksStack} direction="row" spacing="23px">
                    {
                        footerLinks.map((link, index) => (
                            <Link key={index} href={link.href} className={styles.footerLinks}>
                                {link.title}
                            </Link>
                        ))
                    }
                </Stack>
                <Typography className={styles.footerBody}>
                    أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ
                </Typography>
            </Box>
            <Stack direction="row" spacing="25px">
                {
                    footerIcons(theme.palette.secondary.main)
                }
            </Stack>
        </Box>
    )
}

export default Footer;