import Seo from "../../components/common/Seo";
// import FancyBlock2 from "../../components/home-page/home-10/FancyBlock2";
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
      
      <Seo pageTitle="Koperasi Inara" />

      {/* <Header /> */}

      <section id="#">
        <Header />

        <HeroEdu />
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
				about section
			=====================================================
			*/}
     <section
  className="fancy-feature-one pt-170 lg-pt-140"
  id="about"
  data-aos="fade-right"
  data-aos-duration={800}
>
  <div className="container">
    <div className="row align-items-center">
      <div className="col-12">
        <div className="title-style-one text-center text-lg-start">
          <h3 className="main-title fw-bold tx-dark mb-4 mb-lg-0">
            PENJAJARAN<br /> PENGURUS
          </h3>
          <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center mb-4 mb-lg-0">
            <div className="d-flex flex-column align-items-center mx-3 my-2 my-lg-0">
              <Image
                src="/images/media/foto1.png"
                alt="hero"
                width={200}
                height={200}
              />
              <div className="text-center text-lg-start" style={{ marginTop: "20px" }}>
                <b><p>Iranto Johan</p></b>
              </div>
            </div>
            <div className="d-flex flex-column align-items-center mx-3 my-2 my-lg-0">
              <Image
                src="/images/media/foto2.png"
                alt="hero"
                width={200}
                height={200}
              />
              <div className="text-center text-lg-start" style={{ marginTop: "20px" }}>
                <b><p>Nita Suryaningsih</p></b>
              </div>
            </div>
            <div className="d-flex flex-column align-items-center mx-3 my-2 my-lg-0">
              <Image
                src="/images/media/foto3.png"
                alt="hero"
                width={200}
                height={200}
              />
              <div className="text-center text-lg-start" style={{ marginTop: "20px" }}>
                <b><p>Detty Kaniawati Setiana</p></b>
              </div>
            </div>
          </div>
          <h3 className="main-title fw-bold tx-dark mb-4 mb-lg-0">
            DEWAN<br /> PENGAWAS
          </h3>
          <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center mb-4 mb-lg-0">
            <div className="d-flex flex-column align-items-center mx-3 my-2 my-lg-0">
              <Image
                src="/images/media/foto4.png"
                alt="hero"
                width={200}
                height={200}
              />
              <div className="text-center text-lg-start" style={{ marginTop: "20px" }}>
                <b><p>Yanti Kusmianti</p></b>
              </div>
            </div>
            <div className="d-flex flex-column align-items-center mx-3 my-2 my-lg-0">
              <Image
                src="/images/media/foto5.png"
                alt="hero"
                width={200}
                height={200}
              />
              <div className="text-center text-lg-start" style={{ marginTop: "20px" }}>
                <b><p>Apriliani Kartika Fachri</p></b>
              </div>
            </div>
            <div className="d-flex flex-column align-items-center mx-3 my-2 my-lg-0">
              <Image
                src="/images/media/foto6.png"
                alt="hero"
                width={200}
                height={200}
              />
              <div className="text-center text-lg-start" style={{ marginTop: "20px" }}>
                <b><p>Shoffi Nurussami</p></b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



      {/*
			=====================================================
				clients section
			=====================================================
			*/}
 <section
  className="partner-section-two position-relative pt-170 lg-pt-14"
  id="clients"
  data-aos="fade-up"
  data-aos-duration={800}
>
  <div className="container">
    <div className="row align-items-center">
      <div className="col-xl-5 col-lg-6">
        <div className="title-style-four">
          <h2 className="main-title fw-500 tx-dark m0" style={{ color: "#a07d08" }}>
            Pengelola
          </h2>
        </div>
      </div>
      <div className="col-12">
        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center" style={{ marginTop: "30px" }}>
          <div className="d-flex flex-column align-items-center mx-3 my-2 my-lg-0">
            <Image
              src="/images/media/poto1.png"
              alt="hero"
              width={300}
              height={400}
            />
            <div className="text-center text-lg-start" style={{ marginTop: "20px" }}>
              <b><p>Dedi Komarudin</p></b>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center mx-3 my-2 my-lg-0">
            <Image
              src="/images/media/poto2.png"
              alt="hero"
              width={300}
              height={400}
            />
            <div className="text-center text-lg-start" style={{ marginTop: "20px" }}>
              <b><p>Tri Aditya Putra</p></b>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/*
			=====================================================
				contact section
			=====================================================
			*/}
      <section className=" pt-100 lg-pt-14" id="contact">
        <div className="contact-section-two text-start mt-80 lg-mt-60">
          <div className="row">
            <div className="col-lg-12">
              <div className="form-style-three md-mb-60">
                {/* <ContactForm2 /> */}
                <Map2 />
              </div>
              {/* /.form-style-three */}
            </div>
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
                © {new Date().getFullYear()}{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="www.koperasiinara.com"
                >
                  - KOPERASI JASA INSAN JAYA SEJAHTERA
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
