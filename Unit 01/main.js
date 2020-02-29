document.querySelector('#company').innerText = "Trevor's Bed and Breakfast"

document.querySelector('#slogan').innerText = "Best B&B in Portland, Oregon!"

let userName = prompt("What is your name?")

// let message = "Hello " + userName + ", welcome to the future of B&B!"

let message  = `Hello ${userName}, welcome to the future of B&B!`

document.querySelector('#greeting').innerText = message
