import { createSlice } from '@reduxjs/toolkit';
import {
  Twitter,
  LinkedIn,
  Facebook,
  Instagram,
  DifferenceOutlined,
  PeopleAltOutlined,
  QuestionAnswerOutlined,
  VerifiedUserOutlined,
  BusinessCenterOutlined,
  PersonOutlineOutlined,
} from '@mui/icons-material';
import { v4 as uuidv4 } from 'uuid';

export const constantsSlice = createSlice({
  name: 'constants',
  initialState: {
    value: {
      navLinks: [
        { title: 'الرئيسية', href: '/' },
        { title: 'وظائف', href: '/jobs' },
        { title: 'مستقلين', href: '/freelancers' },
        { title: 'صاحب عمل', href: '/comingsoon' },
      ],
      footerLinks: [
        { title: 'الرئيسية', href: '/' },
        { title: 'وظائف', href: '/jobs' },
        { title: 'مستقلين', href: '/freelancers' },
        { title: 'عنا', href: '/about' },
        { title: 'أسئلة شائعة', href: '/FAQ' },
      ],
      footerIcons: (color) => [
        <Instagram key={0} sx={{ color: color, cursor: 'pointer' }} />,
        <LinkedIn key={1} sx={{ color: color, cursor: 'pointer' }} />,
        <Twitter key={2} sx={{ color: color, cursor: 'pointer' }} />,
        <Facebook key={3} sx={{ color: color, cursor: 'pointer' }} />,
      ],
      heroButtons: [
        'تصميم',
        'برمجة',
        'تسويق',
        'ترجمة و صوتيات',
        'إدخال بيانات',
        'شاهد المزيد',
      ],
      featuresIcons: (color) => [
        {
          icon: (
            <VerifiedUserOutlined sx={{ fontSize: '45px', color: color }} />
          ),
          title: 'ضمان الدفع الأمن ',
        },
        {
          icon: (
            <QuestionAnswerOutlined sx={{ fontSize: '45px', color: color }} />
          ),
          title: 'تواصل مع المستقلين',
        },
        {
          icon: <PeopleAltOutlined sx={{ fontSize: '45px', color: color }} />,
          title: 'أختر الكوادر المميزة',
        },
        {
          icon: <DifferenceOutlined sx={{ fontSize: '45px', color: color }} />,
          title: 'أنشر الوظيفة',
        },
      ],
      freelancersCards: [
        { title: 'المستقل الأول', body: 'التوصيف الأول' },
        { title: 'المستقل الثانى', body: 'التوصيف الثانى' },
        { title: 'المستقل الثالث', body: 'التوصيف الثالث' },
        { title: 'المستقل الرابع', body: 'التوصيف الرابع' },
        { title: 'المستقل الخامس', body: 'التوصيف الخامس' },
      ],
      testimonialsCards: [
        { title: 'صاحب العمل الأول', body: 'التعريف الأول' },
        { title: 'صاحب العمل الثانى', body: 'التعريف الثانى' },
        { title: 'صاحب العمل الثالث', body: 'التعريف الثالث' },
      ],
      summaryStacks: [
        { title: 'مستقل', icon: <PersonOutlineOutlined /> },
        { title: 'مصمم جرافيك', icon: <BusinessCenterOutlined /> },
      ],
      freelancersProjectsCards: [
        {
          id: uuidv4(),
          title: 'لوجو شركة',
          body: 'أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ',
          date: '2023',
        },
        {
          id: uuidv4(),
          title: 'لوجو شركة',
          body: 'أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ',
          date: '2023',
        },
        {
          id: uuidv4(),
          title: 'لوجو شركة',
          body: 'أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ',
          date: '2023',
        },
        {
          id: uuidv4(),
          title: 'لوجو شركة',
          body: 'أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ',
          date: '2023',
        },
        {
          id: uuidv4(),
          title: 'لوجو شركة',
          body: 'أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ',
          date: '2023',
        },
        {
          id: uuidv4(),
          title: 'لوجو شركة',
          body: 'أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ',
          date: '2023',
        },
      ],
      freelancersAboutChips: [
        'مواقع ويب',
        'مواقع ويب',
        'مواقع ويب',
        'مواقع ويب',
      ],
      freelancersAvailableCards: [
        {
          id: uuidv4(),
          avatar: 'M',
          title: 'د. محمد خالد',
          ratings: 5,
          body: 'حاصل على إجازة في الهندسة المعمارية، وطالب ماجستير في التنمية الإقليمية والعمرانية',
        },
        {
          id: uuidv4(),
          avatar: 'M',
          title: 'د. محمد خالد',
          ratings: 5,
          body: 'حاصل على إجازة في الهندسة المعمارية، وطالب ماجستير في التنمية الإقليمية والعمرانية',
        },
        {
          id: uuidv4(),
          avatar: 'M',
          title: 'د. محمد خالد',
          ratings: 5,
          body: 'حاصل على إجازة في الهندسة المعمارية، وطالب ماجستير في التنمية الإقليمية والعمرانية',
        },
        {
          id: uuidv4(),
          avatar: 'M',
          title: 'د. محمد خالد',
          ratings: 5,
          body: 'حاصل على إجازة في الهندسة المعمارية، وطالب ماجستير في التنمية الإقليمية والعمرانية',
        },
        {
          id: uuidv4(),
          avatar: 'M',
          title: 'د. زياد خالد',
          ratings: 5,
          body: 'حاصل على إجازة في الهندسة المعمارية، وطالب ماجستير في التنمية الإقليمية والعمرانية',
        },
        {
          id: uuidv4(),
          avatar: 'M',
          title: 'د. زياد خالد',
          ratings: 5,
          body: 'حاصل على إجازة في الهندسة المعمارية، وطالب ماجستير في التنمية الإقليمية والعمرانية',
        },
        {
          id: uuidv4(),
          avatar: 'M',
          title: 'د. زياد خالد',
          ratings: 5,
          body: 'حاصل على إجازة في الهندسة المعمارية، وطالب ماجستير في التنمية الإقليمية والعمرانية',
        },
        {
          id: uuidv4(),
          avatar: 'M',
          title: 'د. زياد خالد',
          ratings: 5,
          body: 'حاصل على إجازة في الهندسة المعمارية، وطالب ماجستير في التنمية الإقليمية والعمرانية',
        },
        {
          id: uuidv4(),
          avatar: 'M',
          title: 'د. زياد خالد',
          ratings: 5,
          body: 'حاصل على إجازة في الهندسة المعمارية، وطالب ماجستير في التنمية الإقليمية والعمرانية',
        },
      ],
      jobsCards: [
        {
          id: uuidv4(),
          avatar: 'M',
          title: 'عمل تصميم لموقع',
          freelancer: 'د. محمد خالد',
          time: 'منذ 30 دقيقة',
          body: 'أريد عمل تصميم أحتارفي لموقع الكتروني لعيادة أطفال ، مع وجود خدمة استشارية على الموقع ، وتقييمات على الخدمة ، مع جدول لمواعيد العيادة وأسعارها ، وأمكانية التغيير بين اللغة العربية والانجليزية',
        },
        {
          id: uuidv4(),
          avatar: 'M',
          title: 'عمل تصميم لموقع',
          freelancer: 'د. محمد خالد',
          time: 'منذ 30 دقيقة',
          body: 'أريد عمل تصميم أحتارفي لموقع الكتروني لعيادة أطفال ، مع وجود خدمة استشارية على الموقع ، وتقييمات على الخدمة ، مع جدول لمواعيد العيادة وأسعارها ، وأمكانية التغيير بين اللغة العربية والانجليزية',
        },
        {
          id: uuidv4(),
          avatar: 'M',
          title: 'عمل تصميم لموقع',
          freelancer: 'د. محمد خالد',
          time: 'منذ 30 دقيقة',
          body: 'أريد عمل تصميم أحتارفي لموقع الكتروني لعيادة أطفال ، مع وجود خدمة استشارية على الموقع ، وتقييمات على الخدمة ، مع جدول لمواعيد العيادة وأسعارها ، وأمكانية التغيير بين اللغة العربية والانجليزية',
        },
        {
          id: uuidv4(),
          avatar: 'M',
          title: 'عمل تصميم لموقع',
          freelancer: 'د. محمد خالد',
          time: 'منذ 30 دقيقة',
          body: 'أريد عمل تصميم أحتارفي لموقع الكتروني لعيادة أطفال ، مع وجود خدمة استشارية على الموقع ، وتقييمات على الخدمة ، مع جدول لمواعيد العيادة وأسعارها ، وأمكانية التغيير بين اللغة العربية والانجليزية',
        },
        {
          id: uuidv4(),
          avatar: 'M',
          title: 'عمل تصميم لمنزل',
          freelancer: 'د. محمد خالد',
          time: 'منذ 30 دقيقة',
          body: 'أريد عمل تصميم أحتارفي لموقع الكتروني لعيادة أطفال ، مع وجود خدمة استشارية على الموقع ، وتقييمات على الخدمة ، مع جدول لمواعيد العيادة وأسعارها ، وأمكانية التغيير بين اللغة العربية والانجليزية',
        },
        {
          id: uuidv4(),
          avatar: 'M',
          title: 'عمل تصميم لمنزل',
          freelancer: 'د. محمد خالد',
          time: 'منذ 30 دقيقة',
          body: 'أريد عمل تصميم أحتارفي لموقع الكتروني لعيادة أطفال ، مع وجود خدمة استشارية على الموقع ، وتقييمات على الخدمة ، مع جدول لمواعيد العيادة وأسعارها ، وأمكانية التغيير بين اللغة العربية والانجليزية',
        },
        {
          id: uuidv4(),
          avatar: 'M',
          title: 'عمل تصميم لمنزل',
          freelancer: 'د. محمد خالد',
          time: 'منذ 30 دقيقة',
          body: 'أريد عمل تصميم أحتارفي لموقع الكتروني لعيادة أطفال ، مع وجود خدمة استشارية على الموقع ، وتقييمات على الخدمة ، مع جدول لمواعيد العيادة وأسعارها ، وأمكانية التغيير بين اللغة العربية والانجليزية',
        },
        {
          id: uuidv4(),
          avatar: 'M',
          title: 'عمل تصميم لمنزل',
          freelancer: 'د. محمد خالد',
          time: 'منذ 30 دقيقة',
          body: 'أريد عمل تصميم أحتارفي لموقع الكتروني لعيادة أطفال ، مع وجود خدمة استشارية على الموقع ، وتقييمات على الخدمة ، مع جدول لمواعيد العيادة وأسعارها ، وأمكانية التغيير بين اللغة العربية والانجليزية',
        },
        {
          id: uuidv4(),
          avatar: 'M',
          title: 'عمل تصميم لمنزل',
          freelancer: 'د. محمد خالد',
          time: 'منذ 30 دقيقة',
          body: 'أريد عمل تصميم أحتارفي لموقع الكتروني لعيادة أطفال ، مع وجود خدمة استشارية على الموقع ، وتقييمات على الخدمة ، مع جدول لمواعيد العيادة وأسعارها ، وأمكانية التغيير بين اللغة العربية والانجليزية',
        },
      ],
      jobsProposers: [
        {
          id: uuidv4(),
          avatar: 'M',
          title: 'د. محمد خالد',
          ratings: 5,
          job: 'مصمم مواقع',
          price: 750,
          time: 'خلال يومين',
          body: 'السلام عليكم معكم المهندس خالد صالح خبير في الووردبريس مدة ١٥ عام لدي سجل طويل بمشاريع تسريع ووردبريس وجميعها ناجحة والحمدلله يمكنكم الاطلاع على سجلي في مستقل ي...',
        },
        {
          id: uuidv4(),
          avatar: 'M',
          title: 'د. محمد خالد',
          ratings: 5,
          job: 'مصمم مواقع',
          price: 750,
          time: 'خلال يومين',
          body: 'السلام عليكم معكم المهندس خالد صالح خبير في الووردبريس مدة ١٥ عام لدي سجل طويل بمشاريع تسريع ووردبريس وجميعها ناجحة والحمدلله يمكنكم الاطلاع على سجلي في مستقل ي...',
        },
        {
          id: uuidv4(),
          avatar: 'M',
          title: 'د. محمد خالد',
          ratings: 5,
          job: 'مصمم مواقع',
          price: 750,
          time: 'خلال يومين',
          body: 'السلام عليكم معكم المهندس خالد صالح خبير في الووردبريس مدة ١٥ عام لدي سجل طويل بمشاريع تسريع ووردبريس وجميعها ناجحة والحمدلله يمكنكم الاطلاع على سجلي في مستقل ي...',
        },
      ],
    },
  },
});

export default constantsSlice.reducer;
