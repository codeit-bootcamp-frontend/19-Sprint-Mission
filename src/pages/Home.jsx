import Footer from '@/components/common/footer/Footer';
import Gnb from '@/components/common/gnb/Gnb';
import BottomBanner from '@/components/home_temp/banner/BottomBanner';
import TopBanner from '@/components/home_temp/banner/TopBanner';
import Overview from '@/components/home_temp/overview/Overview';
import styles from '@/style/page/Home.module.css';

const Home = () => {
  return (
    <>
      <Gnb login={false} />
      <main className={styles.container}>
        <TopBanner />
        <Overview />
        <BottomBanner />
      </main>
      <Footer />
    </>
  );
};

export default Home;
