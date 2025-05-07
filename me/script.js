
setTimeout(() => {
  document.getElementById("floatingBox").innerText = "It’s a special day...";
}, 4000);

setTimeout(() => {
  document.getElementById("page1").style.display = "none";
  document.getElementById("page2").style.display = "flex";
  launchHearts();
}, 8000);

function launchHearts() {
  const container = document.getElementById('heartsContainer');
  for (let i = 0; i < 50; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 2 + Math.random() * 3 + "s";
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }
  setInterval(launchHearts, 3000);
}
