import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">Address Point</span>Johannesburg ,
        South Africa.
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">email me</span>{" "}
        <a href="mailto:steve@mail.com">dee@itsdeemab.com</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">text me</span>{" "}
        <a href="Tel: +216 21 184 010">+27 82 548 1481</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
