import React from "react";
import "./Footer.scss";
import Instagram from "../../assets/instagram-logo.jpg";

const Footer: React.FC<{}> = () => {
  return (
    <div className="footer">
      <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/chubbysucculent/">
        <img src={Instagram} alt="Instagram" />
      </a>
      <span>
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/chubbysucculent/">
          @ 2022 Chubby Succulent.
        </a>
      </span>
    </div>
  );
};

export default Footer;
