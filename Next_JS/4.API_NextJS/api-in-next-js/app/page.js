"use client"
import Image from "next/image";


export default function Home() {
  let handleclick= async()=>{
    let data = await fetch("/api/req", {
      method: "POST",
      body: JSON.stringify({
        userId: 1,
        title: "Fix my bugs",
        completed: false
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    let pdata=await data.json()
    console.log(pdata)
  }
  
  return (
  <>
  <div>This is div</div>
  <button onClick={handleclick}>Click me to post </button>
  </>
  );
}
