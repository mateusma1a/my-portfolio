import { Container, Typography, styled } from "@mui/material";

const StyledAbout = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.contrastText,
  height: "30vh",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up("xs")]: {
    // <= mobile
    paddingTop: "100px",
  },
  [theme.breakpoints.up("md")]: {
    // >=mobile
    paddingTop: "0",
  },
}));

const About = () => {
  return (
    <>
      <StyledAbout id="about">
        <Container maxWidth="lg">
          <Typography color="primary.dark" variant="h2" textAlign="center">
            About
          </Typography>
          <Typography color="primary.dark" variant="h6" textAlign="center">
            About me
          </Typography>
        </Container>
      </StyledAbout>
    </>
  );
};

export default About;
