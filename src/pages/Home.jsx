import Footer from '@/components/common/footer/Footer';
import Gnb from '@/components/common/gnb/Gnb';
import BottomBanner from '@/components/Home/banner/BottomBanner';
import TopBanner from '@/components/Home/banner/TopBanner';
import Overview from '@/components/Home/overview/Overview';
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
