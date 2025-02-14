In Next.js (App Router), layouts are React components that wrap around pages and maintain state or UI consistency across multiple pages. They help in structuring and reusing UI elements like navigation bars, footers, and sidebars.

✅ Persistent UI → Keep elements (e.g., navbar) unchanged while navigating.
✅ Better Performance → Avoid re-rendering components like headers/footers on every page change.
✅ Improved Code Structure → Separate layouts from page content for better maintainability.
✅ Automatic Nested Layouts → Each route can inherit layouts from parent folders.




Layout Props

children (required)
Layout components should accept and use a children prop. During rendering, children will be populated with the route segments the layout is wrapping. These will primarily be the component of a child Layout (if it exists) or Page, but could also be other special files like Loading or Error when applicable.

params (optional)
A promise that resolves to an object containing the dynamic route parameters object from the root segment down to that layout.



