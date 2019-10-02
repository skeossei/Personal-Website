import React from 'react';
import Grid from '@material-ui/core/Grid';

class HomePage extends React.Component {
  render() {
    return (
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={12} className="header-color">
          <img src="ProfilePic.png" alt="pic" className="myPic" />
          <div className="nameAndLinks">
            <h1>Software Developer</h1>
            <hr />

            <p> HTML/CSS | Javascript | NodeJS | React | Material UI </p>

            <div className="links">
              <a
                href="https://github.com/skeossei?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github-square" aria-hidden="true"></i>
              </a>
              <a
                href="http://linkedin.com/in/sevag-keosseian-1ba765194"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default HomePage;
