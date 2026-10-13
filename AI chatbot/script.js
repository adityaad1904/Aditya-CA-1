function sendMessage() {

    var input = document.getElementById("message");
    var text = input.value;

    if (text == "") {
        alert("Please enter a message");
        return;
    }

    var chat = document.getElementById("chat");

    chat.innerHTML += "<p>You: " + text + "</p>";

    chat.innerHTML += "<p>My AI: Hello! How can I help you?</p>";

    document.getElementById("history").innerHTML +=
        "<p>" + text + "</p>";

    input.value = "";
}


function newChat() {

    document.getElementById("chat").innerHTML =
        "<h2>How can I help you?</h2>";

    document.getElementById("history").innerHTML = "";

}
