document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById("slider");
  
    slider.addEventListener("input", function () {
      const value = (this.value - this.min) / (this.max - this.min);
      this.style.background = `linear-gradient(to right, red, yellow ${value * 100}%, white ${value * 100}%, white)`;
    });
    const balls = document.querySelectorAll(".ball");
    let bubbleCount = balls.length; // You can initialize this with the number of balls if they are not all the same class
  
    balls.forEach((ball) => {
      ball.addEventListener("click", function () {
        this.classList.add("pop");
        setTimeout(() => {
          this.remove();
          bubbleCount--;
          if (bubbleCount === 0) {
            document.getElementById("overlay").classList.remove("hidden");
            document.getElementById("congrats").classList.remove("hidden");
            launchConfetti();
          }
        }, 300);
      });
    });
  
    function launchConfetti() {
      const confettiContainer = document.getElementById("confetti");
      for (let i = 0; i < 100; i++) {
        const confetti = document.createElement("div");
        confetti.className = "confetti-piece";
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confetti.style.animationDelay = `${Math.random() * 2}s`;
        confetti.style.animationName = "fall";
        confettiContainer.appendChild(confetti);
      }
    }
  });
  