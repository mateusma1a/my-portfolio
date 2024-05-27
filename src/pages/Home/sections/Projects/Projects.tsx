import { Container, Typography, styled } from "@mui/material";

const StyledProjects = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  height: "100%",
  display: "flex",
  alignItems: "center",
  paddingTop: "60px",
  paddingBottom: "15px"
}));

const Projects = () => {
  return (
    <>
      <StyledProjects id="projects">
        <Container maxWidth="lg">
          <Typography color="primary.contrastText" variant="h2" textAlign="center">
            Projects
          </Typography>
          <Typography color="primary.contrastText" variant="h6" textAlign="center">
            New Projects will be add soon!
          </Typography>
        </Container>
      </StyledProjects>
    </>
  );
};

export default Projects;
