// Components
import Proposers from "../Proposers/Proposers";
// MUI Components
import Box from "@mui/material/Box";
// Hooks
import { useSelector } from "react-redux";

const Offers = () => {
    const proposers = useSelector(state => state.constants.value.jobsProposers);
    return (
        <Box sx={{width: "100%", display: "flex", flexDirection: "column", gap: "10px"}}>
            {
                proposers.map(proposer => (
                    <Proposers key={proposer.id} content={proposer} />
                ))
            }
        </Box>
    )
}

export default Offers;