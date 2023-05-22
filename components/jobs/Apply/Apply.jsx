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
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
// CSS Modules
import styles from "@/styles/modules/jobs/apply.module.css";

const Apply = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const chips = useSelector(state => state.constants.value.freelancersAboutChips);

    const onSubmit = (values) => {
        console.log(values); 
    }

    return (
        <Box className={styles.apply}>
            <form className={styles.contentContainer} onSubmit={handleSubmit(onSubmit)}>
                <Box className={styles.main}>
                    <Box className={styles.descriptionContainer}>
                        <Typography variant="h3">
                            عمل تصميم لموقع
                        </Typography>
                        <Box>
                            <Typography color="primary" sx={{textDecoration: "underline"}}>
                                مواقع ويب
                            </Typography>
                            <Typography color="accent.primary">
                                منذ أربع ساعات
                            </Typography>
                        </Box>
                        <Typography color="accent.primary">
                            - السلام عليكم و رحمة الله و بركاته.. <br />
                            لدي فكرة لتطوير قالب شوبيفاي باللغة العربية و أيضا يحتوي على تنسيقات و تصاميم جاهزة بحيث يكون سهل للمستخدمين في انشاء متاجرهم الخاصة بمختلف المجالات…
                            القالب سيكون عبارة عن منتج للبيع بحيث يسهل لمستخدمين منصة الشوبيفاي المبتدئين الراغبين في عمل متجر شوبيفاي باللغة العربية و و بتصاميم احترافية…
                            على من بجد نفسه قادر على تنفيذ المشروع يتفضل بالتواصل
                            و من الله التوفيق
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
                    <Button type="submit" className={styles.buttons} sx={{color: "white"}} variant="contained" startIcon={<MailOutlineIcon sx={{color: "white"}} />}>
                        ضف عرضك
                    </Button>
                    <Button className={styles.buttons} variant="outlined" startIcon={<FavoriteBorderOutlinedIcon />}>
                        ضف للمفضلة
                    </Button>
                </Box>
            </form>
        </Box>
    )
}

export default Apply;