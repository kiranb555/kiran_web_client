import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Typography, Fade, Chip, Paper } from "@material-ui/core";
import { fetchActions } from "../../redux";
import ExperienceSection from "../../components/experienceSection";
// import Carousel from "../../components/carousel";
import useStyles from "./about.styles";

import "./about.styles";

const About = (props: any) => {
  const [skills, setSkills] = useState([
    "html5",
    "css3",
    "javascript",
    "react.js",
    "redux",
    "d3.js",
    "highcharts",
    "es6/7",
    "sass",
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
  const clickMe = () => {
    dispatch(fetchActions());
  };

  useEffect(() => {
    dispatch(fetchActions());
  }, [dispatch]);

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
            <Typography
              variant="h4"
              color="primary"
              className={classes.section__header}
            >
              About
            </Typography>
            {/* <button onClick={clickMe}>click me</button> */}
            <p className={classes.aboutPara}>
              Hi, i'm <span>Kiran</span>, from Bangalore, India. Professionally,
              i'm a Software Engineer, currently working in a awesome startup.
              I'm passionate about bringing both the technical and visual
              aspects of digital products in to life.
            </p>
            <p>
              I love frontend web development and offcourse javascript.
              currently learning backend technologies. I always strive to learn
              new things.
            </p>
            <p>
              Apart from being a tech geek, you can find me travelling{" "}
              {/* <DriveEtaRounded color="secondary" />  */}, doing photography
              {/* <PhotoCameraRounded color="secondary" /> */}, or in the gym
              {/* <FitnessCenterRounded color="secondary" /> */}
            </p>
            {/* <div>
              <button>Get in touch</button>
            </div> */}
          </section>

          <section className={classes.section}>
            <Typography
              variant="h4"
              color="primary"
              className={classes.section__header}
            >
              Skills
            </Typography>
            <div>
              {skills.map((skill, id) => (
                <Chip
                  key={id}
                  label={skill}
                  variant="outlined"
                  color="secondary"
                  className={classes.skillChip}
                />
              ))}
            </div>
          </section>

          <section className={classes.section}>
            <Typography
              variant="h4"
              color="primary"
              className={classes.section__header}
            >
              Experience
            </Typography>
            <ExperienceSection />
          </section>

          <section className={classes.section}>
            <Typography
              variant="h4"
              color="primary"
              className={classes.section__header}
            >
              Education
            </Typography>
            <div>
              {education.map((edu, id) => (
                <Paper key={id} elevation={1} className={classes.paper}>
                  <div className={classes.educationHolder}>
                    <span>Institution </span>
                    <span>{edu.institute}</span>
                  </div>
                  <div className={classes.educationHolder}>
                    <span>Course </span>
                    <span>
                      {edu.branch
                        ? `${edu.course} (${edu.branch})`
                        : `${edu.course}`}
                    </span>
                  </div>
                  <div className={classes.educationHolder}>
                    <span>Period </span>
                    <span>{edu.year}</span>
                  </div>
                </Paper>
              ))}
            </div>
          </section>

          {/* <section className={classes.section}>
            <Typography
              variant="h4"
              color="primary"
              className={classes.section__header}
            >
              Hobby photography
            </Typography>
            <div>
              <Carousel />
            </div>
          </section> */}
        </Container>
      </Fade>
    </div>
  );
};

export default About;
