import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const HeaderCarousel = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      // pagination={{
      //   clickable: true,
      // }}
      pagination={false}
      // navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper footer-style-one"
    >
      <SwiperSlide>
        <div className="container">
          <div className="row flex align-items-center justify-content-between ">
          <div className="col">
              <h1 className="text-uppercase">Introduction</h1>
              <div style={{borderRadius:"10px"}}>
              <h4><b><p>Company Overview</p></b></h4>
              </div>
              <p>
              INARA Merupakan Koperasi Jasa Yang berdomisili di Kota Bandung. Bisnis utama INARA saat ini sesuai dengan  kapabilitas yang dimiliki  fokus menjalankan kegiatan usaha jasa penerusan pembiayaan kepada para pensiunan baik pensiun PNS maupun ABRI/POLRI bekerjasama dengan Lembaga Perbankan dan Non Bank . Hal ini didasari adanya peluang yang besar terhadap kebutuhan pembiayaan modal kerja bagi para pensiunan karena Bagi para pensiunan baik pensiun PNS maupun ABRI/POLRI memasuki pensiun bukan berarti berhenti beraktivitas namun justeru setelah pensiun dimanfaatkan untuk memulai kegiatan usaha baru atau mengembangkan usaha yang tertunda karena selama berdinas aktif dilarang melakukan kegiatan bisnis.
              </p>
            </div>
          <div className="col-md " style={{marginLeft:"180px"}}>
              <Image
                src="/images/media/picture1.png"
                alt="hero"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
   
  );
};

export default HeaderCarousel;
