import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import logo from "../assets/logo2.png";

import {
  HomePageLogoContainer,
  HomePageSpan,
} from "../styled/homepage/homepage-content";

export const HomePage = () => {
  const handleScrollToSection = (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
    id: string
  ) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "80px",
        marginLeft: "auto",
        maxWidth: "100%",
        minHeight: "100vh",
      }}
    >
      <Grid item xs={12} md={6}>
        <Typography align="center" variant="h2" gutterBottom>
          Welcome to the ultimate destination for all things gaming!
        </Typography>
        <Typography align="center" variant="h6" gutterBottom>
          Get the latest news, top rankings, and game recommendations. <br></br>{" "}
          Join us now and take your gaming to the next level!
        </Typography>
        <HomePageSpan>
          <Button
            href="#sectionNews"
            onClick={(event) => handleScrollToSection(event, "sectionNews")}
            variant="contained"
            size="large"
            sx={{
              borderRadius: "30px",
              marginTop: "30px",
              marginRight: "10px",
            }}
          >
            Check News
          </Button>
          <Button
            href="#sectionUs"
            onClick={(event) => handleScrollToSection(event, "sectionUs")}
            variant="contained"
            size="large"
            sx={{ borderRadius: "30px", marginTop: "30px" }}
          >
            Meet Us
          </Button>
        </HomePageSpan>
      </Grid>

      <Grid item xs={6} md={3}>
        <HomePageLogoContainer>
          <img
          alt="logo"
            title="logo"
            src={logo}
            style={{ height: "100%", width: "100%" }}
          />
        </HomePageLogoContainer>
      </Grid>
    </Grid>
  );
};
