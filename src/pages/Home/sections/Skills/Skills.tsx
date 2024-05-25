import { Container, Grid, Typography, styled } from "@mui/material";
import { FaAngular } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaJira } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { GrOracle } from "react-icons/gr";
import { DiDjango } from "react-icons/di";
import { FaGit } from "react-icons/fa6";
import { MdHtml } from "react-icons/md";
import { MdCss } from "react-icons/md";

const StyledSkills = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  height: "75vh",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up("xs")]: {
    // <= mobile
    height: "110vh",
    paddingTop: "120px",
    paddingBottom: "100px",
  },
  [theme.breakpoints.up("md")]: {
    // >=mobile
    paddingTop: "0",
  },
}));

const Skills = () => {
  return (
    <>
      <StyledSkills id="skills">
        <Container maxWidth="lg">
          <Typography
            color="primary.contrastText"
            variant="h2"
            textAlign="center"
          >
            Skills
          </Typography>
          <Grid
            container
            display="flex"
            justifyContent="center"
            spacing={3}
            pt={3}
            pb={3}
          >
            <Grid item xs={6} md={4} display="flex" justifyContent="center">
              <Typography
                color="primary.contrastText"
                variant="h4"
                textAlign="center"
              >
                <FaAngular />
                Angular
              </Typography>
            </Grid>
            <Grid item xs={6} md={4} display="flex" justifyContent="center">
              <Typography
                color="primary.contrastText"
                variant="h4"
                textAlign="center"
              >
                <FaReact />
                React
              </Typography>
            </Grid>
            <Grid item xs={6} md={4} display="flex" justifyContent="center">
              <Typography
                color="primary.contrastText"
                variant="h1"
                textAlign="center"
              >
                <FaNode />
              </Typography>
            </Grid>
            <Grid item xs={6} md={4} display="flex" justifyContent="center">
              <Typography
                color="primary.contrastText"
                variant="h4"
                textAlign="center"
              >
                <IoLogoJavascript />
                Java Script
              </Typography>
            </Grid>
            <Grid item xs={6} md={4} display="flex" justifyContent="center">
              <Typography
                color="primary.contrastText"
                variant="h4"
                textAlign="center"
              >
                <BiLogoTypescript />
                Type Script
              </Typography>
            </Grid>
            <Grid item xs={6} md={4} display="flex" justifyContent="center">
              <Typography
                color="primary.contrastText"
                variant="h4"
                textAlign="center"
              >
                <SiSpring />
                Spring
              </Typography>
            </Grid>
            <Grid item xs={6} md={4} display="flex" justifyContent="center">
              <Typography
                color="primary.contrastText"
                variant="h4"
                textAlign="center"
              >
                <FaJava />
                Java
              </Typography>
            </Grid>
            <Grid item xs={6} md={4} display="flex" justifyContent="center">
              <Typography
                color="primary.contrastText"
                variant="h1"
                textAlign="center"
              >
                <SiMysql />
              </Typography>
            </Grid>
            <Grid item xs={6} md={4} display="flex" justifyContent="center">
              <Typography
                color="primary.contrastText"
                variant="h4"
                textAlign="center"
              >
                <GrOracle />
                Oracle
              </Typography>
            </Grid>
            <Grid item xs={6} md={4} display="flex" justifyContent="center">
              <Typography
                color="primary.contrastText"
                variant="h4"
                textAlign="center"
              >
                <SiMicrosoftsqlserver />
                SQL Server
              </Typography>
            </Grid>
            <Grid item xs={6} md={4} display="flex" justifyContent="center">
              <Typography
                color="primary.contrastText"
                variant="h4"
                textAlign="center"
              >
                <FaPython />
                Python
              </Typography>
            </Grid>
            <Grid item xs={6} md={4} display="flex" justifyContent="center">
              <Typography
                color="primary.contrastText"
                variant="h4"
                textAlign="center"
              >
                <SiFlask />
                Flask
              </Typography>
            </Grid>
            <Grid item xs={6} md={4} display="flex" justifyContent="center">
              <Typography
                color="primary.contrastText"
                variant="h1"
                textAlign="center"
              >
                <DiDjango />
              </Typography>
            </Grid>
            <Grid item xs={6} md={4} display="flex" justifyContent="center">
              <Typography
                color="primary.contrastText"
                variant="h2"
                textAlign="center"
              >
                <FaGit />
              </Typography>
            </Grid>
            <Grid item xs={6} md={4} display="flex" justifyContent="center">
              <Typography
                color="primary.contrastText"
                variant="h2"
                textAlign="center"
              >
                <MdHtml />
              </Typography>
            </Grid>
            <Grid item xs={6} md={4} display="flex" justifyContent="center">
              <Typography
                color="primary.contrastText"
                variant="h2"
                textAlign="center"
              >
                <MdCss />
              </Typography>
            </Grid>
            <Grid item xs={6} md={4} display="flex" justifyContent="center">
              <Typography
                color="primary.contrastText"
                variant="h4"
                textAlign="center"
              >
                <FaJira />
                Jira
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </StyledSkills>
    </>
  );
};

export default Skills;
