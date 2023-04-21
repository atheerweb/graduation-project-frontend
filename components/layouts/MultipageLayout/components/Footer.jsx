import { Box, Stack, Link, Typography } from "@mui/material";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";

const Footer = () => {
    const { footerLinks, footerIcons } = useSelector(state => state.constants.value);
    const theme = useTheme();

    return (
        <Box sx={{backgroundColor: "rgb(242,242,242)", display: "flex", flexDirection: "column", alignItems: "center", padding: "27px 0"}}>
            <Image src="/images/footer_logo.png" alt="علمنى" height={85} width={130} />
            <Box sx={{maxWidth: "590px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "20px", margin: "36px 0"}}>
                <Stack direction="row" spacing="23px" sx={{padding: "0 37px"}}>
                    {
                        footerLinks.map((link, index) => (
                            <Link key={index} href={link.href} className="footerLinks" sx={{textDecoration: "none", color: "rgb(38, 38, 38)"}}>{link.title}</Link>
                        ))
                    }
                </Stack>
                <Typography sx={{color: "rgb(77, 77, 77)"}}>
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