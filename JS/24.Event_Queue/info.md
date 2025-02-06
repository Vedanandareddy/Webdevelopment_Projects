Call Stack : A stack where JavaScript keeps track of function calls. It executes code in a synchronous manner (one at a time).
Event Queue (Task Queue) : A queue where asynchronous tasks (like setTimeout, setInterval, and I/O events) are placed when they are ready to be executed.
Microtasks Queue : A higher-priority queue for microtasks like Promise callbacks.
Event Loop : Continuously checks the call stack. If the stack is empty, it moves tasks from the event queue (or microtasks queue) to the call stack for execution.



when set interval is called its call back is added to the task queue after every given time untill its cleared 
if main thread is busy it stays in the task queue untill its free 
if the main thread is free the event loop sends the tasks from the task queue to the main thread to execute  the callback

these async timeinterval,timeout are run using webapi in parallel unrelated to the mainthread and after their callbacks  are added to the task queue 
and event loop executes this if the mainthread is free 

