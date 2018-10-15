import React, { Component } from 'react';

const Activity = (props) => {
    console.log(props);
    return (
      <div>
        <pre>id: { props.match.params.id }</pre>
      </div>
    );
}

export default Activity;
