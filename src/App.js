import React, { useEffect } from 'react';
import SearchField from './components/searchField/SearchField';

import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from './utils'
import Users from './components/users/Users';

const App = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users)

  const middlewhere = async () => {
    let data = await getUsers()
    dispatch({ type: "GETFROMSERVER", payload: data })
  }

  useEffect(() => {
    middlewhere()
  }, [])
  return (
    <div>
      <SearchField />
      <Users />
    </div>
  )
}

export default App;
