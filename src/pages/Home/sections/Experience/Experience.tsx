import { Container, Typography, styled } from "@mui/material";

const StyledExperience = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  height: "60vh",
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
