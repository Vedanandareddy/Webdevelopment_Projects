import Image from "next/image";
import Script from "next/script";

export default  async function Home() {
  // console.log("Script is executing")
  // // only execute on server side as it is a server side 
  // let data = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
  //   cache: 'no-store', // Prevents Next.js from caching the response and making the page as static which does not show any server console logs
  // });
  // let pdata= await data.json()
  // console.log(pdata)



  return ( <>
{/* <Script>
  {console.log("Script Running ...")}
</Script> */}
  
<div className="h-[50vh] bg-red-600 relative">
<Image  fill    className=" object-cover object-center "  src="https://media.istockphoto.com/id/1161878589/photo/bueatiful-tea-plantation-on-mountain.jpg?s=2048x2048&w=is&k=20&c=S3Zow4qlkOvWySLGoM4MCERydeHBxRbQUjnSKH2vbNY=" alt="" />
  </div>

 
{/* width={500} height={300}  */}









</>
  );
}


// Props
// Here's a summary of the props available for the Script Component:

// Prop	Example	Type	Required
// src	src="http://example.com/script"	String	Required unless inline script is used
// strategy	strategy="lazyOnload"	String	-
// onLoad	onLoad={onLoadFunc}	Function	-
// onReady	onReady={onReadyFunc}	Function	-
// onError	onError={onErrorFunc}	Function	-




// strategy
// The loading strategy of the script. There are four different strategies that can be used:

// beforeInteractive: Load before any Next.js code and before any page hydration occurs.
// afterInteractive: (default) Load early but after some hydration on the page occurs.
// lazyOnload: Load during browser idle time.

