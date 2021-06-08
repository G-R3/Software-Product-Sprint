const messageContainer = document.getElementById("msg-container")
async function getMessage() {
    const response = await fetch("/hello");
    const data = await response.text();

    console.log(response);
    console.log(data);
    messageContainer.innerText = data;
}