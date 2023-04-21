import { createSlice } from "@reduxjs/toolkit";
import { Twitter, LinkedIn, Facebook, Instagram } from "@mui/icons-material";
import { DifferenceOutlined, PeopleAltOutlined, QuestionAnswerOutlined, VerifiedUserOutlined } from "@mui/icons-material";

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
            ])
        }
    }
});

export default constantsSlice.reducer;