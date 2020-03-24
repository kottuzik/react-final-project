import React from 'react';
import { Link, useRouteMatch, } from 'react-router-dom';

function BackLink ({ label, to }){
  let match = useRouteMatch({
      path: to
  });
  return(
      <div className="back-link onlyMobile">
           <Link to={to}><span>&#8592;</span>{label}</Link>
      </div>
  )
}
export default BackLink;