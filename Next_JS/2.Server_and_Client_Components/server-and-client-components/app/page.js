import Image from "next/image";
import fs from "fs/promises"
import Navbar from "@/components/Navbar";

export default  async function Home() {
  let a = await fetch("https://jsonplaceholder.typicode.com/todos/1")
  let data=await a.json()
  return (
    <>
    <Navbar/>
    <div>This is by default executed on server side and converted to html and sent to the client side {data.title} </div>
    </>
  );
}



// client side is used to get data from db  and maintain secrecy of database queries , user authenication , secret api keys and execute file handling 


// A hybrid component can be made where it contains server and client components  , for this components that needs to executed on server should be seperate and added to the main client component this makes them hybrid  
