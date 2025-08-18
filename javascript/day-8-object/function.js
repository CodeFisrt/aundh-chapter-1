// Synchronous (one after another)
console.log("Task 1");
console.log("Task 2");

// Asynchronous (setTimeout simulates a delay)
console.log("Start"); 
setTimeout(() => 
    console.log("Async Task Done"), 
2000);
console.log("End");



function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 2000);
}

fetchData((result) => {
  console.log(result);
});
