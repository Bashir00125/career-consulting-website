// =========================================
// BOLAJI BASHIR CAREER CONSULTING
// PROFESSIONAL WEBSITE JAVASCRIPT
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    // ===========================
    // MOBILE MENU
    // ===========================

    const menuBtn = document.querySelector(".menu-btn");
    const navbar = document.querySelector(".navbar");

    if (menuBtn && navbar) {

        menuBtn.addEventListener("click", function () {

            navbar.classList.toggle("active");

        });

    }

    // ===========================
    // CLOSE MENU AFTER CLICK
    // ===========================

    document.querySelectorAll(".navbar a").forEach(link => {

        link.addEventListener("click", function () {

            navbar.classList.remove("active");

        });

    });

    // ===========================
    // HEADER SHADOW
    // ===========================

    const header = document.querySelector(".header");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 40) {

            header.style.boxShadow = "0 8px 25px rgba(0,0,0,.15)";

        } else {

            header.style.boxShadow = "0 2px 15px rgba(0,0,0,.08)";

        }

    });

    // ===========================
    // CONTACT FORM
    // ===========================

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (e) {

            e.preventDefault();

            alert("Thank you for contacting Bolaji Bashir Career Consulting. I will get back to you as soon as possible.");

            contactForm.reset();

        });

    }

    // ===========================
    // SCROLL ANIMATION
    // ===========================

    const cards = document.querySelectorAll(
        ".service-card, .portfolio-card, .faq-item"
    );

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    }, {

        threshold: 0.15

    });

    cards.forEach(function (card) {

        card.style.opacity = "0";

        card.style.transform = "translateY(40px)";

        card.style.transition = ".6s ease";

        observer.observe(card);

    });

});

// =========================================
// BACK TO TOP BUTTON
// =========================================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topButton";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "25px";
topButton.style.right = "25px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#0A66C2";
topButton.style.color = "#fff";
topButton.style.fontSize = "24px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.boxShadow = "0 10px 25px rgba(0,0,0,.2)";
topButton.style.zIndex = "999";

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});