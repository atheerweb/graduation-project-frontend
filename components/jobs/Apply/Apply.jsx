// MUI Components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import OutlinedInput from "@mui/material/OutlinedInput";
import Stack from "@mui/material/Stack";
import StyleIcon from '@mui/icons-material/Style';
import Typography from "@mui/material/Typography";
// Hooks
import { useApi } from "@/lib/hooks";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
// CSS Modules
import styles from "@/styles/modules/jobs/apply.module.css";

const Apply = () => {
    const router = useRouter();
    const job = useApi(`/freelance/viewsets/job/${router.query.id}`);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const chips = useSelector(state => state.constants.value.freelancersAboutChips);

    const onSubmit = (values) => {
        router.push("/signin")
    }

    return (
        <Box className={styles.apply}>
            <form className={styles.contentContainer} onSubmit={handleSubmit(onSubmit)}>
                <Box className={styles.main}>
                    <Box className={styles.descriptionContainer}>
                        <Typography color="accent.primary">
                            {job.descriotion}
                        </Typography>
                    </Box>
                    <Box className={styles.descriptionContainer}>
                        <Typography variant="h3">
                            كلمات مفتاحية
                        </Typography>
                        <Stack direction="row" flexWrap="wrap" gap="10px">
                            {
                                chips.map((chip, index) => (
                                    <Chip 
                                        sx={{px: 1.5}}
                                        key={index}
                                        label={chip}
                                        color="secondary"
                                        icon={<StyleIcon />}
                                    />
                                ))
                            }
                        </Stack>
                    </Box>
                    <Box className={styles.descriptionContainer}>
                        <Box className={styles.inputsContainer}>
                            <FormControl className={styles.inputControls}>
                                <OutlinedInput 
                                   variant={"outlined"}
                                   type={"text"}
                                   placeholder={"قيمة العرض"}
                                   {...register("price", { required: "القيمة مطلوبة", validate: (value) => { if (!Number(value)) return "القيمة يجب أن تكون رقما"} })}
                                />
                                <FormHelperText sx={{color: "red"}} margin={"dense"}>
                                   {errors?.price?.message?.toString()}
                                </FormHelperText>
                            </FormControl>
                            <FormLabel>$</FormLabel>
                            <FormControl className={styles.inputControls}>
                                <OutlinedInput 
                                   variant={"outlined"}
                                   type={"text"}
                                   placeholder={"مدة التسليم"}
                                   {...register("deadline", { required: "المدة مطلوبة", validate: (value) => { if (!Number(value)) return "المدة يجب أن تكون رقما"} })}
                                />
                                <FormHelperText sx={{color: "red"}} margin={"dense"}>
                                   {errors?.deadline?.message?.toString()}
                                </FormHelperText>
                            </FormControl>
                            <FormLabel>أيام</FormLabel>
                        </Box>
                        <FormControl>
                            <OutlinedInput 
                               variant={"outlined"}
                               type={"text"}
                               placeholder={"اكتب وصف لعرضك"}
                               {...register("description", { required: "الوصف مطلوب" })}
                            />
                            <FormHelperText sx={{color: "red"}} margin={"dense"}>
                               {errors?.description?.message?.toString()}
                            </FormHelperText>
                        </FormControl>
                    </Box>
                </Box>
                <Box className={styles.buttonsContainer}>
                    <Button type="submit" className={styles.buttons} sx={{color: "white", gap: "20px", width: "150px"}} variant="contained" startIcon={<MailOutlineIcon sx={{color: "white"}} />}>
                        ضف عرضك
                    </Button>
                    <Button onClick={() => router.push("/signin")} className={styles.buttons} sx={{gap: "10px", width: "150px"}} variant="outlined" startIcon={<FavoriteBorderOutlinedIcon />}>
                        ضف للمفضلة
                    </Button>
                </Box>
            </form>
        </Box>
    )
}

export default Apply;