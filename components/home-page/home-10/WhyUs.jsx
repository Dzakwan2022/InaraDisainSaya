import Link from "next/link";
import Image from "next/image";
const OurAim = () => {
  const aimItems = [
    {
      text: "Dengan pengalaman & pengetahuan yang telah kami miliki dan beragam sistem yang telah kami kembangkan untuk memenuhi kebutuhan klien, bersama dengan dedikasi yang tinggi terhadap kualitas pekerjaan, kami siap mendukung penyelesaian cepat dan akurat terhadap setiap masalah yang muncul. Dengan dukungan yang kami berikan, harapannya agar setiap permasalahan di dalam operasional perusahaan dapat terselesaikan.",
      
    },
  ];

  

  return (
    <div className="row">
      <div className="col-md-6 order-md-first " data-aos="fade-right">
        <div className="img-meta d-inline-block position-relative ps-3 ps-lg-5 pb-10 md-mt-50 sm-mt-80">
        <Image
        style={{marginLeft:"-30px"}}
        src="/images/media/picture2.png"
        alt="logo"
        width={600}
        height={500}
        />
        </div>
        {/* /.img-meta */}
      </div>
      <div className="col-lg-6 col-md-7 ms-auto order-md-last">
        {aimItems.map((item, index) => (
          <div
            className="block-style-one"
            data-aos="fade-left"
            key={index}
          >
            <div className="title-style-one" style={{marginLeft:"-2px"}}>
              <div className="sc-title text-uppercase">{item.title}</div>
              <h4
                className="main-title fw-bold tx-dark m0"
                style={{ fontSize: "4rem" }}
              >
              Jaringan <p className="primary-gmi d-inline">Inara</p>
              </h4>
            </div>
            <div className="title">
            <Image
                style={{marginLeft:"-20px"}}
                src="/images/media/jaringan.png"
                alt="logo"
                width={600}
                height={350}
              />
            </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default OurAim;
