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
      <div className="col-xl-6 col-lg-2 footer-intro mb-40">
        <div className="logo">
          <Link href="/">
            <Image
              src="/images/logo/logo-gmi.png"
              alt=""
              width={400}
              height={110}
              data-aos="fade-up"
            />
          </Link>
        </div>
        <Image
          src="/images/shape/shape_24.svg"
          alt="shape"
          className="mt-60 d-none d-lg-block"
          width={100}
          height={100}
        />
      </div>
      {/* End .col-xl-3 */}

      {footerLinks.map((link, index) => (
        <div key={index} className={link.classes}>
          <h5 className="footer-title tx-dark fw-500">{link.title}</h5>
          <ul className="footer-nav-link style-none">
            {link.links.map((linkItem, index) => (
              <li key={index}>
                <Link href={linkItem.href}>{linkItem.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {/* End menu data */}

      <div className="col-xl-6 col-sm-4 mb-30" data-aos="fade-left">
        <h5 className="footer-title tx-dark fw-500">Alamat Kami</h5>
        <p className="fs-17">
          Jl. Ahmad Yani No 651 (Apartment Gateway Cicadas LG 11), Bandung Jawa Barat, Bandung, Jawa Barat 40121, ID
        </p>
        <a href="mailto:info@gminovasi.com" className="email tran3s fs-17">
          info@gminovasi.com
        </a>
        <br />
        <a
          href="https://wa.me/+6289692586529"
          style={{
            color: "#a07d08",
          }}
          className="mobile tran3s  fs-20 mt-20 mb-30"
          target="_blank"
        >
          {/* +62 812-2039-6797 */}
          +62 896-9258-6529
        </a>

        <Social />
      </div>
    </div>
  );
};

export default Footer;
