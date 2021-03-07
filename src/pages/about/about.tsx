import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Container, Typography } from "@material-ui/core";
import {
  DriveEtaRounded,
  PhotoCameraRounded,
  FitnessCenterRounded,
} from "@material-ui/icons";
import { fetchActions } from "../../redux";
import "./about.styles";

const About = (props: any) => {
  const aboutData = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(aboutData);
  const clickMe = () => {
    dispatch(fetchActions());
  };

  useEffect(() => {
    dispatch(fetchActions());
  }, [dispatch]);

  console.log({ aboutData });
  return (
    <div
      className="about"
      style={{
        fontSize: "1.2rem",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h4" color="textPrimary">
          About
        </Typography>
        {/* <button onClick={clickMe}>click me</button> */}
        <p>
          Hi, i'm <span style={{ color: "red" }}>Kiran</span>, from Bangalore,
          India. Professionally, i'm a Software Engineer, currently working in a
          awesome startup. I'm passionate about bringing both the technical and
          visual aspects of digital products in to life.
        </p>
        <p>
          I love frontend web development and offcourse javascript. currently
          learning backend technologies. I always strive to learn new things.
        </p>
        <p>
          Apart from being a tech geek, you can find me travelling{" "}
          <DriveEtaRounded color="secondary" /> , doing photography
          <PhotoCameraRounded color="secondary" />
          , or in the gym
          <FitnessCenterRounded color="secondary" />
        </p>
        <div>
          <button>Get in touch</button>
        </div>

        <Typography variant="h4" color="textPrimary">
          Skills
        </Typography>
        <div>skills / progress bar or chunks of buttons</div>
        <Typography variant="h4" color="textPrimary">
          Experience
        </Typography>
        <p>About previous company / add accordion or steps with accordion</p>
        <Typography variant="h4" color="textPrimary">
          Education
        </Typography>
        <div>school, collge, engineering details / accordion or cards </div>

        <Typography variant="h4" color="textPrimary">
          Hobby photography grid
        </Typography>
        <p>
          add photography / grid card with location details or descriptions, add
          skelitons while loading
        </p>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            1
          </Grid>
          <Grid item xs={3}>
            2
          </Grid>
          <Grid item xs={3}>
            3
          </Grid>
          <Grid item xs={3}>
            4
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default About;
