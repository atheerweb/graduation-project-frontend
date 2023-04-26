import Hero from "@/components/courses/Hero";
import Tracks from "@/components/courses/Tracks";
import Tribute from "@/components/common/Tribute/Tribute";
import Testimonials from "@/components/common/Testimonials/Testimonials";

const Courses = () => {
    return (
        <>
            <Hero />
            <Tracks />
            <Tribute title={"انضم لأكثر من 20 ألف طالب و طالبه"} image={"/images/suit.png"} />
            <Testimonials header={"ماذا يقول عنا طلابنا"} />
        </>
    )
}

export default Courses;