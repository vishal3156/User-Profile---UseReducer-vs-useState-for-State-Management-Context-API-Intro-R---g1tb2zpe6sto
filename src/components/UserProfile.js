import { useContext } from 'react'
import React from 'react'
import { UserContext } from "./App"

const UserProfile = () =>{
  const {name, age} = useContext(userContext)
  return(
    <>
      <h1 id="name">{name}</h1>
      <h1 id="age">{age}</h1>
    </>
  )
}

export {UserProfile}
