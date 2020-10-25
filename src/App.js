import React, { useState, useEffect } from 'react';

import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/searchBox/searchBox';
import './App.css';


function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users));
  }, []);

  const filterMonsters = monsters.filter(monster => (
    monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
  ));

  const changeToggleHandler = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox 
        placeholder="monsters search"
        handleChange={changeToggleHandler}
      />
      <CardList monsters={filterMonsters} />
    </div>
  );
}

export default App;
