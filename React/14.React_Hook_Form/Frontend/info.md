Purpose of watch
It monitors form field values.
It triggers re-renders when specific values change.
It can be used for conditional rendering based on field values.


watch("fieldName") → Watches a single field.
watch(["field1", "field2"]) → Watches multiple fields.
watch() → Watches the entire form.
It helps in real-time validation, conditional rendering, and debugging form data.




Method	Purpose
response.json()	Parses JSON response into a JS object
response.text()	Returns the response as a raw text string
response.blob()	Returns binary data (e.g., images, files)
response.arrayBuffer()	Returns raw binary data in an ArrayBuffer
Using .json() ensures that the response is properly formatted before use.



How response.json() Works
response.json() is a built-in method of the Response object that:
Reads the response body as JSON.
Converts it into a JavaScript object.
Returns a Promise that resolves to the parsed object.

