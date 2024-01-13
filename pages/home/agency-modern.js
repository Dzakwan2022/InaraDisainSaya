import Link from "next/link";
import Seo from "../../components/common/Seo";
import Blog from "../../components/home-page/home-10/Blog";
import FancyBlock from "../../components/home-page/home-10/FancyBlock";
import FancyBlock2 from "../../components/home-page/home-10/FancyBlock2";
import Header from "../../components/home-page/home-10/Header";
import Hero from "../../components/home-page/home-10/Hero";
import OurAim from "../../components/home-page/home-10/OurAim";
import Services from "../../components/home-page/home-10/Services";
import Testimonial from "../../components/home-page/home-10/Testimonial";
import FancyBanner from "../../components/home-page/home-10/FancyBanner";
import CallToActions from "../../components/home-page/home-10/CallToActions";
import Footer from "../../components/home-page/home-10/Footer";
import Tabs from "../../components/tabs/Tabs";
import Tabs2 from "../../components/tabs/Tabs2";
import ContactForm2 from "../../components/contact/ContactForm2";
import ContactForm3 from "../../components/contact/ContactForm3";
import BlockContact2 from "../../components/contact/BlockContact2";
import Map2 from "../../components/contact/Map";
import LogoGroup from "../../components/home-page/home-7/LogoGroup";
import Image from "next/image";
const AgencyModern = () => {
  return (
    <>
      <Seo pageTitle="PT GMI - Gunung Mas Inovasi" />
      {/* <!-- 
        =============================================
        Theme Default Menu
        ============================================== 	
        --> */}
      <Header />
      {/* <!-- /.theme-main-menu --> */}
      {/* 
        =============================================
        Theme Hero Banner
        ============================================== 
        */}
      <div className="hero-banner-one p-30">
        <div className="bg-wrapper" data-aos="fade">
          <Hero />
          <img
            src="/images/shape/shape_08.svg"
            alt="illustration"
            className="lazy-img shapes shape-eight"
          />
        </div>
      </div>
      {/* /.hero-banner-one */}

      {/* 
        =============================================
        Feature Section One
        ============================================== 
        */}
      <div className="fancy-feature-one pt-170 lg-pt-140">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="title-style-one text-center text-lg-start">
                <h2 className="main-title fw-bold tx-dark m0">
                  Mendukung <span>Kemajuan</span> Ekonomi Makro di{" "}
                  <p className="text-primary d-inline">Indonesia</p> .
                </h2>
              </div>
            </div>
            <div className="col-lg-5 ms-auto" data-aos="fade-left">
              <p className="text-lg text-center text-lg-start md-pt-30 m0">
                {/* Jano provides alternative asset management solutions to a global
                client base and manages a significant. */}
                Lembaga Keuangan dan Perbankan Micro berperan penting dalam
                memajukan sektor ekonomi di Indonesia. Dengan sistem digital
                kami, Lembaga Keuangan dan Perbankan Micro dapat
                mengintegrasikan berbagai skema bisnis dan pelayanannya untuk
                maju bersama-sama meski ke pelosok sekalipun.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="inner-content pt-110 lg-pt-60 md-pt-30">
          <div className="row gx-xxl-5">
            <Services />
          </div>
        </div> */}

        <div className="wrapper pt-110 lg-pt-80">
          <div className="container">
            <div className="row justify-content-between">
              <FancyBlock2 />
            </div>
          </div>
        </div>
      </div>
      {/* /.fancy-feature-one */}

      {/* 
        =============================================
        Feature Section Two
        ============================================== 
        */}
      <div className="fancy-feature-two position-relative pt-225 mt-40 lg-pt-100 sm-pt-60">
        <div className="container">
          <OurAim />
        </div>
      </div>

      <div className="pricing-section-one position-relative mt-200 lg-mt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div
                className="title-style-three text-center mb-60 lg-mb-40"
                data-aos="fade-up"
              >
                <h3 className="text-uppercase fw-500 fw-bold">
                  Product & 
                  <p className="text-warning d-inline">Services</p>
                </h3>
                <p className="pr-info text-warning fw-300" style={{fontSize : '0.9rem'}}>PENGEMBANGAN TEKNOLOGI INFORMASI UNTUK MENGDUKUNG DIGITALISASI INDUSTRI KEUANGAN MIKRO</p>
                
              </div>
              {/* /.title-style-three */}
            </div>
          </div>
          <Tabs />
          {/* /.pricing-table-area-one */}
        </div>
        {/* End .container */}

        <div className="shapes shape-one rounded-circle" />
        <img
          src="/images/shape/shape_40.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
        <img
          src="/images/shape/shape_41.svg"
          alt="shape"
          className="lazy-img shapes shape-three"
        />
      </div>
      {/* /.fancy-feature-two */}

      {/*
			=====================================================
				Feedback Section One
			=====================================================
			*/}
      {/* <div
        className="feedback-section-one position-relative p-30 mt-200 lg-mt-130 "
        data-aos="fade-up"
      >
        <div className="bg-wrapper position-relative pt-150 pb-180 lg-pt-100 lg-pb-120">
          <img
            src="/images/shape/shape_14.svg"
            alt="img"
            className="lazy-img shapes shape-one"
          />
          <div className="shapes shape-two" />
          <div className="shapes shape-three" />
          <Testimonial />
        </div>
      </div> */}
      {/* /.feedback-section-one */}

      {/* 
			=============================================
				Feature Section Two
			============================================== 
			*/}
      {/* <div className="fancy-feature-two position-relative pt-250 lg-pt-120">
        <div className="container">
          <FancyBlock />
        </div>
      </div> */}
      {/* /.fancy-feature-two */}

      {/*
			=====================================================
				Card Style Two
			=====================================================
			*/}
      {/* <div className="wrapper pt-110 lg-pt-80">
        <div className="container">
          <div className="row justify-content-between">
            <FancyBlock2 />
          </div>
        </div>
      </div> */}
      {/* /.wrapper */}

      {/* 
        =============================================
         Client Section
        ==============================================
      */}
      <div className="partner-section-two position-relative mt-225 mb-250 md-mt-120 md-mb-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6" data-data-aos="fade-right">
              <div className="title-style-four">
                <div className="sc-title-two" style={{ color: "#6A45FF" }}>
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
                Indonesia.
              </p>
            </div>
          </div>
        </div>
        {/* /.container */}

        <div className="logo-wrapper d-flex flex-wrap justify-content-center align-items-center">
          <LogoGroup />
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

        {/* <img
          src="/images/shape/shape_49.svg"
          alt="logo"
          className="lazy-img shapes shape-one"
        />
        <img
          src="/images/shape/shape_50.svg"
          alt="logo"
          className="lazy-img shapes shape-two"
        />
        <img
          src="/images/shape/shape_51.svg"
          alt="logo"
          className="lazy-img shapes shape-three"
        /> */}
      </div>

      {/*
			=====================================================
				Blog Section One
			=====================================================
			*/}
      {/* <div className="blog-section-one p-30 mt-180 lg-mt-120">
        <div className="bg-wrapper pt-140 pb-170 lg-pt-100 lg-pb-100 position-relative">
          <div className="shapes shape-one" />
          <img
            src="/images/shape/shape_16.svg"
            alt="icon"
            className="lazy-img shapes shape-two"
          />
          <div className="shapes shape-three" />

          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-7">
                <div className="title-style-one text-center text-sm-start xs-mb-30">
                  <h2 className="main-title fw-bold tx-dark m0">
                    Inside <span>story</span> of our company.
                  </h2>
                </div>
              </div>
              <div className="col-lg-6 col-sm-5 ms-auto d-flex justify-content-center justify-content-sm-end">
                <Link href="/blog/blog-v1" className="btn-one fw-500">
                  Go to Blog
                </Link>
              </div>
            </div>

            <div className="row pt-50 lg-pt-30">
              <Blog />
            </div>
          </div>
        </div>
      </div> */}
      {/* /.blog-section-one */}

      {/* 
			=============================================
				Wrapper
			============================================== 
			*/}
      {/* <FancyBanner /> */}
      {/* /.wrapper */}

      {/*
			=====================================================
				Fancy Short Banner One
			=====================================================
			*/}
      {/* <CallToActions /> */}
      {/* /.fancy-short-banner-one */}

      {/* 
      =============================================
        Contact Section One
      ==============================================
      */}
      <div className="container">
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

          {/* <div className="row">
            <h5>Location</h5>

            <Map2 />
          </div> */}
        </div>
        {/* /.contact-section-two */}
      </div>

      {/*
			=====================================================
				Footer
			=====================================================
			*/}
      <div className="footer-style-one theme-basic-footer position-relative">
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
      </div>
      {/* /.footer-style-one */}
    </>
  );
};

export default AgencyModern;