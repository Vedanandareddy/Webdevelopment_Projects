"use server"
export const  handlesubmit=async (e)=>{
  console.log("Data Submitted")
  console.log(`Name is ${e.get("name")}`)
  console.log(`Adress is ${e.get("address")}`)

}