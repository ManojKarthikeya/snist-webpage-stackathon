import React from 'react'
import { Link } from 'react-router-dom'

export default function Departments() {
  return (
    <div>
      <Link to='/departments/IT'>IT</Link>
      <Link to='/departments/CSE'>CSE</Link>
      <Link to='/departments/ECM'>ECM</Link>
    </div>
  )
}
