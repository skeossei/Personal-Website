import React from 'react';
import { Grid, List, ListItem } from '@material-ui/core';

class AboutMe extends React.Component {
  render() {
    return (
      <div className="about-main">
        <Grid container alignContent="center">
          <Grid item xs={6}>
            <h1>Sevag Keosseian</h1>
            <img src="ProfilePic.png" alt="pic" className="myPic" />
            <p>
              My name is Sevag Keosseian. I am a fourth year computer science major and business
              minor at the University of California, San Diego. I have completed the following
              courses: advanced data structures, algorithm design and analysis, software
              engineering, operating systems, computer security, computer architecture, and
              Statistical AI. During my fourth year, I plan on taking the following courses: web
              client languages, distributed systems, database principles, computer networks, and
              modern cryptography.
            </p>
            <p>Hobbies: Calisthenics, Biking, Chess</p>
          </Grid>
          <Grid item xs={6} className="contact-list">
            <h1>Contact</h1>
            <hr />
            <List>
              <ListItem className="phone-icon">
                <i class="fa fa-phone-square"></i>
                <h3> (818) 590-1344</h3>
              </ListItem>
              <ListItem className="email-icon">
                <i class="fa fa-envelope"></i>
                <h3>sev.keoss@gmail.com</h3>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default AboutMe;
