
import './App.css';
import { useEffect, useState } from 'react';
import CardContainer from './Components/CardContainer/CardContainer';
import SearchBox from './Components/SearchBox/SearchBox';
import Robots from './Helper/robots';

  function App() {
    const [search, setSearch] = useState('')
        const [users, setUsers] = useState("")
    // const [user, setUser] = useState('')
    // console.log(user,"User");
    const searchHandle = (e) => {
        const searchValue = e.target.value.toLowerCase();
        setSearch(searchValue);
    }

    const filterValue = Robots.filter((Robots) => {
      return Robots.name.toLowerCase().includes(search)
    })

       const fetchUser = () => {
      // fetch("https://jsonplaceholder.typicode.com/users")
      fetch("https://randomuser.me/api/?results=100")
          .then((response) => response.json())
          .then((data) => setUsers(data.results));
    }

    useEffect(
      () => fetchUser(),[]
    )
    console.log(users);
    console.log(
      "fff"
    )
    
    
   
  return (
    
    <div className='content'>
      <h1>Robots Friends</h1>
      <SearchBox 
        placeholder='Robots Search '
        onChangeHandler={searchHandle}
        name='Search Box'
      />
      {/* {
        users.map((users, index) => {
          <div key={index} > {users.gender}</div>
        })
      } */}

      {
        filterValue.length === 0 ? <h4>No Value</h4> :  <CardContainer Robots= {filterValue}/>
      }
      
      </div>
   
  );
}

export default App;
