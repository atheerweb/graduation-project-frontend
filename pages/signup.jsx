// Components
import SignLayout from "@/components/layouts/SignLayout/SignLayout";
import FundamentalInfo from "@/components/signup/FundamentalInfo";
import DetailedInfo from "@/components/signup/DetailedInfo";
// Hooks
import { useState } from "react";
import { useForm } from "react-hook-form";

const Signup = () => {
    const [ activeStep, setActiveStep ] = useState(false);
    const { handleSubmit, register, watch, formState: { errors } } = useForm();

    return (
        <SignLayout handleSubmit={handleSubmit} activeStep={activeStep} setActiveStep={setActiveStep}>
            {
                activeStep ? 
                <DetailedInfo register={register} errors={errors} setActiveStep={setActiveStep} /> :
                <FundamentalInfo register={register} errors={errors} watch={watch} />
            }
        </SignLayout>
    )
}

export default Signup;