import { Container, Typography, styled } from "@mui/material";

const StyledExperience = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  height: "100%",
  display: "flex",
  alignItems: "center",
  paddingTop: "60px",
  paddingBottom: "15px"
}));

const Experience = () => {
  return (
    <>
      <StyledExperience id="experience">
        <Container maxWidth="lg">
          <Typography color="primary.contrastText" variant="h2" textAlign="center">
            Experience
          </Typography>
        </Container>
      </StyledExperience>
    </>
  );
};

export default Experience;
