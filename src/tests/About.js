import React from "react";

const About = (props) => (
  <div>
    <pre>{ JSON.stringify(props.match) }</pre>
  </div>
)

export default About;
