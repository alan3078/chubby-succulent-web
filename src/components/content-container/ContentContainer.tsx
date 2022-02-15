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
          <div>🤎多肉植物｜肥嘟嘟控養多肉</div>
          <div>🦥佛系養肉人</div>
          <div>📩歡迎DM查詢</div>
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
          <div>葉芯有一對小熊掌生長中，非常可愛🤎</div>
          <div>⚠️熊童子怕悶熱，記得保持通風環境養護～</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContentContainer;
