import React, { useState } from "react"
import { useAuth } from "./../../firebase/authcontext"
import { useNavigate } from "react-router-dom"
import { Button,Alert} from "@mui/material"

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      navigate('/')

    } catch {
      setError("Failed to log out")
    }
  }

  return (<div className="dashboard">
    <div className="usermail">{currentUser.email}</div>
    {error && <Alert error="danger">{error}</Alert>}
    <Button onClick={()=>{
        handleLogout()
    }}>Log out</Button>
  </div>
  )
}