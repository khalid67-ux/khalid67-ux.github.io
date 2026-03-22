// ================= PAGE LOAD =================
document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio Loaded Successfully 🚀");

    typeEffect();
    smoothScroll();
    setActiveNav(); // ✅ NEW
});


// ================= AUTO ACTIVE NAVBAR =================
function setActiveNav() {
    const links = document.querySelectorAll("nav ul li a");

    let currentPage = window.location.pathname.split("/").pop();

    if (currentPage === "") {
        currentPage = "index.html";
    }

    links.forEach(link => {
        const linkPage = link.getAttribute("href");

        // ❌ Skip Home button
        if (linkPage === "index.html") return;

        // ✅ Activate others
        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });
}


// ================= MULTI TYPING EFFECT =================
const roles = ["Web Developer", "Programmer", "AI Enthusiast"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const typingElement = document.getElementById("typing-role");

    if (!typingElement) return;

    const currentRole = roles[roleIndex];

    if (!isDeleting) {
        typingElement.innerHTML = currentRole.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
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


// ================= CERTIFICATE POPUP =================
function openImage(src) {
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popup-img");

    if (popup && popupImg) {
        popup.style.display = "flex";
        popupImg.src = src;
    }
}

function closeImage() {
    const popup = document.getElementById("popup");
    if (popup) {
        popup.style.display = "none";
    }
}


// ================= CLOSE POPUP CLICK OUTSIDE =================
document.addEventListener("click", function (e) {
    const popup = document.getElementById("popup");

    if (popup && e.target === popup) {
        popup.style.display = "none";
    }
});


// ================= SMOOTH SCROLL =================
function smoothScroll() {
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
}
