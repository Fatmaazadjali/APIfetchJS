

let userInput = prompt("Enter your username:");
const url = `https://api.github.com/users/${userInput}`;
fetch(url)
.then (response => response.json())
.then (json => console.log(json) )
.catch(err => console.log(err))


