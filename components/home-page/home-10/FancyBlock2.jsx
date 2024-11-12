import Image from "next/image";
const FancyBlock2 = () => {

  return (
    <>
      {cardsData.map((card, index) => (
        <div
          key={index}
          className="col-lg-3 col-md-4 col-sm-6 col-6 gap-30 "
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
