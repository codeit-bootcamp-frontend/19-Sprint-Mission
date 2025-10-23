import React from "react";
import "@/assets/styles/home.css";

const Home = () => {
  return (
    <>
      <main className="with-header">
        <section id="hero" className="banner">
          <div className="wrapper">
            <h1>
              일상의 모든 물건을
              <br />
              거래해 보세요
            </h1>
            <a href="items.html" className="button pill-button">
              구경하러 가기
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
