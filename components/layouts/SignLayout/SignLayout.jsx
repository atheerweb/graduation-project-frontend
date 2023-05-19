// Next Components
import Image from "next/image";
// MUI Components
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// Hooks
import useMediaQuery from '@mui/material/useMediaQuery';
import { useRouter } from "next/router";
// CSS Modules
import styles from "@/styles/modules/signup/signup.module.css";

const SignLayout = ({ handleSubmit, activeStep, setActiveStep, children }) => {
    const router = useRouter();
    const media = useMediaQuery("(max-width: 1000px)");

    const onSubmit = (values) => {
        console.log(values);
        try {
            activeStep ? router.push("/") : setActiveStep(previous => !previous);
        }
        catch(error) {
            console.log(error);
        }
    }

    return (
        <Grid className={styles.signupContainer}>
            <form className={styles.signupForm} onSubmit={handleSubmit(onSubmit)}>
                <Image src={activeStep ? "/images/signup_two.png" : "/images/signup_one.png"} width={295.19} height={295.19} alt={"Signup"} style={{display: media ? "none" : "block"}} />
                <Box className={styles.container}>
                    <Image src={"/images/signup_logo.png"} width={84} height={56} alt={"Logo"} />
                    <Typography className={styles.subtitle}>
                        {activeStep ? "بيانات حسابك الشخصية" : "حساب واحد للتعامل مع جميع منصاتنا"}
                    </Typography>
                    {children}
                </Box>
            </form>
        </Grid>
    )
}

export default SignLayout;