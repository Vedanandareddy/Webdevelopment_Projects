Does express.json() Fire on All Requests?
Yes, but it only processes requests where:

The Content-Type header is set to application/json.
The request has a body (e.g., POST, PUT, PATCH).
For other types of requests (e.g., GET, DELETE), express.json() will still execute, but it won't do anything meaningful because these requests typically don't have a body.