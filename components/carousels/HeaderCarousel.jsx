import React from "react";
import Image from "next/image";
const HeaderCarousel = () => {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="3000">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>Solusi Digitalisasi Keuangan</h1>
                <p>
                  adalah perusahaan Perseroran Terbatas yang bergerak dibidang
                  Teknologi Infomasi yang mendukung DIGITALISASI berbagai
                  Lembaga Kuangan (MICROFINANCE INSTITUTION-MFI) diantaranya
                  LKM/S, BPR/S, BMT, KSP, USP, LPD, LKD, Bumdes, BKK, LPN. PT
                  USSI berdiri sejak tahun 1994 dengan dukungan 9 subsidiary
                  company.
                </p>
              </div>
              <div className="col">
                <Image
                  src="/images/gallery/img_01.jpg"
                  alt="hero"
                  width={500}
                  height={500}
                />

              </div>
            </div>
          </div>
          {/* <img src="..." class="d-block w-100" alt="..."> */}
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>Solusi Digitalisasi </h1>
                <p>
                  adalah perusahaan Perseroran Terbatas yang bergerak dibidang
                  Teknologi Infomasi yang mendukung DIGITALISASI berbagai
                  Lembaga Kuangan (MICROFINANCE INSTITUTION-MFI) diantaranya
                  LKM/S, BPR/S, BMT, KSP, USP, LPD, LKD, Bumdes, BKK, LPN. PT
                  USSI berdiri sejak tahun 1994 dengan dukungan 9 subsidiary
                  company.
                </p>
              </div>
              <div className="col">
                <Image
                  src="/images/gallery/img_01.jpg"
                  alt="hero"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>

          {/* <img src="..." class="d-block w-100" alt="..."> */}
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>Digitalisasi Keuangan</h1>
                <p>
                  adalah perusahaan Perseroran Terbatas yang bergerak dibidang
                  Teknologi Infomasi yang mendukung DIGITALISASI berbagai
                  Lembaga Kuangan (MICROFINANCE INSTITUTION-MFI) diantaranya
                  LKM/S, BPR/S, BMT, KSP, USP, LPD, LKD, Bumdes, BKK, LPN. PT
                  USSI berdiri sejak tahun 1994 dengan dukungan 9 subsidiary
                  company.
                </p>
              </div>
              <div className="col">
                <Image
                  src="/images/gallery/img_01.jpg"
                  alt="hero"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
          {/* <img src="..." class="d-block w-100" alt="..."> */}
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default HeaderCarousel;
