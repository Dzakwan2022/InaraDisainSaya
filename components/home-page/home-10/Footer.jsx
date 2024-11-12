import Link from "next/link";
import Social from "./Social";
import Image from "next/image";

const Footer = () => {
  const footerLinks = [
    // {
    //   title: "Links",
    //   links: [
    //     { label: "Home", href: "/" },
    //     { label: "Pricing", href: "/pages-menu/pricing" },
    //     { label: "About us", href: "/pages-menu/about-us-v1" },
    //     { label: "Service", href: "/pages-menu/service-v1" },
    //     { label: "Blog", href: "/blog/blog-v1" },
    //   ],
    //   classes: "col-lg-2 col-sm-4 ms-auto mb-30",
    // },
    // {
    //   title: "Help & Support",
    //   links: [
    //     { label: "FAQ", href: "/pages-menu/faq" },
    //     { label: "Blog", href: "/blog/blog-v1" },
    //     { label: "Contact Us", href: "/contact" },
    //     { label: "Support", href: "/contact" },
    //   ],
    //   classes: "col-lg-3 col-sm-4 mb-30",
    // },
  ];

  return (
    <div className="row">
      <div className="col-lg-6 col-md-12 footer-intro mb-40 text-center text-lg-start">
        <div className="logo">
          <Image
            src="/images/media/LogoInara.png"
            alt="shape"
            className="mt-60 d-none d-lg-block"
            width={250}
            height={250}
          />
        </div>
      </div>
      {/* End .col-lg-6 */}

      <div className="col-lg-6 col-md-12 mb-30" data-aos="fade-left">
        <h5 className="footer-title tx-dark text-center text-lg-start">KOPERASI JASA INSAN JAYA SEJAHTERA</h5>
        <div className="text-center text-lg-start">
          <h4>Alamat :</h4>
          <p className="fs-17">
            JL. SELATAN 8 NO.1, Desa/KeIurahan Jatimekar, Kec. Jatiasih,<br/>
            Kota Bekasi, Provinsi Jawa Barat,<br/>
             17422
          </p>
          <br />
          <h4>Nomor Telepon :</h4>
          <a
            href="https://wa.me/+6288214031683"
            style={{ color: "green" }}
            className="mobile tran3s fs-20 mt-20 mb-30 d-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            0882-1403-1683
          </a>
          <h4>Email :</h4>
          <a
            href="mailto:halo.inara@koperasiinara.com"
            style={{ color: "green" }}
            className="d-block"
          >
            halo.inara@koperasiinara.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
