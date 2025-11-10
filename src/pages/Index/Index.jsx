function Index() {
  return (
    <main className="main">
      <section className="top">
        <div className="inner">
          <div className="txtCont">
            <h1 className="title">
              일상의 모든 물건을 <br className="hiddenT" />
              거래해 보세요
            </h1>
            <a href="/items" className="btn lg">
              구경하러 가기
            </a>
          </div>
        </div>
      </section>
      <section className="cont">
        <div className="inner">
          <div className="imgCont">
            <img src="/img/main/img_home_01.png" alt="" />
          </div>
          <div className="txtCont">
            <span className="type">Hot item</span>
            <p className="title">
              인기 상품을 <br className="hiddenTM" />
              확인해 보세요
            </p>
            <p className="text">
              가장 HOT한 중고거래 물품을
              <br />
              판다 마켓에서 확인해 보세요
            </p>
          </div>
        </div>
      </section>
      <section className="cont reverse">
        <div className="inner">
          <div className="imgCont">
            <img src="/img/main/img_home_02.png" alt="" />
          </div>
          <div className="txtCont">
            <span className="type">Search</span>
            <p className="title">
              구매를 원하는 <br className="hiddenTM" />
              상품을 검색하세요
            </p>
            <p className="text">
              구매하고 싶은 물품은 검색해서
              <br />
              쉽게 찾아보세요
            </p>
          </div>
        </div>
      </section>
      <section className="cont">
        <div className="inner">
          <div className="imgCont">
            <img src="/img/main/img_home_03.png" alt="" />
          </div>
          <div className="txtCont">
            <span className="type">Register</span>
            <p className="title">
              판매를 원하는 <br className="hiddenTM" />
              상품을 등록하세요
            </p>
            <p className="text">
              어떤 물건이든 판매하고 싶은 상품을
              <br />
              쉽게 등록하세요
            </p>
          </div>
        </div>
      </section>
      <section className="btm">
        <div className="inner">
          <p className="title">
            믿을 수 있는
            <br />
            판다마켓 중고 거래
          </p>
        </div>
      </section>
    </main>
  );
}

export default Index;
