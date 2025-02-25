document.addEventListener("DOMContentLoaded", function() {
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Form Validation & Submission Handling
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        let name = document.querySelector("input[type='text']").value;
        let email = document.querySelector("input[type='email']").value;
        let message = document.querySelector("textarea").value;

        if(name && email && message) {
            alert("Thank you, " + name + "! Your message has been sent.");
            form.reset();
        } else {
            alert("Please fill in all fields.");
        }
    });

    // Animate Elements on Scroll
    const sections = document.querySelectorAll("section");
    const options = {
        threshold: 0.3
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, options);
    sections.forEach(section => {
        observer.observe(section);
    });
});
