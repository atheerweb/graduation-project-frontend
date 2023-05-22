// MUI Components
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
// Next Components
import Link from "next/link";
// Hooks
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
// CSS Modules
import styles from "@/styles/modules/signup/fundamentalInfo.module.css";
// 
const FundamentalInfo = (props) => {
    const theme = useTheme();
    const [ showPassword, setShowPassword ] = useState([false, false]);

    const handleShowPasswordClick = (index) => {
        index === 0 ? setShowPassword([!showPassword[0], showPassword[1]]) : setShowPassword([showPassword[0], !showPassword[1]]);
    }

    return (
        <Box>
            <Grid className={styles.grid}>
                <FormControl>
                    <OutlinedInput 
                        variant={"outlined"}
                        type={"text"}
                        placeholder={"الاسم الأول"}
                        {...props.register("firstname", { required: "الاسم مطلوب" })}
                    />
                    <FormHelperText sx={{color: "red"}}>
                        {props.errors?.firstname?.message?.toString()}
                     </FormHelperText>
                </FormControl>
                <FormControl>
                    <OutlinedInput 
                       variant={"outlined"}
                       type={"text"}
                       placeholder={"الاسم الأخير"}
                       {...props.register("lastname", { required: "الاسم مطلوب" })}
                    />
                    <FormHelperText sx={{color: "red"}} margin={"dense"}>
                       {props.errors?.lastname?.message?.toString()}
                    </FormHelperText>
                </FormControl>
                <FormControl className={styles.stableGridItems} >
                    <OutlinedInput
                        variant={"outlined"}
                        type={"email"}
                        placeholder={"البريد الإلكترونى"}
                        {...props.register("email", { required: "البريد الالكترونى مطلوب" })}
                    />
                    <FormHelperText sx={{color: "red"}}>
                        {props.errors?.email?.message?.toString()}
                     </FormHelperText>
                </FormControl>
                <FormControl className={styles.stableGridItems}>
                    <OutlinedInput
                        variant={"outlined"}
                        placeholder={"كلمة المرور"}
                        type={showPassword[0] ? "text" : "password"}
                        {...props.register("password", { required: "كلمة المرور مطلوبة", minLength: { value: 12, message: "12 على الأقل" }})}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={() => handleShowPasswordClick(0)}
                                  edge="end"
                                >
                                    {
                                        showPassword[0] ? <Visibility /> : <VisibilityOff />
                                    }
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    <FormHelperText sx={{color: "red"}}>
                        {props.errors?.password?.message?.toString()}
                    </FormHelperText>
                </FormControl>
                <FormControl className={styles.stableGridItems}>
                    <OutlinedInput
                        variant={"outlined"}
                        placeholder={"تأكيد كلمة المرور"}
                        type={showPassword[1] ? "text" : "password"}
                        {...props.register("matchPassword", { required: true, validate: (value) => { if (props.watch("password") !== value) return "الكلمتان مختلفتان" } })}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={() => handleShowPasswordClick(1)}
                                  edge="end"
                                >
                                    {
                                        showPassword[1] ? <Visibility /> : <VisibilityOff />
                                    }
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    <FormHelperText sx={{color: "red"}}>
                        {props.errors?.matchPassword && "الكلمتان مختلفتان"}
                    </FormHelperText>
                </FormControl>
            </Grid>
            <Box className={styles.footer}>
                <Link href={"/signin"} style={{textDecoration: "none"}}>
                    <Typography sx={{color: theme.palette.secondary.main, fontWeight: "bold"}}>
                        سجل دخولك
                    </Typography>
                </Link>
                <Button type={"submit"} sx={{backgroundColor: theme.palette.secondary.main, color: theme.palette.accent.light, fontWeight: "bold", "&:hover": {color: theme.palette.secondary.main}}}>
                    التالى
                </Button>
            </Box>
        </Box>
    )
}

export default FundamentalInfo;