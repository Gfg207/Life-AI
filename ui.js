// VRAM Monitor
let vram = 75;
setInterval(() => {
  vram = Math.max(10, Math.min(99, vram + (Math.random() * 10 - 5)));
  document.getElementById("vramValue").textContent = vram.toFixed(0) + "%";
}, 1000);

// Language Matrix
const languages = ["PL", "EN", "DE", "ES", "FR"];
let langIndex = 0;
setInterval(() => {
  langIndex = (langIndex + 1) % languages.length;
  document.getElementById("lang").textContent = languages[langIndex];
}, 3000);

// Training Terminal
const terminal = document.getElementById("terminalOutput");
function log(msg) {
  terminal.textContent += "\n" + msg;
  terminal.scrollTop = terminal.scrollHeight;
}

setInterval(() => {
  const loss = (Math.random() * 0.1).toFixed(4);
  const tokens = Math.floor(Math.random() * 50000);
  log(`[TRAIN] loss=${loss} tokens=${tokens}`);
}, 2000);
