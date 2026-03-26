"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function LoginPage(){

const router = useRouter()

const [email,setEmail] = useState("")
const [pass,setPass] = useState("")

function login(){

const user = localStorage.getItem("user")

if(!user){
alert("No account found")
return
}

const data = JSON.parse(user)

if(data.email === email && data.pass === pass){

localStorage.setItem("auth","true")

router.push("/dashboard")

}else{
alert("Wrong credentials")
}

}

return(

<div style={{
height:"100vh",
display:"flex",
justifyContent:"center",
alignItems:"center",
background:"#020617"
}}>

<div style={{
background:"#1e293b",
padding:40,
borderRadius:12,
width:300,
boxShadow:"0 0 25px rgba(0,0,0,0.6)"
}}>

<h2 style={{color:"white"}}>Login</h2>

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
onClick={login}
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
Login
</button>
<p style={{color:"white",marginTop:15,textAlign:"center"}}>
No account ?
</p>

<button
onClick={()=>router.push("/signup")}
style={{
marginTop:8,
width:"100%",
padding:10,
background:"#6366f1",
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