import React from 'react'

type userItem = {
  name : string
  status : boolean

}
export default function User(props: userItem) {
  return (
    <div>
      <p> <span>{props.name} :</span> {props.status ?" online" : " ofline" }</p>
    
    </div>
  )
}
