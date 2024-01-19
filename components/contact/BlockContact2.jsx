import Image from "next/image";

const BlockContact2 = () => {
  const addressBlocks = [
    {
      icon: "/images/icon/icon_161.svg",
      title: "Alamat Kami",
      content: (
        <>
          JL. Sunda No 85, Bandung Jawa Barat, Bandung, Jawa Barat 40112, ID
        </>
      ),
    },
    {
      icon: "/images/icon/icon_162.svg",
      title: "Kontak",
      content: (
        <>
          Silahkan hubungi kami melalui nomor Whatsapp berikut
          
           <br />
          <a
            href="https://wa.me/+6289692586529"
            style={{
              color: "#a07d08",
            }}
            className="mobile tran3s fs-20 mt-10 mb-20  fw-medium"
            target="_blank"
          >
            {/* +62 812-2039-6797 */}
            +62 896-9258-6529
          </a>
        </>
      ),
    },
    {
      icon: "/images/icon/icon_163.svg",
      // title: "Live Support",
      title: "Helpdesk",
      content: (
        <>
          {/* Urgent go to live chat portal  */}
          Untuk pertanyaan yang lebih lanjut, silahkan hubungi kami melalui
          <br />
          <a href="mailto:info@gminovasi.com" className="webaddress">
            info@gminovasi.com
          </a>
        </>
      ),
    },
  ];

  return (
    <>
      {addressBlocks.map((block, index) => (
        <div className=" address-block-three d-flex mb-70 lg-mb-40" key={index}>
          <div className="icon">
            <Image width={30} height={30} src={block.icon} alt="icon" />
          </div>
          <div className="text">
            <h5 className="title">{block.title}</h5>
            <p>{block.content}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlockContact2;
