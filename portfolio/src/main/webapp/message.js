// container to display the quotes
const messageContainer = document.getElementById("msg-container")

// fetches quotes from the server
async function getQuote() {
    const response = await fetch("/hello");
    const data = await response.json();

    // generate a random value between 0 - 2
    const rand = Math.floor(Math.random() * 3);

    console.log(data[rand])
    messageContainer.innerText = data[rand];
}

// execute the getQuote function after the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  getQuote();
})