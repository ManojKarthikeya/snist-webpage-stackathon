import React from 'react'

export default function FacultyEntry({name,designation,img}) {
  return (
    <div>
        <div>{name}</div>
        <div>{designation}</div>
        <img src={img}></img>
    </div>
  )
}
