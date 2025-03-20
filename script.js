gsap.registerPlugin(ScrollTrigger);

// Animate the .gplate element to animate when the gallery section comes into view
gsap.from(".gplate", {
    opacity: 0,     // Start with opacity 0
    x: -100,        // Start 100px to the left
    y: 100,         // Start 100px down
    duration: 1,    // Animation duration
    ease: "power3.out", // Smooth easing function
    scrollTrigger: {
        trigger: ".galary-section",  // Trigger when .gallary section is in view
        start: "top 10%",  // Start when the top of .gallary reaches the center of viewport
        end: "bottom top",       // End when the top of .gallary reaches the top of viewport
        toggleActions: "play reverse play reverse", // Play on scroll down, reverse on scroll up
        markers: false,        // Enable markers for debugging
        scrub: false,         // Remove scrubbing to make the animation run independently of scroll
    },
});


// Ensure GSAP works correctly with Lenis
ScrollTrigger.scrollerProxy(".wrapper", {
    scrollTop(value) {
        return arguments.length ? lenis.scrollTo(value) : lenis.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
});

// Update ScrollTrigger with Lenis scroll events
lenis.on("scroll", () => {
    ScrollTrigger.update();
});

// Animate the opacity of food in `.gallary` section
gsap.to(".food", {
    opacity: 0, // Fade out the food element
    duration: 1, // Animation duration
    ease: "power3.out", // Easing function
    scrollTrigger: {
        trigger: ".gallary", // Trigger when `.gallary` is in view
        start: "top 80%", // Start animation when the top of `.gallary` is at 80% of the viewport height
        end: "bottom top", // End animation when the bottom of `.gallary` hits the top of the viewport
        toggleActions: "play reverse play reverse", // Play on scroll down, reverse on scroll up
        markers: false, // Set to true for debugging trigger points
    },
});
// Keep smooth scrolling with Lenis
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);


// Initialize ScrollReveal
document.addEventListener("DOMContentLoaded", function () {
    const sr = ScrollReveal({
        distance: "50px", // Move 50px when revealed
        duration: 1000,   // 1-second animation
        delay: 200,       // Delay before animation starts
        easing: "cubic-bezier(0.5, 0, 0, 1)",
        reset: false      // Set to true if you want it to animate every time you scroll
    });

    // Animate entire cards
    sr.reveal(".gcard", {
        origin: "bottom", // Slide from the bottom
        interval: 200,    // Delay between each card animation
    });

    // Animate images inside the cards
    sr.reveal(".card-image img", {
        origin: "left",
        distance: "80px",
        delay: 300,
        duration: 800,
        interval: 200
    });

    // Animate text content inside the cards
    sr.reveal(".card-content", {
        origin: "right",
        distance: "50px",
        delay: 400,
        duration: 800,
        interval: 200
    });

    // Animate rating stars
    sr.reveal(".stars", {
        origin: "top",
        distance: "20px",
        delay: 600,
        duration: 500,
        interval: 100
    });

    // Animate "View Details" buttons with a slight bounce effect
    sr.reveal(".details-btn", {
        origin: "bottom",
        distance: "30px",
        delay: 700,
        duration: 600,
        easing: "cubic-bezier(0.5, -0.01, 0.3, 1.5)", // Bounce effect
        interval: 200
    });
});
