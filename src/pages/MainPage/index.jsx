import clsx from "clsx";
import styles from "./MainPage.module.scss";
import Button from "@/components/Button";

function MainPage() {
  return (
    <main className={styles.main}>
      <section className={styles.top}>
        <div className={styles.inner}>
          <div className={styles.txtCont}>
            <h1 className={styles.title}>
              일상의 모든 물건을 <br className={styles.hiddenT} />
              거래해 보세요
            </h1>
            <Button as="a" href="/items" size="mid">
              구경하러 가기
            </Button>
          </div>
        </div>
      </section>
      <section className={styles.cont}>
        <div className={styles.inner}>
          <div className={styles.imgCont}>
            <img src="/img/main/img_home_01.png" alt="" />
          </div>
          <div className={styles.txtCont}>
            <span className={styles.type}>Hot item</span>
            <p className={styles.title}>
              인기 상품을 <br className={styles.hiddenTM} />
              확인해 보세요
            </p>
            <p className={styles.text}>
              가장 HOT한 중고거래 물품을
              <br />
              판다 마켓에서 확인해 보세요
            </p>
          </div>
        </div>
      </section>
      <section className={clsx(styles.cont, styles.reverse)}>
        <div className={styles.inner}>
          <div className={styles.imgCont}>
            <img src="/img/main/img_home_02.png" alt="" />
          </div>
          <div className={styles.txtCont}>
            <span className={styles.type}>Search</span>
            <p className={styles.title}>
              구매를 원하는 <br className={styles.hiddenTM} />
              상품을 검색하세요
            </p>
            <p className={styles.text}>
              구매하고 싶은 물품은 검색해서
              <br />
              쉽게 찾아보세요
            </p>
          </div>
        </div>
      </section>
      <section className={styles.cont}>
        <div className={styles.inner}>
          <div className={styles.imgCont}>
            <img src="/img/main/img_home_03.png" alt="" />
          </div>
          <div className={styles.txtCont}>
            <span className={styles.type}>Register</span>
            <p className={styles.title}>
              판매를 원하는 <br className={styles.hiddenTM} />
              상품을 등록하세요
            </p>
            <p className={styles.text}>
              어떤 물건이든 판매하고 싶은 상품을
              <br />
              쉽게 등록하세요
            </p>
          </div>
        </div>
      </section>
      <section className={styles.btm}>
        <div className={styles.inner}>
          <p className={styles.title}>
            믿을 수 있는
            <br />
            판다마켓 중고 거래
          </p>
        </div>
      </section>
    </main>
  );
}

export default MainPage;
