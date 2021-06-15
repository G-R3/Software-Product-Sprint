// container to display the quotes
const messageContainer = document.getElementById("msg-container")

const setRandomQuote = (data) => {
    let rand = Math.floor(Math.random() * data.length);
    messageContainer.innerText = data[rand];
}

// fetches quotes from the server
async function getQuote() {
    const response = await fetch("/hello");
    const data = await response.json();

    setRandomQuote(data);

    setInterval(()=> {
        setRandomQuote(data);
    },2000)
}

// execute the getQuote function after the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  getQuote();
})