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
// Hooks
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
// CSS Modules
import styles from "@/styles/modules/signup/detailedInfo.module.css";

const DetailedInfo = (props) => {
    const theme = useTheme();
    const [ genderValue, setGenderValue ] = useState("");
    const [ countryValue, setCountryValue ] = useState("");
    const [ cityValue, setCityValue ] = useState("");

    return (
        <Box sx={{width: "100%"}}>
            <Grid className={styles.grid}>
                <FormControl>
                    <OutlinedInput placeholder="التاريخ" type={"date"} {...props.register("date", { required: "التاريخ مطلوبة"})} /> 
                    <FormHelperText sx={{color: "red"}}>
                        {props.errors?.date?.message?.toString()}
                    </FormHelperText>
                </FormControl>
                <FormControl>
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
                <FormControl>
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
                <FormControl>
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
                <FormControl>
                    <OutlinedInput placeholder={"العنوان"} type={"text"} {...props.register("address", { required: "العنوان مطلوب", minLength: { value: 10, message: "المزيد من التفصيل" } })} /> 
                    <FormHelperText sx={{color: "red"}}>
                        {props.errors?.address?.message?.toString()}
                    </FormHelperText>
                </FormControl>
            </Grid>
            <Box className={styles.footer}>
                <Typography onClick={() => props.setActiveStep(previous => !previous)} sx={{color: theme.palette.secondary.main, fontWeight: "bold", cursor: "pointer"}}>
                    رجوع
                </Typography>
                <Button type={"submit"} sx={{backgroundColor: theme.palette.secondary.main, color: theme.palette.accent.light, fontWeight: "bold", "&:hover": {color: theme.palette.secondary.main}}}>
                    تسجيل
                </Button>
            </Box>
        </Box>
    )
}

export default DetailedInfo;