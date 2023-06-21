// Next Components
import Image from "next/image";
// MUI Components
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// Hooks
import useMediaQuery from '@mui/material/useMediaQuery';
import { useRouter } from "next/router";
// APIs
import client from "@/lib/client";
// CSS Modules
import styles from "@/styles/modules/signup/signup.module.css";

const SignLayout = ({ handleSubmit, activeStep, setActiveStep, children }) => {
    const router = useRouter();
    const media = useMediaQuery("(max-width: 1000px)");

    const onSubmit = (values) => {
        console.log(values);
        activeStep ? 
        client.post("/accounts/api/register/", {
            first_name: values.firstname,
            last_name: values.lastname,
            username: values.username,
            email: values.email,
            password: values.password,
            gender: values.gender === "ذكر" ? "M" : "F",
            birth_date: values.date,
            country: values.country,
            city: values.city,
            Address: values.address,
            about: "",
            image_url: ".."
        })
        .then(() => router.push("/")) : setActiveStep(previous => !previous);
    }

    return (
        <Grid className={styles.signupContainer}>
            <form className={styles.signupForm} onSubmit={handleSubmit(onSubmit)}>
                <Box className={styles.container}>
                    <Image src={"/images/signup_logo.png"} width={84} height={56} alt={"Logo"} />
                    <Typography className={styles.subtitle}>
                        {activeStep ? "بيانات حسابك الشخصية" : "حساب واحد للتعامل مع جميع منصاتنا"}
                    </Typography>
                    {children}
                </Box>
                <Image src={activeStep ? "/images/signup_two.png" : "/images/signup_one.png"} width={295.19} height={295.19} alt={"Signup"} style={{display: media ? "none" : "block"}} />
            </form>
        </Grid>
    )
}

export default SignLayout;