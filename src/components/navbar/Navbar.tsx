import React from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.jpg";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Navbar: React.FC<{}> = () => {
  return (
    <Grid
      container
      className="navbar"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Grid item className="logo-div">
        <img className="logo" src={logo} alt="Logo" />
        <Box sx={{ display: "flex" }}>
          <span className="chubby">Chubby </span>
          <span className="succulent">Succulent</span>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Navbar;
