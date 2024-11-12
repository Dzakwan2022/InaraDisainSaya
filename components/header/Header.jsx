import { useEffect, useState } from "react";
import MainMenu from "./MainMenu";
import Link from "next/link";
import Image from "next/image";

const Header3 = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <header
  className={`theme-main-menu sticky-menu theme-menu-one ${
    navbar ? "fixed" : ""
  }`}
>
  <div className="inner-content position-relative">
    <div className="d-flex align-items-center justify-content-between">
      <div className="logo order-lg-0 d-flex align-items-center">
        <Link href="/" className="d-block">
          <Image
            src="/images/logo/inara.png"
            alt="logo"
            width={100}
            height={80}
          />
        </Link>
        <div style={{ marginLeft: "20px" }}>
          <h2 style={{ fontSize: "1rem", lineHeight: "1.5", paddingTop: "20px" }}>
            <b>KOPERASI JASA <br/>INSAN JAYA<br /> SEJAHTERA</b>
          </h2>
        </div>
      </div>
      <div className="right-widget d-flex align-items-center order-lg-3 ms-xxl-5 ms-lg-3">
        <Link
          href="https://wa.me/+6288214031683"
          className="contact-btn-one fs-16 fw-500 text-white tran3s d-none d-lg-block"
        >
          Kontak Kami
        </Link>
      </div>
      <MainMenu />
    </div>
  </div>
</header>

  
  );
};

export default Header3;
