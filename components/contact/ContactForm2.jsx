import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm2 = () => {
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);

  const handleRecaptchaVerify = (response) => {
    // Callback yang dipanggil saat reCAPTCHA diverifikasi
    setIsRecaptchaVerified(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pastikan reCAPTCHA telah diverifikasi sebelum melanjutkan
    if (isRecaptchaVerified) {
      console.log("Formulir dikirim!");
    } else {
      console.log("Verifikasi reCAPTCHA gagal.");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="messages" />
      <div className="row controls">
        <div className="col-12">
          <div className="input-group-meta form-group mb-35">
            <label className="d-block" htmlFor="nama">
              Nama*
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              required="required"
              id="nama"
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta form-group mb-40">
            <label className="d-block" htmlFor="email">
              Email*
            </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              required="required"
              id="email"

              // placeholder style
              // style={{
              //   backgroundImage: "url(/images/icon/icon_163.svg)",
              //   backgroundRepeat: "no-repeat",
              //   backgroundPosition: "left 10px center",
              //   backgroundSize: "20px",
              //   paddingLeft: "40px",
              // }}

            />
            <div className="help-block with-errors" />
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta form-group mb-30">
            <textarea
              placeholder="Pesan*"
              name="Your Message"
              required="required"
              defaultValue={""}
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        <ReCAPTCHA
        sitekey="6Lfc9lApAAAAAP5kL-dDlJhaCIz6zQptk5QDli2P"
        onChange={handleRecaptchaVerify}
      />
        <div className="col-12">
          <button className="btn-one fw-500 w-100 text-uppercase fs-14 d-block" type="submit" disabled={!isRecaptchaVerified}>
            Kirim
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm2;
