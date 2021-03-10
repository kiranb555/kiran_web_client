import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Typography, Fade, Chip, Paper } from "@material-ui/core";
import {
  DriveEtaRounded,
  PhotoCameraRounded,
  FitnessCenterRounded,
} from "@material-ui/icons";
import { fetchActions } from "../../redux";
import ExperienceSection from "../../components/experienceSection";
import useStyles from "./about.styles";

import "./about.styles";

const About = (props: any) => {
  const [skills, setSkills] = useState([
    "html5",
    "css3",
    "sass",
    "javascript",
    "react.js",
    "redux",
    "d3.js",
    "highcharts",
    "es6/7",
    "Bootstrap",
    "Material ui",
  ]);

  const [education, setEducation] = useState([
    {
      institute: "K.S.School of Engineering and Management",
      year: "2013 - 2018",
      course: "B.E",
      branch: "CSE",
    },
    {
      institute: "National College",
      year: "2011 - 2013",
      course: "Pre-University College",
      branch: "PCMB",
    },
    {
      institute: "National High School",
      year: "2008 - 2011",
      course: "Higher Primary School",
      branch: "",
    },
  ]);
  const aboutData = useSelector((state) => state);
  const dispatch = useDispatch();
  const classes = useStyles();
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
      <Fade in={true}>
        <Container maxWidth="md">
          <section className={classes.section}>
            <Typography variant="h4" color="textPrimary">
              About
            </Typography>
            {/* <button onClick={clickMe}>click me</button> */}
            <p>
              Hi, i'm <span style={{ color: "red" }}>Kiran</span>, from
              Bangalore, India. Professionally, i'm a Software Engineer,
              currently working in a awesome startup. I'm passionate about
              bringing both the technical and visual aspects of digital products
              in to life.
            </p>
            <p>
              I love frontend web development and offcourse javascript.
              currently learning backend technologies. I always strive to learn
              new things.
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
          </section>

          <section className={classes.section}>
            <Typography variant="h4" color="textPrimary">
              Skills
            </Typography>
            <div>
              {skills.map((skill, id) => (
                <Chip
                  key={id}
                  label={skill}
                  variant="outlined"
                  color="primary"
                  className={classes.skillChip}
                />
              ))}
            </div>
          </section>

          <section className={classes.section}>
            <Typography variant="h4" color="textPrimary">
              Experience
            </Typography>
            <ExperienceSection />
          </section>

          <section className={classes.section}>
            <Typography variant="h4" color="textPrimary">
              Education
            </Typography>
            <div>
              {education.map((edu, id) => (
                <Paper key={id} elevation={1} className={classes.paper}>
                  <div>Institution : {edu.institute}</div>
                  <div>Course : {edu.course}</div>
                  <div>Period : {edu.year}</div>
                </Paper>
              ))}
            </div>
          </section>

          <section className={classes.section}>
            <Typography variant="h4" color="textPrimary">
              Hobby photography grid
            </Typography>
            <p>
              add photography / grid card with location details or descriptions,
              add skelitons while loading. <b>Text with Carousel effect</b>
            </p>
          </section>
        </Container>
      </Fade>
    </div>
  );
};

export default About;
