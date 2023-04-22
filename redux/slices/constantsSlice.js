import { createSlice } from "@reduxjs/toolkit";
import { Twitter, LinkedIn, Facebook, Instagram, DifferenceOutlined, PeopleAltOutlined, QuestionAnswerOutlined, VerifiedUserOutlined, BusinessCenterOutlined, PersonOutlineOutlined  } from "@mui/icons-material";

export const constantsSlice = createSlice({
    name: "constants",
    initialState: {
        value: {
            navLinks: [
                {title: "مستقلين", href: "/freelancers"},
                {title: "وظائف", href: "/jobs"},
                {title: "الرئيسية", href: "/"}
            ],
            footerLinks: [
                {title: "أسئلة شائعة", href: "/FAQ"},
                {title: "عنا", href: "/about"},
                {title: "مستقلين", href: "/freelancers"},
                {title: "وظائف", href: "/jobs"},
                {title: "الرئيسية", href: "/"}
            ],
            footerIcons: (color) => (
                [
                    <Facebook key={0} sx={{color: color, cursor: "pointer"}} />,
                    <Twitter key={1} sx={{color: color, cursor: "pointer"}} />,
                    <LinkedIn key={2} sx={{color: color, cursor: "pointer"}} />,
                    <Instagram key={3} sx={{color: color, cursor: "pointer"}} />
                ]
            ),
            heroButtons: [
                "شاهد المزيد",
                "إدخال بيانات",
                "ترجمة و صوتيات",
                "تسويق",
                "برمجة",
                "تصميم"
            ],
            featuresIcons: (color) => ([
                { icon: <DifferenceOutlined sx={{fontSize: "45px", color: color}} />, title: "أنشر الوظيفة" },
                { icon: <PeopleAltOutlined sx={{fontSize: "45px", color: color}} />, title: "أختر الكوادر المميزة" },
                { icon: <QuestionAnswerOutlined sx={{fontSize: "45px", color: color}} />, title: "تواصل مع المستقلين" },
                { icon: <VerifiedUserOutlined sx={{fontSize: "45px", color: color}} />, title: "ضمان الدفع الأمن " }
            ]),
            freelancersCards: [
                {title: "Freelancer One", body: "Body One"},
                {title: "Freelancer Two", body: "Body Two"},
                {title: "Freelancer Three", body: "Body Three"},
                {title: "Freelancer Four", body: "Body Four"},
                {title: "Freelancer Five", body: "Body Five"}
            ],
            testimonialsCards: [
                {title: "Testimonial One", body: "Body One"},
                {title: "Testimonial Two", body: "Body Two"},
                {title: "Testimonial Three", body: "Body Three"}
            ],
            summaryStacks: [
                {title: "مستقل", icon: <PersonOutlineOutlined />},
                {title: "مصمم جرافيك", icon: <BusinessCenterOutlined />}
            ]
        }
    }
});

export default constantsSlice.reducer;