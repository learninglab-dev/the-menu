import React, { Component } from 'react';

const Activity = (props) => {
    console.log(props);
    return (
      <h1>test: {props.match.params.id}</h1>
    );
}

export default Activity;
