import React from 'react'
type  abiltyofuser= {

    name : {
        firstName: string
        lastName : string
    }
}
export default function UserObject(props: abiltyofuser) {


  return (
    <div>
      <p>{props.name.firstName}</p>
      <p>{props.name.lastName}</p>
    </div>
  )
}
