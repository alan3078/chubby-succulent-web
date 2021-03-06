import React from "react";
import "./ContentContainer.scss";

import Image1 from "../../assets/image1.jpg";
import Image2 from "../../assets/image2.jpg";
import Grid from "@mui/material/Grid";

const ContentContainer: React.FC<{}> = () => {
  return (
    <div className="content-container">
      <Grid
        className="header"
        container
        direction="row"
        alignItems="center"
        justifyContent="space-evenly"
      >
        <Grid item xs={10} md={5} className="header-speech-bubble">
          <div>ð¤å¤èæ¤ç©ï½è¥ååæ§é¤å¤è</div>
          <div>ð¦¥ä½ç³»é¤èäºº</div>
          <div>ð©æ­¡è¿DMæ¥è©¢</div>
        </Grid>
        <img src={Image2} alt="image2" />
      </Grid>
      <Grid
        className="header"
        container
        direction="row"
        alignItems="center"
        justifyContent="space-evenly"
      >
        <img src={Image1} alt="image1" />
        <Grid item xs={10} md={5} className="header-speech-bubble">
          <div>èè¯æä¸å°å°çæçé·ä¸­ï¼éå¸¸å¯æð¤</div>
          <div>â ï¸çç«¥å­ææ¶ç±ï¼è¨å¾ä¿æéé¢¨ç°å¢é¤è­·ï½</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContentContainer;
