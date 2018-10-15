import React from "react";

const About = (props) => (
  <div>
    <h2>About here.</h2>
    <p>{ JSON.stringify(props.match) }</p>
  </div>
)

export default About;
