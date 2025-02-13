export default async function Profile({ params }) {
    let p=await params
    return <div>{`Hello ${p.username}`}</div>;
  }
  
