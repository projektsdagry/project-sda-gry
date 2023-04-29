import styled from "@emotion/styled";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";

const Box = styled.footer`
  background: #262626;
  display: flex;
  justify-content: space-between;
  bottom: 0;
  width: 100%;
  min-height: 100%;
  margin-top: 120px;
`;

const Sign = styled.p`
  margin: 15px 10px 0 20px;
  font-size: 15px;
`;

export const Footer = () => {
  return (
    <Box>
      <Sign>@steemlet</Sign>
      <div>
        <IconButton>
          <LinkedInIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://github.com/projektsdagry/project-sda-gry"
          target={"_blank"}
        >
          <GitHubIcon />
        </IconButton>
      </div>
    </Box>
  );
};
