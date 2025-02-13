1️⃣ Basic Routing – The Foundation of Navigation
The most common task in React Router is defining routes and linking pages.

Example: Simple Routing



2️⃣ Dynamic Routes – Handling Changing Data in URLs
Sometimes, routes contain dynamic parameters, like user profiles or product details
Use Case:
User profiles: /user/john
Product details: /product/123
Example: A social media app where each user has a unique profile URL.




3️⃣ Navigation – Redirecting Users Programmatically
Instead of using <Link>, sometimes you need to navigate programmatically, like after login.
3️⃣ Navigation – Redirecting Users Programmatically
Instead of using <Link>, sometimes you need to navigate programmatically, like after login.

Example: Redirect After Login
Example: Redirect After Login



Visiting /dashboard → Shows Dashboard only.
Visiting /dashboard/profile → Keeps Dashboard and loads Profile inside <Outlet />.
Visiting /dashboard/settings → Keeps Dashboard and loads Settings inside <Outlet />.
The Dashboard remains visible, and only the content inside <Outlet /> changes.




Why is NavLink used in React Router?
NavLink is used instead of Link when you want to apply styling to the active link. It automatically applies an "active" class (or custom styling) to the link when the current URL matches its to path.