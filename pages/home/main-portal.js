import Seo from "../../components/common/Seo";
import FancyBlock2 from "../../components/home-page/home-10/FancyBlock2";
import HeroEdu from "../../components/home-page/home-3/Hero";
import Header from "../../components/header/Header";

import WhyUs from "../../components/home-page/home-10/WhyUs";
import Footer from "../../components/home-page/home-10/Footer";
import Product from "../../components/tabs/Product";
import BlockContact2 from "../../components/contact/BlockContact2";
import Map2 from "../../components/contact/Map";
import LogoGroup from "../../components/home-page/home-7/LogoGroup";
import Image from "next/image";
const MainPage = () => {
  return (
    <>
      <Seo pageTitle="PT GMI - Gunung Mas Inovasi" />

      {/* <Header /> */}

      <section id="#">
        <Header />

        <HeroEdu />
      </section>

      {/*
			=====================================================
				about section
			=====================================================
			*/}
      <section className="fancy-feature-one pt-170 lg-pt-140" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="title-style-one text-center text-lg-start">
                <h2 className="main-title fw-bold tx-dark m0">
                  Mendukung <span>Kemajuan</span> Ekonomi Makro di{" "}
                  <p
                    style={{
                      color: "#a07d08",
                    }}
                    className="d-inline"
                  >
                    Indonesia
                  </p>{" "}
                  .
                </h2>
              </div>
            </div>
            <div className="col-lg-5 ms-auto" data-aos="fade-left">
              <p className="text-lg text-center text-lg-start md-pt-30 m0">
                Lembaga Keuangan dan Perbankan Micro berperan penting dalam
                memajukan sektor ekonomi di Indonesia. Dengan sistem digital
                kami, Lembaga Keuangan dan Perbankan Micro dapat
                mengintegrasikan berbagai skema bisnis dan pelayanannya untuk
                maju bersama-sama meski ke pelosok sekalipun.
              </p>
            </div>
          </div>
        </div>

        <div className="wrapper pt-110 lg-pt-80">
          <div className="container">
            <div className="row justify-content-between">
              <FancyBlock2 />
            </div>
          </div>
        </div>
      </section>

      {/*
			=====================================================
				why us section
			=====================================================
			*/}
      <section
        className="fancy-feature-two position-relative pt-225 mt-40 lg-pt-100 sm-pt-60 "
        id="whyUs"
      >
        <div className="container">
          <WhyUs />
        </div>
      </section>

      {/*
			=====================================================
				product & services section
			=====================================================
			*/}
      <section className="pricing-section-one pt-170 lg-pt-14" id="product">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div
                className="title-style-three text-center mb-60 lg-mb-40"
                data-aos="fade-up"
              >
                <h3 className="text-uppercase fw-500 fw-bold">
                  Product &amp; {""}
                  <p style={{ color: "#a07d08" }} className=" d-inline">
                    Services
                  </p>
                </h3>
                <p
                  className="pr-info  fw-300"
                  style={{ fontSize: "0.9rem", color: "#a07d08" }}
                >
                  PENGEMBANGAN TEKNOLOGI INFORMASI UNTUK MENGDUKUNG DIGITALISASI
                  INDUSTRI KEUANGAN MIKRO
                </p>
              </div>
              {/* /.title-style-three */}
            </div>
          </div>
          <Product />
          {/* /.pricing-table-area-one */}
        </div>
        {/* End .container */}

        <div className="shapes shape-one rounded-circle" />
        <Image
          src="/images/shape/shape_40.svg"
          alt="shape"
          width={20}
          height={20}
          className="lazy-img shapes shape-two"
        />

        <Image
          src="/images/shape/shape_41.svg"
          alt="shape"
          width={20}
          height={20}
          className="lazy-img shapes shape-three"
        />

        <Image
          src="/images/shape/shape_42.svg"
          alt="shape"
          width={20}
          height={20}
          className="lazy-img shapes shape-four"
        />
        {/* <img
          src="/images/shape/shape_40.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
        <img
          src="/images/shape/shape_41.svg"
          alt="shape"
          className="lazy-img shapes shape-three"
        /> */}
      </section>

      {/*
			=====================================================
				clients section
			=====================================================
			*/}
      <section
        className="partner-section-two position-relative  pt-170 lg-pt-14"
        id="clients"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6" data-data-aos="fade-right">
              <div className="title-style-four">
                <div
                  className="sc-title-two fw-medium"
                  style={{ color: "#a07d08" }}
                >
                  Partners
                </div>
                <h2 className="main-title fw-500 tx-dark m0">
                  Beberapa <span>Partner</span> yang telah bekerja sama dengan
                  kami.
                </h2>
              </div>
              {/* /.title-style-four */}
              <p className="fs-20 pt-30 pe-xxl-5">
                Bergabunglah bersama kami untuk memajukan sektor ekonomi di
                Indonesia
              </p>
            </div>

            <div className="col logo-wrapper d-flex flex-wrap justify-content-center align-items-center ml-20">
              <LogoGroup />
            </div>
          </div>
        </div>

        <Image
          src="/images/shape/shape_49.svg"
          alt="shape"
          width={20}
          height={20}
          className="lazy-img shapes shape-one"
        />

        <Image
          src="/images/shape/shape_50.svg"
          alt="shape"
          width={20}
          height={20}
          className="lazy-img shapes shape-two"
        />

        <Image
          src="/images/shape/shape_51.svg"
          alt="shape"
          width={20}
          height={20}
          className="lazy-img shapes shape-three"
        />
      </section>

      {/*
			=====================================================
				contact section
			=====================================================
			*/}
      <section className=" pt-100 lg-pt-14" id="contact">
        <div className="contact-section-two text-start mt-80 lg-mt-60">
          <div className="row">
            <div className="col-lg-7">
              <div className="form-style-three md-mb-60" data-aos="fade-right">
                {/* <ContactForm2 /> */}
                <Map2 />
              </div>
              {/* /.form-style-three */}
            </div>
            {/* End col-lg-7 */}

            <div className="col-xl-4 col-lg-5  ms-auto" data-aos="fade-left">
              <BlockContact2 />
            </div>
            {/* End col-xl-4 */}
          </div>
        </div>
        {/* /.contact-section-two */}
      </section>

      {/*
			=====================================================
				Footer section
			=====================================================
			*/}
      <section className="footer-style-one theme-basic-footer position-relative">
        <div className="shapes shape-one" />
        <div className="container">
          <div className="inner-wrapper">
            <Footer />
            <div className="bottom-footer">
              <p className="copyright text-center m0">
                © {new Date().getFullYear()}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://themeforest.net/user/ib-themes"
                >
                  - PT GUNUNG MAS INOVASI
                </a>
              </p>
            </div>
          </div>
          {/* /.inner-wrapper */}
        </div>
      </section>
      {/* /.footer-style-one */}
    </>
  );
};

export default MainPage;
