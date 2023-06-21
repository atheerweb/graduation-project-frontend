import styles from '@/styles/modules/comingsoon/comingsoon.module.css';
const ComingSoon = () => {
  return (
    <div className={styles.success__container} id="comingsooncontainer">
      <img src="/images/cominsoon.svg" alt="" />
      <h1 className={styles.success__title}>قريباً</h1>
      <p className={styles.success__paragraph}>
        نحن نقدر اهتمامكم بمنصتنا, سنرسل لكم بريد بأخر التطورات في القريب العاجل
        ودمتم سالمين
      </p>
    </div>
  );
};

export default ComingSoon;
