import { Box, Container, Typography, styled } from "@mui/material";

const StyledFormation = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.contrastText,
  height: "100%",
  display: "flex",
  alignItems: "center",
  paddingTop: "60px",
  paddingBottom: "15px",
}));

const Formation = () => {
  return (
    <>
      <StyledFormation id="formation">
        <Container maxWidth="lg">
          <Typography color="primary.dark" variant="h2" textAlign="center">
            Formation
          </Typography>
          <Box mb={3} />
          <Typography color="primary.dark" variant="h6" textAlign="center">
          Jun. 2022 – Jul. 2023
          </Typography>
          <Typography color="primary.dark" variant="h6" textAlign="center">
            <strong>Specialization in Full Stack Web Development</strong>
          , Pontifical Catholic University (PUC).
          </Typography>
          <Box mb={2} />
          <Typography color="primary.dark" variant="h6" textAlign="center">
          Feb. 2018 – Dec. 2021
          </Typography>
          <Typography color="primary.dark" variant="h6" textAlign="center">
          <strong>Bachelor of Computer Science</strong>
          , Pitagoras.
          </Typography>
        </Container>
      </StyledFormation>
    </>
  );
};

export default Formation;
