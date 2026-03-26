"use client"

import { useRouter } from "next/navigation"

export default function Home(){

const router = useRouter()

return(

<div style={{
height:"100vh",
display:"flex",
alignItems:"center",
justifyContent:"center",
background:"linear-gradient(135deg,#0f172a,#1e293b)",
fontFamily:"sans-serif"
}}>

<div style={{
background:"#111827",
padding:50,
borderRadius:20,
textAlign:"center",
boxShadow:"0 20px 60px rgba(0,0,0,0.6)",
width:380
}}>

<h1 style={{
color:"white",
fontSize:32,
marginBottom:10,
letterSpacing:1
}}>
🏌️ Golf Charity Platform
</h1>

<p style={{
color:"#9ca3af",
marginBottom:30,
fontSize:15
}}>
Play Golf • Win Draw • Donate for Good Cause
</p>

<button
onClick={()=>router.push("/signup")}
style={{
width:"100%",
padding:14,
background:"linear-gradient(90deg,#22c55e,#16a34a)",
border:"none",
borderRadius:10,
color:"white",
fontSize:16,
cursor:"pointer",
fontWeight:"bold",
transition:"0.3s"
}}
>
Subscribe Now 🚀
</button>

<button
onClick={()=>router.push("/login")}
style={{
width:"100%",
padding:14,
marginTop:15,
background:"#374151",
border:"none",
borderRadius:10,
color:"white",
fontSize:15,
cursor:"pointer"
}}
>
Already Member ? Login
</button>

</div>

</div>

)

}