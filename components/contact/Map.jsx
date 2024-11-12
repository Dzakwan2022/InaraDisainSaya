import Image from 'next/image';

const Map = () => {
  return (
    <div className="map-area-one p-10" data-aos="fade-up">
    <div className="box-layout">
      <div  >
        <b><h1 className="text-center pb-2">Mitra Inara</h1></b>
      </div>
      <div className="mt-4">
        <div className="row justify-content-center text-center">
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <h3><b>MITRA SUMBER DANA</b></h3>
            <div className="d-flex flex-wrap justify-content-center">
              <Image
                src="/images/media/logo1.png"
                alt="Mitra Sumber Dana 1"
                width={200}
                height={100}
                className="m-2"
              />
              <Image
                src="/images/media/logo2.png"
                alt="Mitra Sumber Dana 2"
                width={200}
                height={100}
                className="m-2"
              />
              <Image
                src="/images/media/logo3.png"
                alt="Mitra Sumber Dana 3"
                width={250}
                height={100}
                className="m-2"
              />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <h3><b>MITRA KANTOR BAYAR</b></h3>
            <div className="d-flex flex-wrap justify-content-center">
              <Image
                src="/images/media/logo4.png"
                alt="Mitra Kantor Bayar 1"
                width={250}
                height={100}
                className="m-2"
              />
              <Image
                src="/images/media/logo5.png"
                alt="Mitra Kantor Bayar 2"
                width={150}
                height={100}
                className="m-2"
              />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <h3><b>MITRA SUPPORTING</b></h3>
            <div className="d-flex flex-wrap justify-content-center">
              <Image
                src="/images/media/logo6.png"
                alt="Mitra Supporting 1"
                width={190}
                height={100}
                className="m-2"
              />
              <Image
                src="/images/media/logo7.jpg"
                alt="Mitra Supporting 2"
                width={250}
                height={130}
                className="m-2"
              />
              <Image
                src="/images/media/logo9.png"
                alt="Mitra Supporting 3"
                width={260}
                height={90}
                className="m-2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row align-items-start mt-4">
        <div className="col-12">
          <div className="d-flex flex-column flex-md-row align-items-center">
            <Image
              src="/images/media/dukungan1.png"
              alt="Dukungan Teknologi"
              width={750}
              height={500}
              className="m-2"
            />
            <div className="ms-md-3 mt-3 mt-md-0">
              <h2><b>DUKUNGAN TEKNOLOGI</b></h2>
              <p>DENGAN DUKUNGAN TEKNOLOGI YANG DIKEMBANGKAN, INARA MAMPU BERSAING DALAM DUNIA BISNIS KHUSUSNYA PADA SEKTOR KREDIT PENSIUN.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  

  );
};

export default Map;
