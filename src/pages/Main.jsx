import React from 'react';
import SearchField from '../components/search-field/SearchField';
import Users from '../components/users/Users';
import AddUser from '../components/users/AddUser';

const Main = () => (
  <div className="left-side">
    <SearchField />
    <div className="onlyMobile">
      <AddUser/>
    </div>
    <Users /> 
  </div>
)

export default Main;