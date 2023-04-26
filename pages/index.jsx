import Hero from "@/components/home/Hero/Hero";
import Features from "@/components/home/Features/Features";
import Freelancers from "@/components/home/Freelancers/Freelancers";
import Tribute from "@/components/common/Tribute/Tribute";
import Testimonials from "@/components/common/Testimonials/Testimonials";

const Home = () => {
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

export default Home;