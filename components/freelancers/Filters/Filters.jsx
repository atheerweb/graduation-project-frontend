// MUI Components
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import Cancel from "@mui/icons-material/Cancel";
import Chip from "@mui/material/Chip";
import InputLabel from "@mui/material/InputLabel";
import Rating from "@mui/material/Rating";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
// Hooks
import { useState } from "react";
// CSS Modules
import styles from "@/styles/modules/freelancers/freelancers.module.css";

const Filters = (props) => {
    const [ categoryValue, setCategoryValue ] = useState([]);

    const handleDelete = value => {
      const newValue = categoryValue.filter(category => category !== value);
      setCategoryValue(newValue);
    };
    
    return (
        <Box className={styles.filtersContainer}>
            <OutlinedInput 
                variant={"outlined"}
                type={"text"}
                placeholder={"بحث"}
                onChange={(event) => props.setFilters({title: event.target.value})}
            />
            <FormControl>
                <InputLabel id={"التصنيف"}>
                    التصنيف
                </InputLabel>
            <Select
                labelId={"التصنيف"}
                id="demo-multiple-chip"
                value={categoryValue}
                onChange={(event) => setCategoryValue(event.target.value)}
                multiple
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                            <Chip 
                                sx={{px: 1.5}}
                                key={value}
                                label={value}
                                color="secondary"
                                deleteIcon={
                                    <Cancel
                                      onMouseDown={(event) => event.stopPropagation()}
                                    />
                                }     
                                onDelete={() => handleDelete(value)}
                            />
                        ))}
                    </Box>
                )}
            >
                <MenuItem value={"التصنيف الأول"}>التصنيف الأول</MenuItem>
                <MenuItem value={"التصنيف الثانى"}>التصنيف الثانى</MenuItem>
                <MenuItem value={"التصنيف الثالث"}>التصنيف الثالث</MenuItem>
            </Select>
        </FormControl>
            <OutlinedInput 
                variant={"outlined"}
                type={"text"}
                placeholder={"كلمات مفتاحية"}
            />
            <Box sx={{mt: "15px"}}>
                <Typography component="legend">التقييم</Typography>
                <Rating name="read-only" value={2} readOnly />
            </Box>
        </Box>
    )
}

export default Filters;