import React from 'react'

const profile = () => {
  return (
    <div>
      Hello this is profile page
    </div>
  )
}

export default profile



// Your current approach has a mistake in using useParams(). Since you're using the App Router (app directory), you should use server-side props (by default) instead of useParams(), which is a client-side hook.


// 🔹 Correct Way to Handle /profile/:username in Next.js (App Router)

// file should be placed in  app/profile/[username]/page.js

// you should access dynamic route parameters directly from the function parameters instead of using useParams().

// ✅ Correct Code:
// javascript
// Copy
// Edit
// export default function Profile({ params }) {
//   return (
//     <div>
//       {`Hello ${params.username}`}
//     </div>
//   );
// }


// 🔹 Explanation
// Dynamic Folder Structure:

// app/profile/[username]/page.js → [username] is a dynamic segment.
// params.username automatically contains the value from the URL (/profile/sam → { username: "sam" }).
// Why Not useParams()?

// useParams() is only needed inside client components.
// By default, Next.js components in app are Server Components, and they get params as a prop.

