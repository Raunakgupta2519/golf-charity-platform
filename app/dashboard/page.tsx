"use client"

import { useState } from "react"
import confetti from "canvas-confetti"

export default function Dashboard(){

const [score,setScore] = useState("")
const [scores,setScores] = useState<number[]>([])
const [winner,setWinner] = useState<number | null>(null)
const [dark,setDark] = useState(false)

function addScore(){

if(!score) return

let num = Number(score)

let arr = [num,...scores]

if(arr.length>10) arr = arr.slice(0,10)

setScores(arr)
setScore("")

}

function runDraw(){

if(scores.length===0) return alert("No players")

let win = scores[Math.floor(Math.random()*scores.length)]

setWinner(win)

confetti({
particleCount:150,
spread:80
})

}

return(

<div style={{
minHeight:"100vh",
background: dark 
? "linear-gradient(135deg,#020617,#0f172a)"
: "linear-gradient(135deg,#e2e8f0,#f8fafc)",
padding:40,
fontFamily:"Inter, sans-serif",
transition:"0.4s"
}}>

{/* NAVBAR */}

<div style={{
display:"flex",
justifyContent:"space-between",
alignItems:"center",
marginBottom:40
}}>

<h1 style={{
fontSize:34,
fontWeight:800,
letterSpacing:1
}}>
🏌️ Golf Charity
</h1>

<div style={{display:"flex",gap:10}}>

<button
onClick={()=>setDark(!dark)}
style={{
padding:"10px 20px",
borderRadius:10,
border:"none",
background:"#22c55e",
color:"white",
cursor:"pointer"
}}>
Theme
</button>

<button
onClick={()=>location.href="/login"}
style={{
padding:"10px 20px",
borderRadius:10,
border:"none",
background:"#ef4444",
color:"white",
cursor:"pointer"
}}>
Logout
</button>

</div>

</div>

{/* GRID */}

<div style={{
display:"grid",
gridTemplateColumns:"1fr 1fr",
gap:30
}}>

{/* SCORE CARD */}

<div style={{
background:"rgba(255,255,255,0.7)",
backdropFilter:"blur(10px)",
padding:30,
borderRadius:20,
boxShadow:"0 25px 50px rgba(0,0,0,0.15)"
}}>

<h2 style={{fontSize:22,fontWeight:700}}>Add Player Score</h2>

<input
value={score}
onChange={(e)=>setScore(e.target.value)}
placeholder="Enter score"
style={{
width:"100%",
padding:14,
marginTop:15,
borderRadius:12,
border:"1px solid #ddd",
fontSize:16
}}
/>

<button
onClick={addScore}
style={{
width:"100%",
marginTop:15,
padding:14,
borderRadius:12,
border:"none",
background:"linear-gradient(90deg,#020617,#334155)",
color:"white",
fontWeight:700,
cursor:"pointer",
transform:"scale(1)",
transition:"0.2s"
}}
onMouseDown={(e)=>e.currentTarget.style.transform="scale(0.96)"}
onMouseUp={(e)=>e.currentTarget.style.transform="scale(1)"}
>
Submit Score
</button>

<h3 style={{marginTop:25}}>Leaderboard</h3>

{scores
.sort((a,b)=>b-a)
.map((s,i)=>(
<div key={i} style={{
display:"flex",
justifyContent:"space-between",
padding:12,
marginTop:6,
borderRadius:10,
background:i===0?"#22c55e":"#f1f5f9",
color:i===0?"white":"black",
fontWeight:600
}}>
<span>Player {i+1}</span>
<span>{s}</span>
</div>
))}

</div>

{/* DRAW CARD */}

<div style={{
background:"rgba(255,255,255,0.7)",
backdropFilter:"blur(10px)",
padding:30,
borderRadius:20,
boxShadow:"0 25px 50px rgba(0,0,0,0.15)"
}}>

<h2 style={{fontSize:22,fontWeight:700}}>Monthly Charity Draw</h2>

<p style={{color:"#64748b"}}>Random winner will be selected</p>

<button
onClick={runDraw}
style={{
width:"100%",
marginTop:20,
padding:16,
borderRadius:14,
border:"none",
background:"linear-gradient(90deg,#22c55e,#16a34a)",
color:"white",
fontWeight:800,
fontSize:18,
cursor:"pointer"
}}>
🎯 Run Draw
</button>

{winner && (

<div style={{
marginTop:25,
padding:20,
borderRadius:15,
background:"#020617",
color:"white",
textAlign:"center",
animation:"pop 0.4s"
}}>
🏆 Winner Score: {winner}
</div>

)}

</div>

</div>

</div>

)
}