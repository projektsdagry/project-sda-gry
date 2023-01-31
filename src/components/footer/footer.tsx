import styled from "@emotion/styled";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Navigate, useHref } from "react-router-dom";

const Box = styled.footer`
  background: #262626;
  display: flex;
  justify-content: space-between;
`;

const Footer = () => {
  return (
    <Box>
      <p
        style={{
          marginLeft: "20px",
          marginTop: "15px",
          marginRight: "10px",
          fontSize: "15px"
        }}
      >
        @bettersteam
      </p>
      <div>
        <LinkedInIcon />
        <GitHubIcon
          style={{
            cursor: "pointer",
            marginLeft: "10px",
            marginTop: "15px",
            marginRight: "20px",
          }}
          onClick={() =>
            window.open("https://github.com/projektsdagry/project-sda-gry")
          }
        />
      </div>
    </Box>
  );
};

export default Footer;
