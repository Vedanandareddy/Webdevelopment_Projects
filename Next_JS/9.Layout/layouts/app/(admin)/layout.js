export default function AboutLayout({ children }) {
    return <>
        <div>Navbar of admin </div>
        {children}
        <div>Footer of admin</div>
        </>
  }


  export const metadata = {
    title: "Admin page",
    description: "Generated for admin  app",
  };


// layout can be used to set metadata,  inner most layouts metadata is applied 
  