// Page load message
console.log("Portfolio Loaded Successfully");

// ================= TYPING EFFECT =================
const text = "Web Developer";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing-role").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

// Run typing after page load
window.onload = function () {
    if (document.getElementById("typing-role")) {
        typeEffect();
    }
};

// ================= SMOOTH SCROLL (extra safe) =================
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
