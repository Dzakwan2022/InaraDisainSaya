import Link from "next/link";
import Image from "next/image";
const OurAim = () => {
  const aimItems = [
    {
      text: "Dengan pengalaman yang kami miliki, dan berbagai sistem yang telah kami buat untuk kebutuhan klien, serta komitmen Purna jual yang tinggi, untuk mensupport setiap masalah yang muncul dalam proses operasional dengan cepat dan tepat. sehingga harapannya dengan support yang kami berikan, operasional yang terjadi disetiap perusahaan tidak terganggu.",
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
        "Saat Anda beralih ke ranah digital, mempermudah transformasi bisnis menjadi lebih lancar, cepat, dan efisien dapat dicapai dengan memanfaatkan aplikasi perangkat lunak produk GMI. Platform perangkat lunak GMI memberikan kemudahan, integrasi yang sederhana, dan fleksibilitas dalam pengembangan bisnis Anda. Sistem ini telah matang dan sesuai dengan perkembangan teknologi yang terus berlanjut.",
    },
    {
      question: "02 - Kompetensi Dan Komitmen",
      answer:
        "Seluruh rangkaian produk dan layanan yang diproduksi oleh GMI Group selalu difokuskan pada pengembangan produk dan layanan yang mendukung penguatan industri lembaga keuangan mikro. Produk utamanya adalah Integrated microBanking System (IBS), yang menjadi dasar operasional bagi lembaga keuangan mikro. Setiap seri produk terbaru merupakan penyempurnaan dari seri sebelumnya, mencerminkan komitmen yang berkelanjutan terhadap 'PENINGKATAN BERKALA' atau 'CONTINUAL IMPROVEMENT'.",
    },
    {
      question: "03 - Purna Jual",
      answer:
        "Untuk meningkatkan layanan purna jual, kami telah menetapkan jaringan pelayanan di 12 kota utama di seluruh Indonesia. Langkah ini tidak hanya didukung oleh ekspansi geografis, tetapi juga disertai dengan peningkatan kapasitas sumber daya manusia (SDM), menciptakan jaringan yang tidak hanya kuat dalam jumlah, tetapi juga memiliki kualitas yang unggul. Upaya peningkatan kualitas layanan juga dilakukan melalui penyempurnaan produk, menjadikannya lebih mudah untuk melacak kerusakan atau kesalahan (troubleshooting), melakukan backup sistem, dan memulihkan sistem dari kegagalan (system crash recovery).",
    },
    {
      question: "04 - Kualitas Produk",
      answer:
        "Dengan melanjutkan kegiatan riset dan pengembangan secara berkesinambungan, GMI berkomitmen untuk menghasilkan produk-produk yang memiliki standar dunia. Berbagai metode dan teknik pengembangan perangkat lunak diterapkan secara konsisten, seperti Object Oriented Programming, Iterative Process, UML (Unified Modelling Language), SQL Database System, Client-Server Architecture, Three-Tier Architecture, Component-Based System Development, Switching Technology berbasis protokol ISO8583, XML, dan protokol propietary, serta ATM (Automatic Teller Machine) berbasis protokol NDC dan EDC (Electronic Data Capture).",
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
            <div key={index}>
              <img src={item.src} alt={item.alt} className={item.className} />
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default OurAim;
