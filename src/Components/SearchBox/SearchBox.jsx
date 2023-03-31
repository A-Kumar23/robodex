import React from 'react'
import './style.css'

const SearchBox = ({placeholder, name, onChangeHandler}) => {
   
  return (
    <div>
        <input type='search'
        className='search'
         placeholder={placeholder} 
         onChange={onChangeHandler} 
         name={name} />
    </div>
  )
}

export default SearchBox