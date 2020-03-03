import React from 'react';
import { useSelector } from 'react-redux';
import SearchField from './components/searchField/SearchField';

const App = () => {
  let data = useSelector(state => state.users)
  console.log(data)
  return (
    
    <SearchField />
  )
}

export default App;
