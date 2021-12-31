import React from 'react'

const Generator = ({ user, activeLink }) => {
    const phrases = [
      `Hi my name is ${user.name.first} ${user.name.last}`,
      `my e mail address is ${user.email}`,
      `ı was born on ${user.dob.date.slice(0, 10)} `,
      `Hi country is ${user.location.country} `,
      `my phene number is ${user.phone}`,
      `my password is ${user.login.password} `
    ]
    return (
         <h1>{phrases[activeLink]} </h1>
  
    )
}

export default Generator
