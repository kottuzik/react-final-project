import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

function BackLink ({ label, to }){
  let match = useRouteMatch({
      path: to
  });
  return(
      <div className="back-link">
           <Link to={to}>{label}</Link>
      </div>
  )
}
export default BackLink;