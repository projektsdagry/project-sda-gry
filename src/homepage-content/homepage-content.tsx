import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import logo from "../assets/logo2.png";

import {
  HeaderContainer,
  HomePageLogoContainer,
  SmallerHeaderContainer,
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
      sx={{
        marginTop: "200px",
        maxWidth: "95%",
        minHeight: "100vh",
        paddingLeft: "250px",
        "@media (max-width: 1100px)": {
          textAlign: "center",
          width: "100%",
          paddingLeft: "50px",
        },
        "@media (max-width: 410px)": {
          textAlign: "center",
          width: "100%",
          paddingLeft: "0px",
        },
      }}
    >
      <Grid item lg={6}>
        <HeaderContainer>
          Welcome to the ultimate destination <br />
          for all things gaming!
        </HeaderContainer>
        <SmallerHeaderContainer>
          Get the latest news, top rankings, and game recommendations. <br></br>{" "}
          Join us now and take your gaming to the next level!
        </SmallerHeaderContainer>

        <Grid
          container
          sx={{
            flexWrap: "nowrap",
            marginTop: "50px",
            "@media (max-width: 1100px)": {
              justifyContent: "center",
            },
          }}
        >
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

      <Grid
        item
        sx={{
          marginLeft: "120px",
          "@media (max-width: 1377px)": {
            marginLeft: "50px",
            marginTop: "50px",
          },
        }}
      >
        <HomePageLogoContainer>
          <img alt="logo" title="logo" src={logo} style={{ height: "400px" }} />
        </HomePageLogoContainer>
      </Grid>
    </Grid>
  );
};
