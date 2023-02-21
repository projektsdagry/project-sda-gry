import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import logo from "../assets/logo2.png";

import { HomePageLogoContainer } from "../styled/homepage/homepage-content";

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
        justifyContent: "space-around",
        marginTop: "200px",
        maxWidth: "100%",
        minHeight: "100vh",
      }}
      xs={12}
      sm={12}
    >
      <Grid item xs={12} md={6} lg={6} overflow={"hidden"}>
        <Typography
          align="left"
          variant="h2"
          style={{
            fontWeight: "bold",
            marginLeft: "150px",
          }}
          gutterBottom
        >
          Welcome to the ultimate destination <br /> for all things gaming!
        </Typography>
        <Typography
          align="left"
          variant="h6"
          style={{ marginLeft: "150px", paddingTop: "40px" }}
          gutterBottom
        >
          Get the latest news, top rankings, and game recommendations. <br></br>{" "}
          Join us now and take your gaming to the next level!
        </Typography>

        <Grid container xs={12} sx={{ flexWrap: "nowrap", marginTop: "50px" }}>
          <Button
            href="#sectionNews"
            onClick={(event) => handleScrollToSection(event, "sectionNews")}
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#883EFF",
              color: "#ffffff",
              borderRadius: "30px",
              marginTop: "40px",
              marginRight: "20px",
              marginLeft: "150px",
            }}
          >
            Check News
          </Button>
          <Button
            href="#sectionUs"
            onClick={(event) => handleScrollToSection(event, "sectionUs")}
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#883EFF",
              color: "#ffffff",
              borderRadius: "30px",
              marginTop: "40px",
            }}
          >
            Meet Us
          </Button>
        </Grid>
      </Grid>

      <Grid item xs={12} md={3} style={{ marginRight: "150px" }}>
        <HomePageLogoContainer>
          <img
            alt="logo"
            title="logo"
            src={logo}
            style={{ height: "600px", width: "600px" }}
          />
        </HomePageLogoContainer>
      </Grid>
    </Grid>
  );
};
