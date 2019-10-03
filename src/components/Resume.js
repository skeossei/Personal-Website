import React from 'react';
import { Grid, Slider, Paper } from '@material-ui/core';

class Resume extends React.Component {
  render() {
    return (
      <Paper className="resume-body">
        <Grid container>
          <Grid item xs={6}>
            <div className="education">
              <h1>
                <u>Education</u>
              </h1>
              <h2>University of California, San Diego (2016 - 2020)</h2>
              <h2>Major: B.S. Computer Science</h2>
              <h2>Minor: Business</h2>
              <h2>GPA: 3.5</h2>
            </div>
            <div className="experience">
              <h1>
                <u>Experience</u>
              </h1>
              <h3>
                I currently have an internship at Humana as a backend software developer. The
                internship requires me to use Java 8 and Spring (Spring Boot and Spring Batch) for
                programming. For testing, I have to use Groovy and Spock. I also had to learn
                Microsoft SQL Server to make changes to database. My latest task included converting
                AWS DMS CLI into a Java SDK to make testing much easier. This also enables us to add
                additional functionality, such as error checking to capture any problems that
                occurred duringdata migration.
              </h3>
            </div>
            <div className="technologies">
              <h1>
                <u>Technologies</u>
              </h1>
              <h2>Intell IJ, vim / vi / gvim, Visual Studio Code, PyCharm CE</h2>
            </div>
          </Grid>
          <Grid item xs={6} className="languages-list">
            <h1>
              <u>Tech Stack</u>
            </h1>
            <div>
              <h2>Java </h2>
              <Slider value={85} aria-labelledby="continuous-slider" valueLabelDisplay="on" />
            </div>
            <div>
              <h2>Spring Boot / Spring Batch</h2>
              <Slider value={80} aria-labelledby="continuous-slider" valueLabelDisplay="on" />
            </div>
            <div>
              <h2>Groovy</h2>
              <Slider value={75} aria-labelledby="continuous-slider" valueLabelDisplay="on" />
            </div>
            <div>
              <h2>C / C++ </h2>
              <Slider value={75} aria-labelledby="continuous-slider" valueLabelDisplay="on" />
            </div>

            <div>
              <h2>Python</h2>
              <Slider value={65} aria-labelledby="continuous-slider" valueLabelDisplay="on" />
            </div>
            <div>
              <h2>Microsoft SQL Server</h2>
              <Slider value={65} aria-labelledby="continuous-slider" valueLabelDisplay="on" />
            </div>
            <div>
              <h2>HTML / CSS </h2>
              <Slider value={60} aria-labelledby="continuous-slider" valueLabelDisplay="on" />
            </div>
            <div>
              <h2>Javascript </h2>
              <Slider value={40} aria-labelledby="continuous-slider" valueLabelDisplay="on" />
            </div>
            <div>
              <h2>React </h2>
              <Slider value={30} aria-labelledby="continuous-slider" valueLabelDisplay="on" />
            </div>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default Resume;
