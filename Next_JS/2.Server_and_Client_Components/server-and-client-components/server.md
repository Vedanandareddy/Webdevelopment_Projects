### **Server-Side Actions That Client-Side Cannot Perform in Next.js**  
Client-side components run in the browser and have limitations in terms of security, performance, and access to certain resources. Here are some key actions that **only server components** (or API routes) can perform:  

---

## **🔒 1. Secure Data Fetching (Database Queries)**
- Server components can directly **fetch data from a database** without exposing credentials to the client.
- The client **cannot connect directly** to a database without exposing secrets.

✅ **Allowed (Server Component)**:
```tsx
import { sql } from "@vercel/postgres";

async function ProductList() {
  const products = await sql`SELECT * FROM products`;
  return <div>{JSON.stringify(products)}</div>;
}

export default ProductList;
```

❌ **Not Allowed (Client Component)**:
```tsx
"use client";

async function getData() {
  // ❌ Exposes database credentials if done on the client
  const res = await fetch("https://database.com/query");
}
```

---

## **🔑 2. Accessing Environment Variables (`process.env`)**
- Server components can securely **use environment variables**, while client-side components **cannot access them directly**.

✅ **Allowed (Server Component)**:
```tsx
const apiKey = process.env.API_KEY; // Safe on the server
```

❌ **Not Allowed (Client Component)**:
```tsx
"use client";
console.log(process.env.API_KEY); // ❌ Will be undefined
```
🔹 **Solution:** Use an API route to fetch secrets on the server.

---

## **📡 3. Authentication & Authorization Handling**
- **Server-side authentication** ensures tokens, sessions, and user credentials are not exposed in the browser.
- Client-side cannot validate authentication securely.

✅ **Allowed (Server Component)**:
```tsx
import { getServerSession } from "next-auth";

async function Dashboard() {
  const session = await getServerSession();
  if (!session) return <p>Not authorized</p>;

  return <p>Welcome, {session.user.name}</p>;
}
```

❌ **Not Allowed (Client Component)**:
```tsx
"use client";

// ❌ Storing tokens in local storage is insecure
const token = localStorage.getItem("authToken");
```
🔹 **Solution:** Use server-side authentication (e.g., NextAuth.js).

---

## **📝 4. File System Access (`fs` module)**
- The server can **read/write files** (e.g., logs, CSV exports).
- The client **cannot access the file system** due to security restrictions.

✅ **Allowed (Server Component)**:
```tsx
import fs from "fs";

const logs = fs.readFileSync("server/logs.txt", "utf8");
```

❌ **Not Allowed (Client Component)**:
```tsx
"use client";
const logs = fs.readFileSync("server/logs.txt", "utf8"); // ❌ fs is not available in the browser
```

---

## **💌 5. Sending Emails**
- Sending emails requires **server-side processing** to use services like **nodemailer**.
- The client **cannot send emails directly**.

✅ **Allowed (Server Component)**:
```tsx
import nodemailer from "nodemailer";

async function sendEmail() {
  const transporter = nodemailer.createTransport({ /* SMTP Config */ });
  await transporter.sendMail({ from: "admin@example.com", to: "user@example.com" });
}
```

❌ **Not Allowed (Client Component)**:
```tsx
"use client";
const sendEmail = async () => {
  fetch("/api/send-email"); // Client must call an API route
};
```
🔹 **Solution:** Call an **API route** to send emails from the server.

---

## **🔍 6. Heavy Computation & Background Jobs**
- Expensive computations (e.g., data processing, PDF generation) should **happen on the server**.
- Running heavy tasks on the client **slows down performance**.

✅ **Allowed (Server Component)**:
```tsx
import { expensiveCalculation } from "@/utils/calculate";

export default function Page() {
  const result = expensiveCalculation();
  return <p>Result: {result}</p>;
}
```

❌ **Not Allowed (Client Component)**:
```tsx
"use client";

const result = expensiveCalculation(); // ❌ Blocks UI and reduces performance
```
🔹 **Solution:** Use server-side APIs or worker threads.

---

## **🛠️ 7. Direct Interaction with Third-Party Services (APIs Requiring Secret Keys)**
- APIs that require **private API keys** should be accessed **from the server**.
- Calling such APIs from the client **risks exposing credentials**.

✅ **Allowed (Server Component)**:
```tsx
const response = await fetch("https://secure-api.com/data", {
  headers: { Authorization: `Bearer ${process.env.SECRET_KEY}` },
});
```

❌ **Not Allowed (Client Component)**:
```tsx
"use client";
const response = await fetch("https://secure-api.com/data", {
  headers: { Authorization: `Bearer YOUR_SECRET_KEY` }, // ❌ Key is exposed in browser
});
```
🔹 **Solution:** Use an API route.

---

## **🚀 Summary Table**
| Action | Server Components | Client Components |
|--------|------------------|------------------|
| **Database Queries** | ✅ Yes | ❌ No |
| **Environment Variables (`process.env`)** | ✅ Yes | ❌ No |
| **Authentication & Authorization** | ✅ Yes | ❌ No |
| **File System Access (`fs`)** | ✅ Yes | ❌ No |
| **Sending Emails** | ✅ Yes | ❌ No |
| **Heavy Computation** | ✅ Yes | ❌ No |
| **Secure API Calls** | ✅ Yes | ❌ No |

Would you like a **Next.js API route example** to securely handle client-side requests? 🚀