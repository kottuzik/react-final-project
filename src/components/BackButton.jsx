import React from 'react';
import { useHistory } from 'react-router-dom';

const BackButton = () =>{

  routeChange = () => {
    let path = '';
    let history = useHistory();
    history.push(path);
  } 
  return(
    <React.Fragment>
      <button onClick={routeChange}>Back to home page</button>
    </React.Fragment>
  )
}