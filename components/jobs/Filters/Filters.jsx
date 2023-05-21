// MUI Components
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import Cancel from "@mui/icons-material/Cancel";
import Checkbox from "@mui/material/Checkbox";
import Chip from "@mui/material/Chip";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
// Reducers
import { filterData } from "@/redux/slices/filtersSlice";
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
                inputProps={{style: { textAlign: "end" }}}
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
                          key={value}
                          label={value}
                          color="secondary"
                          clickable
                          deleteIcon={
                            <Cancel
                              onMouseDown={(event) => event.stopPropagation()}
                            />
                          }
                          onDelete={() => handleDelete(value)} />
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
                inputProps={{style: { textAlign: "end" }}}
            />
            <FormControl className={styles.checkboxes} component="fieldset" variant="standard">
                <FormLabel className={styles.filterLabels} component="legend">
                    مدة التسليم
                </FormLabel>
                <FormGroup className={styles.checkboxContainer}>
                  <FormControlLabel
                    className={styles.filtersCheckboxes}
                    control={
                      <Checkbox name="أقل من اسبوع" />
                    }
                    label="أقل من اسبوع"
                  />
                  <FormControlLabel
                    className={styles.filtersCheckboxes}
                    control={
                      <Checkbox name="من 1 إلي 3 اسابيع" />
                    }
                    label="من 1 إلي 3 اسابيع"
                  />
                  <FormControlLabel
                    className={styles.filtersCheckboxes}
                    control={
                      <Checkbox name="من 3 اسابيع إلي شهر" />
                    }
                    label="من 3 اسابيع إلي شهر"
                  />
                  <FormControlLabel
                    className={styles.filtersCheckboxes}
                    control={
                      <Checkbox name="أكثر من شهر" />
                    }
                    label="أكثر من شهر"
                  />
                </FormGroup>
            </FormControl>
            <FormLabel className={styles.filterLabels}>
                الميزانية
            </FormLabel>
            <Box className={styles.fromToContainer}>
                <OutlinedInput
                    className={styles.fromToInputs} 
                    variant={"outlined"}
                    type={"tel"}
                    placeholder={"من"}
                    inputProps={{style: { textAlign: "end" }}}
                />
                <OutlinedInput
                    className={styles.fromToInputs} 
                    variant={"outlined"}
                    type={"tel"}
                    placeholder={"إلى"}
                    inputProps={{style: { textAlign: "end" }}}
                />
            </Box>
        </Box>
    )
}

export default Filters;