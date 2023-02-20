import { Grid, Typography } from "@mui/material";
import sheep from "../../assets/sheep.png";
import hubs from "./../../assets/hubs.png";
import raccoon from "./../../assets/raccoon.png";
import "./about-us-section.css";

export const AboutUs = () => {
  return (
    <section className="container" id="sectionUs">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={3}
        direction="row"
        wrap="wrap"
      >
        <Grid item xs={12} sm={12}>
          <Typography variant="h4">Designed by players for players!</Typography>
        </Grid>

        <Grid className="img-container" item xs={12} sm={4}>
          <a href="https://github.com/Owieczek" target={"_blank"}>
            <img title="sheep" src={sheep} />
          </a>
        </Grid>
        <Grid className="img-container" item xs={12} sm={4}>
          <a href="https://github.com/t1psyy" target={"_blank"}>
            <img title="raccoon" src={raccoon} />
          </a>
        </Grid>
        <Grid className="img-container" item xs={12} sm={4}>
          <a href="https://github.com/lewandowskihubert" target={"_blank"}>
            <img title="hubs" src={hubs} />
          </a>
        </Grid>
      </Grid>
    </section>
  );
};
