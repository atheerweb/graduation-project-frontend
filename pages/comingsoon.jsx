// Next Component
import Image from 'next/image';
// MUI Components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// CSS Modules
import styles from '@/styles/modules/comingsoon/comingsoon.module.css';

const ComingSoon = () => {
  return (
    <Box className={styles.success__container} id="comingsooncontainer">
      <Image width={400} height={750} src="/images/cominsoon.svg" alt="Coming Soon!" />
      <Typography variant='h1' className={styles.success__title}>
        قريباً
      </Typography>
      <Typography className={styles.success_Typographyaragraph}>
        نحن نقدر اهتمامكم بمنصتنا, سنرسل لكم بريد بأخر التطورات في القريب العاجل
        ودمتم سالمين
      </Typography>
    </Box>
  );
};

export default ComingSoon;
