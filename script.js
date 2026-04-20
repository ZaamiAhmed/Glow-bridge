document.addEventListener("DOMContentLoaded", () => {
    // Select all elements with the fade-in-up class
    const fadeElements = document.querySelectorAll(".fade-in-up");

    // Create an Intersection Observer
    const observerOptions = {
        root: null, // viewport
        rootMargin: "0px",
        threshold: 0.15 // trigger when 15% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add visible class to trigger CSS animation
                entry.target.classList.add("visible");
                // Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe each fade element
    fadeElements.forEach(el => {
        observer.observe(el);
    });

    // Mobile Menu Toggle
    const menuBtn = document.querySelector(".mobile-menu-btn");
    const navLinks = document.querySelector(".nav-links");
    const navActions = document.querySelector(".nav-actions");

    if(menuBtn) {
        menuBtn.addEventListener("click", () => {
            if (navLinks.style.display === "flex") {
                navLinks.style.display = "none";
                navActions.style.display = "none";
            } else {
                navLinks.style.display = "flex";
                navLinks.style.flexDirection = "column";
                navLinks.style.position = "absolute";
                navLinks.style.top = "100%";
                navLinks.style.left = "0";
                navLinks.style.right = "0";
                navLinks.style.background = "rgba(8, 9, 11, 0.95)";
                navLinks.style.padding = "2rem";
                
                navActions.style.display = "flex";
                navActions.style.flexDirection = "column";
                navActions.style.position = "absolute";
                navActions.style.top = "calc(100% + 150px)";
                navActions.style.left = "0";
                navActions.style.right = "0";
                navActions.style.background = "rgba(8, 9, 11, 0.95)";
                navActions.style.padding = "2rem";
            }
        });
    }
});
