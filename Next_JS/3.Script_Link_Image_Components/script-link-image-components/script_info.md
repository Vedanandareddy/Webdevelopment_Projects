### **Next.js `<Script>` Tag: The Essential 20% That Covers 80% of Its Use** 🚀  

The **`next/script`** component is an optimized way to load third-party scripts in Next.js, improving performance by controlling when and how scripts are loaded.  

---

## **📌 1. Basic Usage**  
```tsx
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script src="https://example.com/script.js" />
      <h1>Welcome to Next.js</h1>
    </>
  );
}
```
✅ Loads the script **in the background** without blocking page rendering.

---

## **📌 2. Script Loading Strategies (`strategy`)**  
The `strategy` prop controls **when the script is executed**:  

### **📍 `beforeInteractive` → Blocks Rendering (Rarely Used)**
```tsx
<Script src="https://example.com/script.js" strategy="beforeInteractive" />
```
🔹 Loads **before** the page renders (for essential scripts like auth SDKs).  

### **📍 `afterInteractive` (Default) → Loads After Page Renders**
```tsx
<Script src="https://example.com/script.js" strategy="afterInteractive" />
```
🔹 Loads after the page is **interactive** (default & recommended).  

### **📍 `lazyOnload` → Loads When Browser is Idle**
```tsx
<Script src="https://example.com/script.js" strategy="lazyOnload" />
```
🔹 Loads **only when the browser is idle** (good for analytics).  

---

## **📌 3. Inline Scripts (Without External File)**
```tsx
<Script id="custom-script">
  {`console.log("Hello from inline script!");`}
</Script>
```
✅ Useful for **small custom scripts** without needing an external file.  

---

## **📌 4. Example: Optimized Google Analytics**
```tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA-TRACKING-ID"
  strategy="lazyOnload"
/>
<Script id="google-analytics" strategy="lazyOnload">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA-TRACKING-ID');
  `}
</Script>
```
✅ Loads Google Analytics **without blocking page performance**.  

---

### **🎯 TL;DR (The 80/20 Rule)**
- ✅ Use `<Script>` instead of `<script>` for **optimized loading**.  
- ✅ Use `strategy="afterInteractive"` (default) for most scripts.  
- ✅ Use `strategy="lazyOnload"` for **non-essential** scripts (e.g., analytics).  
- ✅ Use **inline scripts** with `id` for small JavaScript snippets.  

Would you like a real-world example, like handling a chatbot script? 🚀