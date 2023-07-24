import React from 'react'


type ListUser  = {
    user: {
        firstName  : string
       
        lastName : string
    }[]
}
export default function ListUsers( props: ListUser) {
  return (
    <div>
      <p> {props.user.map((item) => {
        return(
          <div>
        <p>  <span > {item.firstName}</span> {item.lastName}</p>
      
          </div>

        )
      })}</p>
    </div>
  )
}
