document.addEventListener("DOMContentLoaded", function () {
  let sendBtn = document.getElementById("send-btn");
  let userInput = document.getElementById("user-input");
  let chatLog = document.getElementById("chat-log");

  function sendMessage() {
    let message = userInput.value.trim();
    if (message === "") return;

    let userMessage = document.createElement("p");
    userMessage.textContent = "Вы: " + message;
    userMessage.classList.add("user-message");
    chatLog.appendChild(userMessage);

    // Массив случайных ответов
    let responses = [
      "Интересный вопрос!",
      "Я пока учусь, но стараюсь помочь!",
      "Можешь рассказать подробнее?",
      "Звучит здорово!",
      "Хороший вопрос, давай подумаем вместе.",
    ];

    // Выбираем случайный ответ
    let botMessage = document.createElement("p");
    botMessage.textContent =
      "ChatGPT: " + responses[Math.floor(Math.random() * responses.length)];
    botMessage.classList.add("bot-message");
    chatLog.appendChild(botMessage);

    userInput.value = "";
    chatLog.scrollTop = chatLog.scrollHeight;
  }

  sendBtn.addEventListener("click", sendMessage);
  userInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });
});
