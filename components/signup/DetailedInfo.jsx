// Next Components
import Link from "next/link";
// MUI Components
import Grid from "@mui/material/Grid";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// Framer
import { motion } from "framer-motion";
// Hooks
import { useTheme } from "@mui/material/styles";
import { useState, useLayoutEffect } from "react";
// CSS Modules
import styles from "@/styles/modules/signup/detailedInfo.module.css";

const DetailedInfo = (props) => {
    const theme = useTheme();
    const [ monthValue, setMonthValue ] = useState("");
    const [ genderValue, setGenderValue ] = useState("");
    const [ countryValue, setCountryValue ] = useState("");
    const [ cityValue, setCityValue ] = useState("");
    const [ mount, setMount ] = useState(false);
    const variant = {
        mount: { opacity: 1, x: 0, transition: { type: "spring", duration: 0.5 }},
        unmount: { opacity: 0, x: "10%", transition: { type: "spring", duration: 0.5 }}
    }

    useLayoutEffect(() => {
        setMount(previous => !previous);
    }, []);

    const handleAnimation = () => {
        props.setActiveStep(previous => !previous);
    }

    return (
        <Box component={motion.div} variants={variant} initial={"unmount"} animate={mount ? "unmount" : "mount"} >
            <Grid className={styles.grid}>
                <FormControl>
                    <OutlinedInput placeholder={"السنة"} type={"text"} {...props.register("year", { required: "السنة مطلوبة", minLength: { value: 4, message: "يجب 4 أرقام" }, maxLength: { value: 4, message: "يجب 4 أرقام" }, validate: (value) => { if (Number(value) > new Date().getFullYear()) return "لم تأتى بعد" } })} /> 
                    <FormHelperText sx={{color: "red"}}>
                        {props.errors?.year?.message?.toString()}
                    </FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel id={"month"}>
                        الشهر
                    </InputLabel>
                    <Select labelId={"month"} {...props.register("month", { required: "الشهر مطلوب" })} onChange={(event) => setMonthValue(event.target.value)} value={monthValue}>
                        <MenuItem value={"Jan"}>Jan</MenuItem>
                        <MenuItem value={"Feb"}>Feb</MenuItem>
                        <MenuItem value={"Mar"}>Mar</MenuItem>
                        <MenuItem value={"Apr"}>Apr</MenuItem>
                        <MenuItem value={"May"}>May</MenuItem>
                        <MenuItem value={"Jun"}>Jun</MenuItem>
                        <MenuItem value={"Jul"}>Jul</MenuItem>
                        <MenuItem value={"Aug"}>Aug</MenuItem>
                        <MenuItem value={"Sep"}>Sep</MenuItem>
                        <MenuItem value={"Oct"}>Oct</MenuItem>
                        <MenuItem value={"Nov"}>Nov</MenuItem>
                        <MenuItem value={"Dec"}>Dec</MenuItem>
                    </Select>
                    <FormHelperText sx={{color: "red"}}>
                        {props.errors?.month?.message?.toString()}
                    </FormHelperText>
                </FormControl>
                <FormControl>
                    <OutlinedInput placeholder={"اليوم"} type={"text"} {...props.register("day", { required: "اليوم مطلوب", maxLength: { value: 2, message: "أقل من 31" }, validate: (value) => { if (Number(value) > 31) return "أقل من 31" } })} />
                    <FormHelperText sx={{color: "red"}}>
                        {props.errors?.day?.message?.toString()}
                    </FormHelperText>
                </FormControl>
                <FormControl className={styles.stableGridItems}>
                    <InputLabel id={"gender"}>
                        الجنس
                    </InputLabel>
                    <Select labelId={"gender"} {...props.register("gender", { required: "الجنس مطلوب"})} onChange={(event) => setGenderValue(event.target.value)} value={genderValue}>
                        <MenuItem value={"ذكر"}>ذكر</MenuItem>
                        <MenuItem value={"أنثى"}>أنثى</MenuItem>
                    </Select>
                    <FormHelperText sx={{color: "red"}}>
                        {props.errors?.gender?.message?.toString()}
                    </FormHelperText>
                </FormControl>
                <FormControl className={styles.stableGridItems}>
                    <InputLabel id={"country"}>
                        الدولة
                    </InputLabel>
                    <Select labelId={"country"} {...props.register("country", { required: "الدولة مطلوبة" })}  onChange={(event) => setCountryValue(event.target.value)} value={countryValue} >
                        <MenuItem value={"مصر"}>مصر</MenuItem>
                        <MenuItem value={"أخرى"}>أخرى</MenuItem>
                    </Select>
                    <FormHelperText sx={{color: "red"}}>
                        {props.errors?.country?.message?.toString()}
                    </FormHelperText>
                </FormControl>
                <FormControl className={styles.stableGridItems}>
                    <InputLabel id={"city"}>
                        المحافظة
                    </InputLabel>
                    <Select labelId={"city"} {...props.register("city", { required: "المدينة مطلوبة" })}  onChange={(event) => setCityValue(event.target.value)} value={cityValue}>
                        <MenuItem value={"الاسكندرية"}>الاسكندرية</MenuItem>
                        <MenuItem value={"أخرى"}>أخرى</MenuItem>
                    </Select>
                    <FormHelperText sx={{color: "red"}}>
                        {props.errors?.city?.message?.toString()}
                    </FormHelperText>
                </FormControl>
                <FormControl className={styles.stableGridItems}>
                    <OutlinedInput placeholder={"العنوان"} type={"text"} {...props.register("address", { required: "العنوان مطلوب", minLength: { value: 10, message: "المزيد من التفصيل" } })} /> 
                    <FormHelperText sx={{color: "red"}}>
                        {props.errors?.address?.message?.toString()}
                    </FormHelperText>
                </FormControl>
            </Grid>
            <Box className={styles.footer}>
                <Button type={"submit"} sx={{backgroundColor: theme.palette.secondary.main, color: theme.palette.accent.light, fontWeight: "bold", "&:hover": {color: theme.palette.secondary.main}}}>
                    تسجيل
                </Button>
                <Link href={"#"} style={{textDecoration: "none"}}>
                    <Typography onClick={handleAnimation} sx={{color: theme.palette.secondary.main, fontWeight: "bold"}}>
                        رجوع
                    </Typography>
                </Link>
            </Box>
        </Box>
    )
}

export default DetailedInfo;