import { useState } from 'react'
import './App.css'
import { useForm } from "react-hook-form";



function App() {

  const { register, handleSubmit,setError, watch, formState: { errors } } = useForm();

  const onSubmit =(async (data) =>{ 
     console.log(data)

     let res=await fetch("http://localhost:3000", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
  

    let response=await res.json()
    // res.text() Returns a Promise that resolves to the parsed object.
    console.log(response)

  



    //  if (data.Username=="Anand"){  
    //   //  we can add specific requirements and throw custom errors and render them conditionally
    //   setError("myform",{message:"The user is blocked"}) // throw custom errors by specifying the type of error and error message 
    //   console.log("Sorry this user is blocked , you cant login") 
    //  }
  
    });

  // when the form is submitted it executes the onSubmit function which contains the data submitted 

  // console.log(watch("example")); // watch input value by passing the name of it  and triger rerenders if the value is changed and do conditional rendering based on the changing value


  return (
    <>
     {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */ }
      <form onSubmit={handleSubmit(onSubmit)}>   
       
        {/* register your input into the hook by invoking the "register" function */}
        <input  placeholder='Username' {...register("Username")} />
        <div></div>
        {/* <input type="email"  {...register("EmailId")} /> */}

        {/* include validation with required or other standard HTML validation rules */}
        <input type='password' {...register("Password", { required: {value: true, message:"This Field is required "}  , minLength:{value:8 , message:"Password should contain minimum 8 characters"}})} />
        {/* by specifying  the validation needed it doesnt let the form submit if the validation criteria is not met  */}

        {/* errors will return when field validation fails  */}
        {errors.Password && <span>{errors.Password.message}</span>}
        {/* for each  validation we can attach a message and value to validate and by using errors.field.message we can access the error message related to specified validation */}
        {errors.myform && <span>{errors.myform.message}</span>}
        <input type="submit" />
      </form>

    </>
  )
}

export default App
