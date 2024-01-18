import { useState } from "react";
import "animate.css";
import Image from "next/image";

const monthlyPricingPlans = [
    {
      id: "PELAYANAN",
      features: [
        "PEMBUATAN APLIKASI MOBILE",
        "PEMBUATAN APLIKASI WEBSITE",
        "PEMBUATAN APLIKASI DESKTOP",
        "PEMBUATAN SDK",
        "INTEGRATOR",
        "DATA CENTER",
      ],
    }
  ];
  const yearlyPricingPlans = [
    {
      id: "PRODUK",
      features: [
        "Sistem Pengajuan KRESUN",
        "Sistem Affiliate Marketplace",
        "Point Of Sale",
        "Sistem Rekonsiliasi"
      ],
    },
  ];
  
  const Tabs = () => {
  const [activeTab, setActiveTab] = useState('month');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    
  };
    return (
      <>
        <ul
          className="nav nav-pills justify-content-center fw-bold border-0 mt-2 mb-15"
          data-aos="fade-up"
          role="tablist"

        >
          <li className="nav-item" role="presentation">
           
            <button
    
            className={`nav-link ${activeTab === 'month' ? 'active shadow bg-transparent text-dark' : 'bg-transparent text-dark'}`}
            onClick={() => handleTabClick('month')}
              data-bs-toggle="tab"
              data-bs-target="#month"
              type="button"
              role="tab"
            >
            <Image className="img-thumbnail bg-transparent border-0 mx-auto" height={90} width={90} alt="icon-service" src="/images/icon/icon_104.svg"/ >

                PELAYANAN
            </button>
          </li>
          <ul>
          </ul>
          <ul>           
          </ul>
          <li className="nav-item text-center" role="presentation">
            <button
              className={`nav-link ${activeTab === 'year' ? 'active shadow bg-transparent text-dark' : 'bg-transparent text-dark'}`}
              onClick={() => handleTabClick('year')}
              data-bs-toggle="tab"
              data-bs-target="#year"
              type="button"
              role="tab"
            >
                 <Image className="img-thumbnail bg-transparent border-0 mx-auto" height={90} width={90} alt="icon-product" src="/images/icon/icon_105.svg"/>
              PRODUK
            </button>
          </li>
        </ul>
  
        <div className=" mt-5 lg-mt-50 col-12 center" >
          <div className="tab-content">
            <div className="tab-pane card shadow show border-0 active" id="month" data-aos="zoom-in-up">
              <div className={`row ${activeTab === 'month' ? 'animate__animated animate__zoomIn' : 'animate__animated animate__fadeOut'}`}>
                <div className="col-xxl-6 m-auto">
                  <div className="row gx-xxl-5 align-items-center pricing-table-area-two">
                    {monthlyPricingPlans.map((plan) => (
                      <div key={plan.id} className="col-lg-12 col-sm-6">
                        <div
                          className={`pr-column mt-5 ${
                            plan.active ? "active" : ""
                          }`}
                        >
                          <div className="pr-header pb-2 mb-5">
                            <div className="text-start fw-300">
                              <h4 style={{color: "#b38433"}}>
                              {plan.id}
                              </h4>
                            </div>
                            {/* <div className="plan tx-dark">{plan.plan}</div> */}
                          </div>
                          <div className="pr-body">
                            <ul className="style-none  text-start ">
                              {plan.features.map((feature, index) => (
                                <li  key={index} >{feature}</li>
                              ))}
                            </ul>
                          </div>
                          {/* <div className="pr-footer pt-55 lg-pt-30">
                            <div className="trial-text opacity-75 mb-20">
                              Up to 7 user + 1.99 per user
                            </div>
                            <a
                              href="#"
                              className="signup-btn fw-500 tran3s w-100"
                            >
                              Sign up
                            </a>
                          </div> */}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-xxl-6 m-auto">
                  <Image  width={550} height={375} alt="ilustasi-service" src="/images/icon/25699262_7133186.svg"/>
                </div>
              </div>
            </div>
            {/* End month */}
            <div className="tab-pane card shadow show border-0 rounded" id="year" data-aos="zome-in" >
              <div className={`row ${activeTab === 'year' ? 'animate__animated animate__zoomIn' : 'animate__animated animate__fadeOut'}`} >
                <div className="col-xxl-6 m-auto">
                  <div className="row gx-xxl-5 align-items-center pricing-table-area-two">
                    {yearlyPricingPlans.map((plan) => (
                      <div key={plan.id} className="col-lg-12 col-sm-6">
                        <div
                          className={`pr-column mt-4 ${
                            plan.active ? "active" : ""
                          }`}
                        >
                          <div className="pr-header pb-3 mb-4">
                            <div className="text-start fw-300">
                              <h4 style={{color: "#b38433"}}>
                              {plan.id}

                              </h4>
                            </div>
                            <div className="plan tx-dark">{plan.plan}</div>
                          </div>
                          <div className="pr-body">
                            <ul className="style-none  text-start" >
                              {plan.features.map((feature, index) => (
                                <li key={index} >{feature}</li>
                              ))}
                            </ul>
                            
                          </div>
                          {/* <div className="pr-footer pt-55 lg-pt-30">
                            <div className="trial-text opacity-75 mb-20">
                              Up to 7 user + 1.99 per user
                            </div>
                            <a
                              href="#"
                              className="signup-btn fw-500 tran3s w-100"
                            >
                              Sign up
                            </a>
                          </div> */}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-xxl-6 m-auto">
                  <Image height={375} width={550} alt="ilustrasi-product" src="/images/icon/8961414_4040089.svg"/>
                </div>
              </div>
            </div>
            {/* year */}
          </div>
        </div>
      </>
    );
  };
  
  export default Tabs;
  