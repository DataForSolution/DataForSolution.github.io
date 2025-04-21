document.getElementById("sendButton").addEventListener("click", async () => {
    const userMessage = document.getElementById("userInput").value;
    if (!userMessage) return;

    // Append the user's message to the chat window
    const chatWindow = document.getElementById("chatWindow");
    chatWindow.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;

    // Send the message to the server
    try {
        const response = await fetch("http://localhost:3000/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: userMessage }),
        });

        const data = await response.json();
        const botReply = data.reply || "Sorry, I didn't understand that.";

        // Append the bot's reply to the chat window
        chatWindow.innerHTML += `<p><strong>Bot:</strong> ${botReply}</p>`;
    } catch (error) {
        console.error("Error communicating with the chatbot server:", error);
        chatWindow.innerHTML += `<p><strong>Bot:</strong> There was an error connecting to the server.</p>`;
    }

    // Clear the input field
    document.getElementById("userInput").value = "";
});
