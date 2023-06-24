// Components
import Summary from "@/components/freelancers/Summary/Summary";
import Data from "@/components/freelancers/Data/Data";
// Hooks
import { useDispatch } from "react-redux";
import { setOneFreelancer } from "@/redux/slices/apiSlice";
import { useApi } from "@/lib/hooks";
import { useRouter } from "next/router";

const Freelancer = () => {
    const { query: { username } } = useRouter();
    const freelancer = useApi(`/freelance/freelancer/${username}`);
    const dispatch = useDispatch();
    freelancer && dispatch(setOneFreelancer({ value: freelancer }));
    
    return (
        <>
            <Summary />
            <Data />
        </>
    )
}

export default Freelancer;