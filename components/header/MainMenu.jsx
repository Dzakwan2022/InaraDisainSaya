import Link from "next/link";
import {
  menuItems,
  pagesItems,
  portfolioItems,
  blogItems,
  contactItems,
  profileItems,
} from "../../data/menu";

import { useRouter } from "next/router";
import Image from "next/image";

const MainMenu = () => {
  const router = useRouter();
  // console.log(router.pathname)

  const isActive = (link) => {
    return router.pathname.replace("/[id]", "") === link.replace(/\/\d+$/, "");
  };

  return (
    <nav className="navbar navbar-expand-lg order-lg-2">
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
      </button>
      {/* End mobile collapse menu */}

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        </ul>
        <div className="mobile-content d-block d-lg-none">
          <div className="d-flex flex-column align-items-center justify-content-center mt-70">
            <Link
              href="https://wa.me/6289690565758?text=Selamat%20datang%20di%20INARA,%20Ada%20yang%20bisa%20kami%20bantu%20?"
              className="btn-primary-gmi fw-500 tran3s"
            >
              Kontak Kami
            </Link>
          </div>
        </div>
        {/* /.mobile-content */}
      </div>
    </nav>
  );
};

export default MainMenu;
