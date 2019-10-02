import React from 'react';

class IEEEDescription extends React.Component {
  render() {
    return (
      <div>
        <div className="tech-stack-body">
          <h1>
            <u>Tech Stack</u>
          </h1>
          <h2>C++, Arduino code</h2>
        </div>
        <hr />
        <div className="ieee-body">
          <h1>
            <u>Info</u>
          </h1>
          <p>
            I was in an IEEE project where my partner and I used gas sensors to determine the air
            quality in the room. He handled the hardware aspect of the project, while I handled the
            software aspect.
          </p>
          <p>
            I wrote an algorithm that used the gas sensors to get certain gas levels in the room and
            display the air quality index on the led screen. I also programmed the arduino to have
            different levels of flashing lights, where a fast blinking light means that the air
            quality index is poor.
          </p>
        </div>
      </div>
    );
  }
}

export default IEEEDescription;
