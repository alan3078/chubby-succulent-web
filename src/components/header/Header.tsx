import React from "react";
import "./Header.scss";

import Image2 from "../../assets/image2.jpg";
import Grid from "@mui/material/Grid";

const Header: React.FC<{}> = () => {
  return (
    <Grid
      className="header"
      container
      direction="row"
      alignItems="center"
      justifyContent="space-evenly"
    >
      <Grid item xs={10} md={5} className="header-text">
        Let the environment be green
      </Grid>
      <Grid item xs={10} md={5} className="header-speech-bubble">
        <div>🤎多肉植物｜肥嘟嘟控養多肉</div>
        <div>🦥佛系養肉人</div>
        <div>📩歡迎DM查詢</div>
      </Grid>
      <img src={Image2} alt="image2" />
    </Grid>
  );
};

export default Header;
