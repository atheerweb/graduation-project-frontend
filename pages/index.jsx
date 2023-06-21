// Components
import Hero from "@/components/home/Hero/Hero";
import Features from "@/components/home/Features/Features";
import Freelancers from "@/components/home/Freelancers/Freelancers";
import Tribute from "@/components/common/Tribute/Tribute";
import Testimonials from "@/components/common/Testimonials/Testimonials";
// Hooks
import { useDispatch } from "react-redux";
// APIs
import client from "@/lib/client";
import { setTopFreelancers } from "@/redux/slices/apiSlice";

const Home = ({ topFreelancers }) => {
  const dispatch = useDispatch();
  topFreelancers && dispatch(setTopFreelancers({value: topFreelancers}));

  return (
      <>
        <Hero />
        <Features />
        <Freelancers />
        <Tribute title={"منصة عربية واعدة لتوصيل الشركات بأصحاب الأعمال"} image={"/images/coffee.png"} />
        <Testimonials header={"ماذا يقول عنا أصحاب الأعمال"} />
      </>
  )
}

export const getServerSideProps = async () => {
  const response = await client.get("/freelance/top-5-freelancers/");
  const data = await response.data;

  return {
    props: {
      topFreelancers: data
    }
  }
}

export default Home;