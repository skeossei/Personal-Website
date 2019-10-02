import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import { Tab, Paper, Typography, Box } from '@material-ui/core';
import WebsiteDescription from './WebsiteDescription.js';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tab: 0 };
  }

  handeOnClick = (event, tab) => {
    this.setState({ tab });
  };

  render() {
    const { tab } = this.state;
    return (
      <div>
        <Paper>
          <Tabs
            value={tab}
            onChange={this.handeOnClick}
            indicatorColor="primary"
            textColor="primary"
            centered
            ripple
          >
            <Tab label="Personal Website" />
            <Tab label="High School Project" />
            <Tab label="IEEE" />
          </Tabs>
          <TabPanel TabPanel value={tab} index={0}>
            <WebsiteDescription />
          </TabPanel>
          <TabPanel value={tab} index={1}>
            <Projects />
          </TabPanel>
          <TabPanel value={tab} index={2}>
            Item Three
          </TabPanel>
        </Paper>
      </div>
    );
  }
}

export default Projects;
