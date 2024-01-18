import Image from "next/image";

const LogoGroup = () => {
  const logoImages = [
    { name: "rifi-1.png", alt: "shape", width: 110, height: 60},
    { name: "kopjas-dana-1.png", alt: "shape", width: 100, height: 55},
    { name: "grahadi-1.png", alt: "shape", width: 80, height: 70},
    { name: "logo-ssb-1.png", alt: "shape", width: 100, height: 55}
    // "Plogo-7.png", 
    // "Plogo-8.png",
    // "Plogo-9.png",
    // "Plogo-10.png",
    // "Plogo-11.png",
    // "Plogo-12.png",
    // "Plogo-13.png",
    // "Plogo-11.png",
    // "Plogo-7.png",

  ];

  return (
    <>
      {logoImages.map((item, index) => (
        <div
          className="logo d-flex align-items-center justify-content-center "
          key={index}
        >
          <Image src={`/images/logo/${item.name}`} alt="logo" width={item.width} height={item.height} className="lazy-img" />
        </div>
      ))}
    </>
  );
};

export default LogoGroup;
