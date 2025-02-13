import { NextResponse } from "next/server";
 
export async function POST(request) {
    let data=await request.json()
    console.log(data)
    return Response.json({message:"Received",data:data})

}



// ✔ Express.js needs express.json() because it doesn’t parse request bodies by default.
// ✔ Next.js automatically parses JSON, so req.body is available directly in the Pages Router or via await req.json() in the App Router.
// ✔ Manual parsing is needed for non-JSON payloads like text or form data.

// 🚀 Next.js makes API routes simpler and faster without extra middleware!
 
 
 // When is "use server" Needed?
//✅ Needed in Client Components when using Server Actions.
//❌ Not Needed in API Routes (app/api/.../route.js) because they always run on the server.

