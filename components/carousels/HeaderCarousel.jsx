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
              <h1 className="text-uppercase">PT Gunung Mas Inovasi</h1>
              <p>
                GMI Adalah Perusahaan IT berdomisili di kota bandung, kami hadir
                untuk memberikan solusi bagi perusahaan yang menginginkan
                kemajuan dan kestabilan sistem dalam usahanya. Dengan pengalaman
                kami sejak 2022 kami telah menangani berbagai perusahaan skala
                kecil, menengah ataupun besar, mulai dari Pemerintahan, BUMN
                serta perusahaan Swasta.
              </p>
            </div>
            <div className="col-md">
              <Image
                src="/images/media/8961414_4040089.svg"
                alt="hero"
                width={500}
                height={500}
                className=""
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="container">
          <div className="row flex align-items-center">
            <div className="col">
              <h1 className="text-uppercase">Inovasi GMI </h1>
              <p>
                Telah banyak inovasi yang kami buat serta produk- produk di
                bidang IT, Antara Lain : Aplikasi Koperasi, Microfinancing,
                Sistem Management Resiko, Sistem Properti, Sistem Digital
                Marketing, serta Sistem UKM. ataupun Customization sistem,
                sesuai dengan permintaan Klien.
              </p>
            </div>
            <div className="col-md">
              <Image
                src="/images/media/10838788_4536098.svg"
                alt="hero"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="container">
          <div className="row flex align-items-center">
            <div className="col">
              <h1 className="text-uppercase">Tim Profesional</h1>
              <p>
                GMI Memiliki Tim yang profesional di Bidang IT Yang sudah
                berpengalaman Sejak Tahun 2022, dimana kami berfokus kepada para
                mitra untuk mensolusikan masalah yang terjadi di perusahaan,
                baik integrasi ataupun solusi pembuatan sistem terkini untuk
                mempermudah proses yang dilakukan.
              </p>
            </div>
            <div className="col-md">
              <Image
                src="/images/media/25699262_7133186.svg"
                alt="hero"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
   
  );
};

export default HeaderCarousel;
