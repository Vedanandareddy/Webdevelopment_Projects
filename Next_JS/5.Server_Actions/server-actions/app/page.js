"use client"
import Image from "next/image";
import { handlesubmit } from "@/actions/form";
import { useRef } from "react";


export default function Home() {
  const formref = useRef()



  return (
    <form ref={formref} action={async (e)=>{ handlesubmit(e);formref.current.reset() }}>
      <div>
        <label htmlFor="name">Name</label>
        <input name="name" id="name" className="text-black " type="text" />
      </div>

      <div>
        <label htmlFor="add">Adress</label>
        <input  name="address" id="add" className="text-black " type="text" />
      </div>

      <button>Hello MF's</button>

    </form>
  );
}



// ✅ Use "use server" at the function definition level, not inside a function
// ✅ Pass formData as an argument to access input values
// ✅ Ensure all form inputs have name attributes
// ✅ Button should have type="submit" for form submission

// 🚀 Now, the form will submit correctly, and the server action will log the data!
