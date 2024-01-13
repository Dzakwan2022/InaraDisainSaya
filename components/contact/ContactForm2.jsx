import React from "react";

const ContactForm2 = () => {
  return (
    <form action="#">
      <div className="messages" />
      <div className="row controls">
        <div className="col-12">
          <div className="input-group-meta form-group mb-35">
            <label className="d-block" htmlFor>
              Nama*
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              required="required"
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta form-group mb-40">
            <label className="d-block" htmlFor>
              Email*
            </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              required="required"

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
        <div className="col-12">
          <button className="btn-one fw-500 w-100 text-uppercase fs-14 d-block">
            Kirim
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm2;
