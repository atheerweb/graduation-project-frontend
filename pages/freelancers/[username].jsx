// Components
import Summary from "@/components/freelancers/Summary/Summary";
import Data from "@/components/freelancers/Data/Data";
// API
import client from "@/lib/client";
// Hooks
import { useDispatch } from "react-redux";
import { setOneFreelancer } from "@/redux/slices/apiSlice";

const Freelancer = ({ freelancer }) => {
    const dispatch = useDispatch();
    dispatch(setOneFreelancer({ value: freelancer }));
    
    return (
        <>
            <Summary />
            <Data />
        </>
    )
}

export const getServerSideProps = async (context) => {
    const response = await client.get(`/freelance/freelancer/${context.query.username}`);
    const data = await response.data;
  
    return {
        props: {
            freelancer: data
        }
    }
}

export default Freelancer;