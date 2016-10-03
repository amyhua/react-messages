import React, { Component, PropTypes } from 'react';

export default (props) => {
  return <input type="checkbox" onChange={alert(props.affectState)}
  onClick={props.affectState} />;
}