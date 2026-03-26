"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function SignupPage(){

const router = useRouter()

const [email,setEmail] = useState("")
const [pass,setPass] = useState("")

function signup(){

if(!email || !pass){
alert("Fill all fields")
return
}

localStorage.setItem("user", JSON.stringify({email,pass}))

alert("Account Created ✅")

router.push("/login")

}

return(

<div style={{
height:"100vh",
display:"flex",
justifyContent:"center",
alignItems:"center",
background:"#0f172a"
}}>

<div style={{
background:"#1e293b",
padding:40,
borderRadius:12,
width:300,
boxShadow:"0 0 20px rgba(0,0,0,0.5)"
}}>

<h2 style={{color:"white"}}>Create Account</h2>

<input
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
style={{width:"100%",padding:10,marginTop:10}}
/>

<input
placeholder="Password"
type="password"
value={pass}
onChange={(e)=>setPass(e.target.value)}
style={{width:"100%",padding:10,marginTop:10}}
/>

<button
onClick={signup}
style={{
marginTop:15,
width:"100%",
padding:10,
background:"#22c55e",
border:"none",
color:"white",
cursor:"pointer",
borderRadius:6
}}
>
Create Account
</button>

</div>

</div>

)

}