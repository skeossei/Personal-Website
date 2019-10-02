import React from 'react';

class HighSchoolDescription extends React.Component {
  render() {
    return (
      <div>
        <div className="tech-stack-body">
          <h1>
            <u>Tech Stack</u>
          </h1>
          <h2>Python</h2>
        </div>
        <hr />
        <div className="high-school-body">
          <h1>
            <u>Info</u>
          </h1>
          <p>
            I created a csv parser that compares two different csv files. It then uses the
            information from those files to generate an output csv file.
          </p>
          <p>
            Whenever a student is providing payment in my high school, they use a MachForm form. My
            school gets an aggregated cs file at the end of each month for every student that made a
            payment through MachForm. My high school also gets a csv file from PayPal that states
            whether or not a payment was processed properly.
          </p>
          <p>
            So, I created a csv parser that reads both of these files, checks to see if the
            transaction id matches and whether the payment was processed properly. If all the
            criteria checks out, I generate a row in the output csv file according to the specified
            design. Otherwise, I create an aggregated list of possible issues and output that list
            at the end of the output csv file.
          </p>
        </div>
      </div>
    );
  }
}

export default HighSchoolDescription;
