// MUI Components
import Grid from "@mui/material/Grid";
// Components
import Cards from "../Cards/Cards";
// Hooks
import { useSelector } from "react-redux";
// CSS Modules
import styles from "@/styles/modules/freelancers/freelancers.module.css";

const Main = (props) => {
  const filteredCards = useSelector(
    (state) => state.api.value.allFreelancers
  ).filter((card) => {
      const fullName = `${card.first_name} ${card.last_name}`;
      if (fullName.includes(props.filters.title)) {
        if (card.ratings >= props.filters.ratings) {
          return card;
        }
    }
  });

  return (
    <Grid className={styles.mainGrid}>
      {filteredCards.map((card, index) => (
        <Cards key={index} card={card} />
      ))}
    </Grid>
  );
};

export default Main;
