import { Container, Typography, styled } from "@mui/material";

const StyledAbout = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.contrastText,
  height: "100%",
  display: "flex",
  alignItems: "center",
  paddingTop: "60px",
  paddingBottom: "15px",
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
          Graduated in Computer Science, I am currently part of a multidisciplinary team as a Java developer. 
          My role involves contributing to the development of new features, planning, architecture, and delivering final code. 
          In addition to my expertise in Java and Spring, I have collaborated on web development projects using Angular and React. 
          Moreover, I have had the pleasure of working on Machine Learning projects using Python.
          </Typography>
        </Container>
      </StyledAbout>
    </>
  );
};

export default About;
