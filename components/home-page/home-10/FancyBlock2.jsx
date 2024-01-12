import Image from "next/image";
const FancyBlock2 = () => {
  const cardsData = [
    {
      icon: "/images/icon/icon_09.svg",
      title: "Transaksi ke Bank Lain",
      subtitle: "We do focus on quality not quantity.",
      delay: "100",
    },
    {
      icon: "/images/icon/icon_10.svg",
      title: "Notifikasi Transaksi",
      subtitle: "Expert ready to help you anytime.",
      delay: "200",
    },
    {
      icon: "/images/icon/icon_11.svg",
      title: "Transaksi Pembelian",
      subtitle: "All design compitable with mobile.",
      delay: "300",
    },
    {
      icon: "/images/icon/icon_11.svg",
      title: "Manajemen Transaksi",
      subtitle: "All design compitable with mobile.",
      delay: "300",
    },
    {
      icon: "/images/icon/icon_11.svg",
      title: "Transaksi Top Up Saldo",
      subtitle: "All design compitable with mobile.",
      delay: "300",
    },
    {
      icon: "/images/icon/icon_11.svg",
      title: "Disaster Recovery Center",
      subtitle: "All design compitable with mobile.",
      delay: "300",
    },
    {
      icon: "/images/icon/icon_10.svg",
      title: "Core Banking System",
      subtitle: "Expert ready to help you anytime.",
      delay: "200",
    },
    {
      icon: "/images/icon/icon_11.svg",
      title: "Agen dan Merchant",
      subtitle: "All design compitable with mobile.",
      delay: "300",
    },
  ];

  return (
    <>
      {cardsData.map((card, index) => (
        <div
          key={index}
          className="col-lg-3 col-md-4 col-sm-6 gap-30 "
          data-aos="fade-up"
          data-aos-delay={card.delay}
        >
          <div className="card-style-two mt-40">
            <div className="icon ">
              {/* <img src={card.icon} alt="" className="lazy-img mx-auto" /> */}
              <Image
                width={75}
                height={75}
                src={card.icon}
                alt="img"
                className="lazy-img mx-auto"
              />
            </div>
            <p className=" text-uppercase fs-14 opacity-75 mt-30 mb-10 text-center">
              {card.title}
            </p>
            {/* <h4 className="fw-500 m0">{card.subtitle}</h4> */}
          </div>
          {/* /.card-style-two */}
        </div>
      ))}
    </>
  );
};

export default FancyBlock2;
