import Image from "next/image";
import HeaderCarousel from "../../carousels/HeaderCarousel";

const Hero = () => {
  const imageItems = [
    {
      src: "/images/shape/shape_09.svg",
      alt: "shape",
      className: "shapes shape-one",
    },
    {
      src: "/images/shape/shape_10.svg",
      alt: "shape",
      className: "shapes shape-two",
    },
    {
      src: "/images/shape/shape_11.svg",
      alt: "shape",
      className: "lazy-img shapes shape-four",
    },
    {
      src: "/images/shape/shape_12.svg",
      alt: "shape",
      className: "lazy-img shapes shape-five",
    },
    {
      src: "/images/shape/shape_13.svg",
      alt: "shape",
      className: "lazy-img shapes shape-seven",
    },
  ];
  return (
    <div className="hero-banner-twelve-custom pt-225 pb-120 lg-pb-80 md-pt-200">
      <div className="container ">
        <div className="row position-relative">
          <div className="col">
            <HeaderCarousel />
          </div>
          <div className="col z-3 position-absolute top-100 start-50 translate-middle " style={{
            marginTop: "50px",
          }}>
            <div className="">
              <Image
                src="/images/shape/shape_09.svg"
                alt="shape"
                width={150}
                height={150}
                className="shapes shape-one"
              />
              <Image src="/images/shape/shape_54.svg" width={30} height={30} alt="shape" className=" " />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="text-wrapper" data-aos="fade-right">
              <h1 className="hero-heading fw-500 tx-dark">
                Start learning from our top experts.
              </h1>
              <p className="text-lg tx-dark mb-30 pt-35 lg-pt-20 lg-mb-20">
                Unlock your potential with unlimited short courses &amp; earn
                certificates to boost your CV.
              </p>
              <div className="d-lg-flex align-items-center">
                <a
                  href="#"
                  className="btn-twentyFour fw-500 position-relative d-inline-flex align-items-center me-5 mt-30"
                >
                  <span>Explore all Courses</span>
                  <img
                    src="/images/icon/icon_123.svg"
                    alt="icon"
                    className="ms-3"
                  />
                </a>
                <div className="btn-eighteen position-relative d-inline-block tx-dark mt-15 md-mt-20">
                  <a href="#" className="fw-500 tran3s">
                    Join for Free Now!
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-xxl-6 col-xl-5 col-md-6 ms-auto text-end"
            data-aos="fade-left"
          >
            <div className="image-holder zn2 d-inline-block position-relative sm-mt-60">
              <img
                src="/images/assets/bg-12.png"
                alt="img"
                className="lazy-img"
              />
              <div className="media-img">
                <Image
                  width={490}
                  height={542}
                  layout="responsive"
                  src="/images/media/img_58.jpg"
                  alt="img"
                  className="lazy-img"
                />
              </div>

              <div
                className="card-style card-one d-flex flex-column justify-content-center align-items-center"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <h4>120k+</h4>
                <p>Online Videos</p>
              </div>

              <div
                className="card-style card-two d-flex flex-column justify-content-center align-items-center"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <h4>200+</h4>
                <p>Categories</p>
              </div>

              <div
                className="card-style card-three d-flex flex-column justify-content-center align-items-center"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <h5>80k+ Students</h5>
                <div className="avatar d-flex align-items-center">
                  <img src="/images/media/img_59.jpg" alt="" />
                  <img src="/images/media/img_60.jpg" alt="" />
                  <img src="/images/media/img_61.jpg" alt="" />
                  <img src="/images/media/img_62.jpg" alt="" />
                  <span className="avatar_image avatar_fallback">
                    <i className="bi bi-arrow-right-short" />
                  </span>
                </div>
              </div>

              <img
                src="/images/shape/shape_146.svg"
                alt="shape"
                className="shapes shape-one lazy-img"
              />
              <img
                src="/images/shape/shape_147.svg"
                alt="shape"
                className="shapes shape-two lazy-img"
              />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
