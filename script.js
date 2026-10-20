const formulario = document.querySelector("#formulario");
const campo = document.querySelector("#texto");
const mensagens = document.querySelector("#mensagens");
function adicionarMensagem(texto, tipo) {
const paragrafo = document.createElement("p");
paragrafo.textContent = texto;
paragrafo.className = tipo;
mensagens.appendChild(paragrafo);
mensagens.scrollTop = mensagens.scrollHeight;
}
formulario.addEventListener("submit", function (evento) {
evento.preventDefault();
const texto = campo.value.trim();
if (texto.toLowerCase() === "oi") {
adicionarMensagem("Bot: Olá! Tudo bem?", "bot");
} else {
adicionarMensagem("Bot: Recebi sua mensagem!", "bot");
}
adicionarMensagem("Você: " + texto, "usuario");
adicionarMensagem("Bot: Seja bem-vindo!", "bot");
campo.value = "";
campo.focus();
});