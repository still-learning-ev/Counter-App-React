import React from 'react'

const person = {
  name: 'Ranga',
  age: 15,
  address: {
    line1: 'BakerStreet',
    city: 'London',
    country: 'UK',
  },
  profiles: ['twitter', 'linkedin', 'insta'],
  printProfile: () => {
    person.profiles.map(
      (person)=>console.log(person)
    )
  }
}

export default function LearningJavaScript() {
  return (
    <>
      <div> {person.name} </div>
      <div>{person.age}</div> 
      <div>{person.address.line1} </div> 
      <div>{person.profiles[0]}</div>
      <div>{person.printProfile()}</div>
    </>
  )
}
