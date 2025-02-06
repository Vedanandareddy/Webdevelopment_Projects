console.log("Script start");

// Interval: Runs every 1 second
const intervalId = setInterval(() => {
  console.log("Interval callback (1s)");
}, 1000);

// Timeout 1: Runs after 2 seconds
setTimeout(() => {
  console.log("Timeout 1 (2s)");
}, 2000);

// Block the main thread for 3 seconds (synchronous)
const start = Date.now();
while (Date.now() - start < 1000) {}

// Timeout 2: Runs after 0 seconds (immediately after the block)
setTimeout(() => {
  console.log("Timeout 2 (0s)");
  clearInterval(intervalId); // Stop the interval
}, 0);

console.log("Script end");