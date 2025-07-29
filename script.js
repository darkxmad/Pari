// Floating emojis
const emojis = ["😭", "❤️", "✨", "🌸", "🥺", "🌟"];
const container = document.getElementById("emoji-container");

function createEmoji() {
    const emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.animationDuration = (3 + Math.random() * 2) + "s";
    container.appendChild(emoji);

    setTimeout(() => {
        emoji.remove();
    }, 5000);
}
setInterval(createEmoji, 500);

// Music play button
const music = document.getElementById("bg-music");
const playBtn = document.getElementById("play-btn");

playBtn.addEventListener("click", async () => {
    music.muted = false;
    music.currentTime = 0;
    await music.play();
    playBtn.style.display = "none";
});

// Screen transitions
const screens = document.querySelectorAll(".screen");
const nextButtons = document.querySelectorAll(".next-btn");

let currentScreen = 0;

nextButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        screens[currentScreen].classList.remove("active");
        currentScreen++;
        if (currentScreen < screens.length) {
            screens[currentScreen].classList.add("active");
        }
    });
});
