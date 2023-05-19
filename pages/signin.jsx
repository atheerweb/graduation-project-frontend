// Components
import Form from "@/components/signin/Form";
// MUI Components
import Grid from "@mui/material/Grid";
// CSS Modules
import styles from "@/styles/modules/signin/signin.module.css";

const SignIn = () => {
    return (
        <Grid className={styles.grid}>
            <Form />
        </Grid>
    )
}

export default SignIn;