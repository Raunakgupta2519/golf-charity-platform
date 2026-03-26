"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function SignupPage() {

  const [email,setEmail] = useState("")
  const [pass,setPass] = useState("")
  const router = useRouter()

  const signup = () => {
    if(!email || !pass){
      alert("Fill all fields")
      return
    }

    localStorage.setItem("user", JSON.stringify({email,pass}))
    alert("Account Created ✅")
    router.push("/login")
  }

  return (
    <div style={{
      height:"100vh",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      background:"linear-gradient(135deg,#0f172a,#020617)"
    }}>

      <div style={{
        background:"#111827",
        padding:40,
        borderRadius:16,
        width:320,
        boxShadow:"0 0 40px rgba(0,0,0,0.6)"
      }}>

        <h2 style={{color:"white",marginBottom:20}}>Create Account</h2>

        <input
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          style={{width:"100%",padding:12,marginBottom:10}}
        />

        <input
          placeholder="Password"
          type="password"
          value={pass}
          onChange={(e)=>setPass(e.target.value)}
          style={{width:"100%",padding:12,marginBottom:20}}
        />

        <button
          onClick={signup}
          style={{
            width:"100%",
            padding:12,
            background:"#22c55e",
            border:"none",
            color:"white",
            fontWeight:"bold",
            cursor:"pointer",
            borderRadius:8
          }}
        >
          Create Account
        </button>

      </div>

    </div>
  )
}