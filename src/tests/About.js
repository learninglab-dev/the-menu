import React from "react";
import BuildingBlock from "../elements/BuildingBlock.js"

const About = (props) => {
  var loopingArray = [...Array(20).keys()]
  return (
  <div>
    <pre>{ JSON.stringify(props.match) }</pre>
    { loopingArray.map(function(el){
      return (
        <BuildingBlock />
      )
    }) }
    <BuildingBlock />
  </div>
)
}
export default About;
