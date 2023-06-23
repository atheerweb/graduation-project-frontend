// MUI Components
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Cancel from "@mui/icons-material/Cancel";
import Chip from "@mui/material/Chip";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
// Hooks
import { useState } from "react";
// CSS Modules
import styles from "@/styles/modules/jobs/jobs.module.css";

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
                onChange={(event) => props.setFilters({ type: "title", payload: event.target.value })}
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
            <FormLabel>
                الميزانية
            </FormLabel>
            <Box className={styles.fromToContainer}>
                <OutlinedInput
                    className={styles.fromToInputs} 
                    variant={"outlined"}
                    type={"tel"}
                    placeholder={"من"}
                    onChange={(event) => props.setFilters({ type: "minPrice", payload: event.target.value.length ? event.target.value : 0 })}
                />
                <OutlinedInput
                    className={styles.fromToInputs} 
                    variant={"outlined"}
                    type={"tel"}
                    placeholder={"إلى"}
                    onChange={(event) => props.setFilters({ type: "maxPrice", payload: event.target.value.length ? event.target.value : 999999 })}
                />
            </Box>
        </Box>
    )
}

export default Filters;