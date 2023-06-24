// MUI Components
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormLabel from "@mui/material/FormLabel";
// CSS Modules
import styles from "@/styles/modules/jobs/jobs.module.css";

const Filters = (props) => {
    return (
        <Box className={styles.filtersContainer}>
            <OutlinedInput 
                variant={"outlined"}
                type={"text"}
                placeholder={"بحث"}
                onChange={(event) => props.setFilters({ type: "title", payload: event.target.value })}
            />
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