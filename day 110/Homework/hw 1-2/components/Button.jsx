import React from 'react';

export default function Button(props) {
  return (
    <div>
      <h2>{props.value}</h2>
      <h3>{props.level}</h3>
    </div>
  );
}
