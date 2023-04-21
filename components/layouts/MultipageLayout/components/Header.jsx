import { Box, Stack, Button, TextField, InputAdornment, Link } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const Header = () => {
    const navLinks = useSelector(state => state.constants.value.navLinks);
    const theme = useTheme();
    const router = useRouter();

    return (
        <Box sx={{backgroundColor: "white", width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "21px 16px", position: "sticky", top: 0, zIndex: 999}}>
            <Stack direction="row" spacing="20px">
                <Button variant="contained" sx={{color: theme.palette.accent.light}}>دخول</Button>
                <Button variant="outlined" sx={{borderColor: theme.palette.accent.secondary}}>إنشاء حساب</Button>
            </Stack>
            <TextField 
                size="small"
                placeholder="ابحث عن مستقلين"
                InputProps={{ 
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon color="primary" />
                        </InputAdornment>
                    ),
                }}
                sx={{
                        width: "409px",
                        "&::placeholder": {
                            color: theme.palette.accent.primary
                        },
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                                borderRadius: "26px",
                            },
                        },
                    }}
            />
            <Stack direction="row" spacing="65px">
                {
                    navLinks.map((link, index) => (
                        <Link
                            className="navLinks"
                            sx={{
                                textDecoration: "none",
                                color: link.href === router.pathname ? theme.palette.accent.dark : theme.palette.accent.primary,
                                cursor: "pointer",
                                fontWeight: link.href === router.pathname && "bold"
                            }}
                            key={index}
                            href={link.href}
                        >
                            {link.title}
                        </Link>        
                    ))
                }
            </Stack>
            <Image width={62} height={41} src="/images/header_logo.png" alt="علمنى" priority />
        </Box>
    )
}

export default Header;