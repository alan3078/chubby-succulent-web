import React from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.jpg";
import Grid from "@mui/material/Grid";

const Navbar: React.FC<{}> = () => {
  return (
    <Grid className="navbar" container direction="row" alignItems="center">
      <div className="logo-div">
        <img className="logo" src={logo} alt="Logo" />
        <div>
          <div>
            <span className="chubby">Chubby</span>
            <span className="succulent">Succulent</span>
          </div>
          <div>
            <a href="https://www.instagram.com/chubbysucculent/">
              https://www.instagram.com/chubbysucculent/
            </a>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default Navbar;
