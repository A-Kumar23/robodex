import React, { Fragment, useEffect, useState } from 'react'
// import Robots from '../../Helper/robots'
import './Style.css'
const Card = ({Robots}) => {
    // const [users, setUsers] = useState("")
    // // const robots = Robots;
    
    // const fetchUser = () => {
    //   // fetch("https://jsonplaceholder.typicode.com/users")
    //   fetch("https://randomuser.me/api/?results=100")
    //       .then((response) => response.json())
    //       .then((data) => setUsers(data.results));
    // }

    // useEffect(
    //   () => fetchUser(),[]
    // )
    // console.log(users);
    
  return (
    <Fragment>
       
           
               <div key={Robots.id} className='card'  >
                <img  src={`https://robohash.org/${Robots.username}?size=200x200`} alt={Robots.name}/>
                <h3 className='' >{Robots.name}</h3>
                <p className='' >{Robots.email}</p>
               </div>
           
        
       
    </Fragment>
   
  )
}

export default Card