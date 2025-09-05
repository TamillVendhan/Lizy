function createHeart() {
  const heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.style.position = "absolute";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.fontSize = Math.random() * 30 + 20 + "px";
  heart.style.top = "100%";
  heart.style.animation = "floatUp 4s linear forwards";
  heart.style.color = `hsl(${Math.random() * 60 + 300}, 80%, 60%)`;
  document.getElementById("hearts").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}

setInterval(createHeart, 300);

function showMessage() {
  const message = document.getElementById("hiddenMessage");
  message.classList.add("show");
  
  // Play romantic song
  const audio = document.getElementById("romantic-song");
  audio.play().catch((error) => console.log("Audio play failed:", error));

  // Confetti Animation
  const confettiContainer = document.querySelector(".confetti");
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div");
    confetti.style.position = "absolute";
    confetti.style.width = "10px";
    confetti.style.height = "10px";
    confetti.style.background = `hsl(${Math.random() * 360}, 70%, 70%)`;
    confetti.style.left = Math.random() * 100 + "%";
    confetti.style.top = Math.random() * 100 + "%";
    confetti.style.animation = `confettiFall ${Math.random() * 2 + 1}s linear`;
    confettiContainer.appendChild(confetti);
    setTimeout(() => confetti.remove(), 3000);
  }
}

function closeModal() {
  const message = document.getElementById("hiddenMessage");
  message.classList.remove("show");
  const audio = document.getElementById("romantic-song");
  audio.pause();
  audio.currentTime = 0;
}

// Video Carousel
const carouselItems = document.querySelectorAll(".carousel-item");
const prevButton = document.querySelector(".carousel-prev");
const nextButton = document.querySelector(".carousel-next");
let currentIndex = 0;

function showSlide(index) {
  carouselItems.forEach((item, i) => {
    item.classList.toggle("active", i === index);
  });
}

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  showSlide(currentIndex);
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  showSlide(currentIndex);
});

// Floating Animation Keyframes
const style = document.createElement("style");
style.innerHTML = `
  @keyframes floatUp {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(-100vh) rotate(${Math.random() * 360}deg); opacity: 0; }
  }
  @keyframes confettiFall {
    0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
    100% { transform: translateY(100vh) rotate(${Math.random() * 720}deg); opacity: 0; }
  }
`;
document.head.appendChild(style);