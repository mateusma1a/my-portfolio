import { Container, Typography, styled } from "@mui/material";

const StyledFormation = styled("div")(({ theme }) => ({
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

const Formation = () => {
  return (
    <>
      <StyledFormation id="formation">
        <Container maxWidth="lg">
          <Typography color="primary.dark" variant="h2" textAlign="center">
            Formation
          </Typography>
        </Container>
      </StyledFormation>
    </>
  );
};

export default Formation;
