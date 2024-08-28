import React from 'react';
import CardList from './CardList.js'
import SearchBox from "./SearchBox.js";

function App() {
  const [search, setSearch] = React.useState({
    robots: [],
    searchField: ""
  })

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(users => {
      setSearch(prevState => ({
        ...prevState,
        robots: users 
      }))
    })
  })

  

  function onSearchChange(event) {
    setSearch({...search, searchField: event.target.value})
  }

  const filteredRobots = search.robots.filter(robot => {
    return robot.name.toLowerCase().includes(search.searchField.toLowerCase())
  })
 

  return (
    <div className='component-center'>
      <h1>RoboFriends</h1>
      <SearchBox onSearch={onSearchChange}/>
      <div className='row container'>
        <CardList robots={filteredRobots}/>
      </div>
    </div>
  );
}

export default App;
