import { Grid, Typography } from "@mui/material";
import sheep from "../../assets/sheep.png";
import { Item, StyledImg, StyledSection } from "../../styled/about-us/about-us";
import hubs from "./../../assets/hubs.png";
import raccoon from "./../../assets/raccoon.png";

export const AboutUs = () => {
  return (
    <StyledSection id="sectionUs">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={3}
        direction="row"
        wrap="wrap"
      >
        <Grid item xs={1} sm={12}>
          <Typography
            justifyContent="center"
            alignItems="center"
            display="flex"
            variant="h2"
            sx={{ fontWeight: "bold" }}
          >
            Designed by players for players!
          </Typography>
        </Grid>

        <Grid item xs={12} sm={2.5}>
          <Item>
            <a href="https://github.com/Owieczek" target={"_blank"}>
              <StyledImg title="sheep" src={sheep} />
            </a>
          </Item>
        </Grid>
        <Grid item xs={12} sm={2.5}>
          <Item>
            <a href="https://github.com/t1psyy" target={"_blank"}>
              <StyledImg title="raccoon" src={raccoon} />
            </a>
          </Item>
        </Grid>
        <Grid item xs={12} sm={2.5}>
          <Item>
            <a href="https://github.com/lewandowskihubert" target={"_blank"}>
              <StyledImg title="hubs" src={hubs} />
            </a>
          </Item>
        </Grid>
      </Grid>
    </StyledSection>
  );
};
