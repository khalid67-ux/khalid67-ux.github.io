// ================= PAGE LOAD =================
console.log("Portfolio Loaded Successfully");

// ================= MULTI TYPING EFFECT =================
const roles = ["Web Developer", "Programmer", "AI Enthusiast"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentRole = roles[roleIndex];
    const typingElement = document.getElementById("typing-role");

    if (!typingElement) return;

    if (!isDeleting) {
        typingElement.innerHTML = currentRole.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000); // pause
            return;
        }
    } else {
        typingElement.innerHTML = currentRole.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

// ================= RUN ON LOAD =================
window.onload = function () {
    typeEffect();
};

// ================= SMOOTH SCROLL =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
