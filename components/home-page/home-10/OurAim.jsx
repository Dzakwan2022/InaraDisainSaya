import Link from "next/link";
import Image from "next/image";
const OurAim = () => {
  const aimItems = [
    {
      text: "Dengan total penjualan dan implementasi di ribuan Lembaga Keuangan dan Perbankan Mikro di seluruh Indonesia, menjadikan GMI sebagai satu-satunya provider sistem informasi yang paling berpengalaman dan paling memahami berbagai seluk beluk permasalahan implementasi sistem informasi di lembaga keuangan dan mikro. Produk-produk kami juga telah tersebar diseluruh Indonesia mulai dari Nangro Aceh Darussalam sampai Papua",
      list: [
        "Amazing communication.",
        "Best trending designing experience.",
        "Email & Live chat.",
      ],
      link: "/pages-menu/about-us-v1",
    },
  ];

  const accordionData = [
    {
      question: "01 - Pengalaman",
      answer:
        "Kemudahan akan transformasi bisnis anda ke dunia digital menjadi lebih mudah, cepat dan efisien dengan mengggunakan aplikasi software produk GMI. Optimal, mudah di integrasikan dan fleksibel dalam pengembangan bisnis menggunakan platform software GMI. Kematangan sistem yang relevan dengan perkembangan teknologi yang berkelanjutan.",
    },
    {
      question: "02 - Kompetensi Dan Komitmen",
      answer:
        "Semua produk dan layanan yang dikembangkan oleh GMI Group, selalu berorientasi kepada produk dan layanan yang mendukung penguatan industri lembaga keuangan mikro. Produk utama adalah Integrated microBanking System (IBS), yang menjadi basic product untuk operasional lembaga keuangan mikro. Setgap broduk seri terbaru selalu merupakan penyempurnaan dari seri–seri sebelumnya. Ini adalah bukti komitmen sekaligus juga ‘CONTINUAL IMPROVEMENT’.",
    },
    {
      question: "03 - Purna Jual",
      answer:
        "Untuk memperykuat layanan purna jual, telah terbentuk jaringan pelayanan di 12 kota besar di seluruh Indonesia, disamping juga diimbangi dan dibarengi dengan penguatan kapasitas SDM sehingga terbentuk jaringan yang bukan hanya kuat secara kuantitas tapi juga berkualitas.Upaya peningkatan kualitas pelayanan juga dilakukan melalui penyempurnaan produk sehingga menjadi semakin mudah dalam pelacakan kerusakan / kesalahan (troubleshooting), backup system dan pemulihan sistem (system crash recovery).",
    },
    {
      question: "04 - Kualitas Produk",
      answer:
        "Melalui kegiatan riset dan pengembangan yang terus-menerus, GMI berusaha memberikan produk-produk berkelas dunia (world class product). Berbagai metode dan teknik pengembangan software secara konsisten diterapkan: Object Oriented Programming, Iterative Process, UML (Unified Modelling Language), SQL Database System, Client-Server Architecture, Three-Tier Architecture, Component-Based System Development, Switching Technology berbasis protocol ISO8583, XML dan propietary protocol, ATM (Automatic Teller Machine) berbasis protocol NDC, EDC (Electronic Data Capture).",
    },
  ];

  const imageItems = [
    { src: "/images/media/Feb.jpg", alt: "shape" },
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

  const cardItem = {
    imgSrc: "/images/icon/icon_06.svg",
    name: "- Rashed Ka",
    position: "CEO",
    text: "We aim to answer any query in less than",
  };

  return (
    <div className="row">
      <div className="col-lg-5 col-md-6 ms-auto order-md-last">
        {aimItems.map((item, index) => (
          <div
            className="block-style-one pt-35"
            data-aos="fade-left"
            key={index}
          >
            <div className="title-style-one">
              <div className="sc-title text-uppercase">{item.title}</div>
              <h4
                className="main-title fw-bold tx-dark m0"
                style={{ fontSize: "2rem" }}
              >
                Mengapa Harus <p className="primary-gmi d-inline">Pilih GMI</p>
                ?
              </h4>
            </div>
            <p className="text-md tx-dark pt-20 pb-15 lg-pb-5">{item.text}</p>
            {/* <ul className="style-none list-item fs-18">
              {item.list.map((listItem, index) => (
                <li key={index}>{listItem}</li>
              ))}
            </ul> */}
            <div
              className="accordion accordion-flush md-mt-60"
              id="accordionOne"
            >
              {accordionData.map((item, index) => (
                <div className="accordion-item" key={index}>
                  <div className="accordion-header" id={"heading" + index}>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={"#collapse" + index}
                      aria-expanded={index === 1 ? "true" : "false"}
                      aria-controls={"collapse" + index}
                    >
                      {item.question}
                    </button>
                  </div>
                  <div
                    id={"collapse" + index}
                    className={`accordion-collapse collapse${
                      index === 0 ? " show" : ""
                    }`}
                    aria-labelledby={"heading" + index}
                    data-bs-parent="#accordionOne"
                  >
                    <div className="accordion-body">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* <Link
          href="/pages-menu/about-us-v1"
          className="more-btn tran3s fw-500 fs-18"
          data-aos="fade-left"
        >
          Discover More <i className="bi bi-arrow-right"></i>
        </Link> */}
      </div>
      {/* End .col */}

      <div className="col-md-6 order-md-first " data-aos="fade-right">
        <div className="img-meta d-inline-block position-relative ps-3 ps-lg-5 pb-10 md-mt-50 sm-mt-80">
          {imageItems.map((item, index) => (
            <>
              <img
                key={index}
                src={item.src}
                alt={item.alt}
                className={item.className}
              />
              {/* <Image 
            src={item.src}
            alt={item.alt}
            width={500}
            height={500}
            /> */}
            </>
          ))}

          {/* <div className="card-one" data-aos="fade-up" data-aos-delay="200">
            <div className="icon d-flex align-items-center justify-content-center rounded-circle">
              <img src={cardItem.imgSrc} alt="shape" className="lazy-img" />
            </div>
            <div className="name fs-18 fw-500 tx-dark mb-10">
              - {cardItem.name},{" "}
              <span className="opacity-50">{cardItem.position}</span>
            </div>
            <p className="fs-18 m0">{cardItem.text}</p>
          </div> */}
          {/* /.card-one */}
        </div>
        {/* /.img-meta */}
      </div>
    </div>
  );
};

export default OurAim;
