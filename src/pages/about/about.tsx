import React from "react";
import { Grid, Typography } from "@material-ui/core";
function About() {
  return (
    <div className="about" style={{ flexGrow: 1, padding: "20px" }}>
      <h2>about</h2>
      <div>
        Hi, i'm Kiran, from Bangalore, India. Professionally, i'm a Software
        Engineer, currently working in a awesome startup.
      </div>
      <div>
        I love frontend web development and offcourse javascript. currently
        learning backend technologies. I always strive to learn new things.
      </div>
      <div>
        Apart from being a tech geek, you can find me travelling, doing
        photography, or in the gym.
      </div>

      <h2>skills</h2>
      <div>skills / progress bar or chunks of buttons</div>
      <h2>Experience</h2>
      <div>About previous company / add accordion or steps with accordion</div>
      <h2>education</h2>
      <div>school, collge, engineering details / accordion or cards </div>
      <h2>hobby photography grid</h2>
      <div>
        add photography / grid card with location details or descriptions, add
        skelitons while loading
      </div>
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
    </div>
  );
}

export default About;
