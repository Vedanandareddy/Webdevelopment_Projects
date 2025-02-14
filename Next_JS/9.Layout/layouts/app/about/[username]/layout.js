export default async function DashboardLayout({ children, params }) {
    // dynamic params can be accesed by the layout 
    const { username } = await params
   
    return (
      <section>
        <header>
          <h1>Welcome to {username}'s information</h1>
        </header>
        <main>{children}</main>
      </section>
    )
  }

//   applied to all the children components in it 

