// Next Components
import Image from "next/image";
import Link from "next/link";
// MUI Components
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormHelperText from "@mui/material/FormHelperText";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// Hooks
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
// CSS Modules
import styles from "@/styles/modules/signin/signin.module.css";

const Form = () => {
    const theme = useTheme();
    const router = useRouter();
    const [ showPassword, setShowPassword ] = useState(false);
    const { handleSubmit, register, formState: { errors } } = useForm();

    const handleShowPasswordClick = () => {
        setShowPassword(previous => !previous);
    }

    const onSubmit = (values) => {
        console.log(values);
        router.push("/");
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <Image src={"/images/signin_logo.png"} width={85} height={55} alt="Logo" />
            <Typography sx={{fontSize: 20}}>
                تسجيل الدخول
            </Typography>
            <FormControl className={styles.formControls}>
                <OutlinedInput
                    variant={"outlined"}
                    type={"email"}
                    placeholder={"البريد الإلكترونى"}
                    {...register("email", { required: "البريد الالكترونى مطلوب" })}
                />
                <FormHelperText sx={{color: "red"}}>
                    {errors?.email?.message?.toString()}
                 </FormHelperText>
            </FormControl>
            <FormControl className={styles.formControls}>
                <OutlinedInput
                    variant={"outlined"}
                    placeholder={"كلمة المرور"}
                    type={showPassword ? "text" : "password"}
                    {...register("password", { required: "كلمة المرور مطلوبة", minLength: { value: 12, message: "12 على الأقل" }})}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleShowPasswordClick}
                              edge="end"
                            >
                                {
                                    showPassword ? <Visibility /> : <VisibilityOff />
                                }
                            </IconButton>
                        </InputAdornment>
                    }
                />
                <FormHelperText sx={{color: "red"}}>
                    {errors?.password?.message?.toString()}
                </FormHelperText>
            </FormControl>
            <Box className={styles.footer}>
                <Link href={"/signup"} style={{textDecoration: "none"}}>
                    <Typography sx={{color: theme.palette.secondary.main, fontWeight: "bold"}}>
                        إنشاء حساب
                    </Typography>
                </Link>
                <Button type={"submit"} sx={{backgroundColor: theme.palette.secondary.main, color: theme.palette.accent.light, fontWeight: "bold", "&:hover": {color: theme.palette.secondary.main}}}>
                    التالى
                </Button>
            </Box>
        </form>
    )
}

export default Form;