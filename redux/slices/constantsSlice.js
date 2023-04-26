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
            ],
            freelancersProjectsCards: [
                {title: "لوجو شركة", body: "لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل،", date: "2023"},
                {title: "لوجو شركة", body: "لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل،", date: "2023"},
                {title: "لوجو شركة", body: "لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل،", date: "2023"},
                {title: "لوجو شركة", body: "لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل،", date: "2023"},
                {title: "لوجو شركة", body: "لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل،", date: "2023"},
                {title: "لوجو شركة", body: "لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل،", date: "2023"}
            ],
            coursesTracks: [
                ["programming", "مهندس برمجيات"],
                ["business", "إدارة اعمال"],
                ["accounting", "محاسبه"],
                ["dataAnalysis", "علوم البيانات"],
                ["robotics", "مهندس روبوتات"],
                ["statistics", "إحصائي"]
            ],
            coursesTracksCards: {
                programming: [
                    {title: "كورس البرمجة", subTitle: "مهندس برمجيات", ratings: 5},
                    {title: "كورس البرمجة", subTitle: "مهندس برمجيات", ratings: 5},
                    {title: "كورس البرمجة", subTitle: "مهندس برمجيات", ratings: 5}
                ],
                business: [
                    {title: "كورس إدارة الأعمال", subTitle: "إدارة اعمال", ratings: 5},
                    {title: "كورس إدارة الأعمال", subTitle: "إدارة اعمال", ratings: 5},
                    {title: "كورس إدارة الأعمال", subTitle: "إدارة اعمال", ratings: 5}
                ],
                accounting: [
                    {title: "كورس المحاسبة", subTitle: "محاسبه", ratings: 5},
                    {title: "كورس المحاسبة", subTitle: "محاسبه", ratings: 5},
                    {title: "كورس المحاسبة", subTitle: "محاسبه", ratings: 5}
                ],
                dataAnalysis: [
                    {title: "كورس علوم البيانات", subTitle: "علوم البيانات", ratings: 5},
                    {title: "كورس علوم البيانات", subTitle: "علوم البيانات", ratings: 5},
                    {title: "كورس علوم البيانات", subTitle: "علوم البيانات", ratings: 5}
                ],
                robotics: [
                    {title: "كورس الروبوتات", subTitle: "مهندس روبوتات", ratings: 5},
                    {title: "كورس الروبوتات", subTitle: "مهندس روبوتات", ratings: 5},
                    {title: "كورس الروبوتات", subTitle: "مهندس روبوتات", ratings: 5}
                ],
                statistics: [
                    {title: "كورس تحليل البيانات", subTitle: "إحصائي", ratings: 5},
                    {title: "كورس تحليل البيانات", subTitle: "إحصائي", ratings: 5},
                    {title: "كورس تحليل البيانات", subTitle: "إحصائي", ratings: 5}
                ],
            }
        }
    }
});

export default constantsSlice.reducer;