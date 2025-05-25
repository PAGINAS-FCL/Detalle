const messages = [
  "Te amo muchísimo ❤️",
  "Gracias por estar en mi vida 🌟",
  "Eres mi persona favorita 💕",
  "Juntos por siempre 🥰",
  "Tú y yo, para siempre 💖",
  "Tu sonrisa me ilumina 💫",
  "Eres lo mejor que me ha pasado 😍",
  "Cada momento contigo es mágico ✨",
  "Siempre pienso en ti 💭",
  "Mi corazón es tuyo 💘"
];

function createTextBubble() {
  const bubble = document.createElement("div");
  bubble.className = "text-bubble";
  bubble.innerText = messages[Math.floor(Math.random() * messages.length)];

  const left = Math.random() * 80 + 10;
  const top = Math.random() * 80 + 10;

  bubble.style.left = left + "vw";
  bubble.style.top = top + "vh";

  const container = document.getElementById("bubbles-text");
  container.appendChild(bubble);

  setTimeout(() => {
    const rect = bubble.getBoundingClientRect();
    if (rect.right > window.innerWidth) bubble.style.left = `${window.innerWidth - rect.width - 10}px`;
    if (rect.bottom > window.innerHeight) bubble.style.top = `${window.innerHeight - rect.height - 10}px`;
    if (rect.left < 0) bubble.style.left = "10px";
    if (rect.top < 0) bubble.style.top = "10px";
  }, 10);

  setTimeout(() => {
    bubble.remove();
  }, 8000);
}

setInterval(createTextBubble, 500);
