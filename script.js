/*=========================================
    PRELOADER
=========================================*/

window.addEventListener("load", () => {

    const loader =
        document.getElementById("preloader");

    const navbar =
        document.getElementById("navbar");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
        loader.style.transition = "0.8s";

        if (navbar) {
            navbar.classList.add("visible");
        }

    }, 1200);

});

/*=========================================
    NAVBAR SCROLL EFFECT
=========================================*/

const navbar =
    document.getElementById("navbar");

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {

    if (!navbar) return;

    const currentScrollY = window.scrollY;

    if (currentScrollY > 60) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    if (currentScrollY <= 60) {
        navbar.classList.add("visible");
        navbar.classList.remove("scroll-hidden");
    } else if (currentScrollY > lastScrollY + 4) {
        navbar.classList.remove("visible");
        navbar.classList.add("scroll-hidden");
    } else if (currentScrollY < lastScrollY - 4) {
        navbar.classList.add("visible");
        navbar.classList.remove("scroll-hidden");
    }

    lastScrollY = currentScrollY;

}, { passive: true });

/*=========================================
    LIVE CLOCK & DATE
=========================================*/

function updateClock() {

    const now = new Date();

    const time =
        now.toLocaleTimeString();

    const date =
        now.toLocaleDateString(
            "en-GB",
            {
                day: "2-digit",
                month: "short",
                year: "numeric"
            }
        );

    const timeBox =
        document.getElementById("time");

    const dateBox =
        document.getElementById("date");

    if (timeBox)
        timeBox.innerHTML = time;

    if (dateBox)
        dateBox.innerHTML = date;
}

setInterval(updateClock, 1000);
updateClock();

/*=========================================
    TYPING EFFECT
=========================================*/

const typingElement =
    document.getElementById("typing-text");

const words = [

    "Web Developer",
    "Python Developer",
    "C++ Programmer",
    "Frappe Framework Learner",
    "Software Engineering Enthusiast"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {

    if (!typingElement) return;

    const currentWord =
        words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );

        charIndex++;

        if (
            charIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typingEffect,
                1500
            );

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1) %
                words.length;
        }
    }

    setTimeout(
        typingEffect,
        deleting ? 50 : 100
    );
}

typingEffect();

/*=========================================
    CERTIFICATE PREVIEW
=========================================*/

const certificateDialog =
    document.getElementById("certificate-dialog");

const certificatePreviewButton =
    document.getElementById("preview-certificate");

if (certificateDialog && certificatePreviewButton) {

    certificatePreviewButton.addEventListener("click", () => {
        certificateDialog.showModal();
    });

    certificateDialog.addEventListener("click", (event) => {
        if (event.target === certificateDialog) {
            certificateDialog.close();
        }
    });
}

/*=========================================
    COUNTER ANIMATION
=========================================*/

const counters =
    document.querySelectorAll(".counter");

counters.forEach(counter => {

    function updateCounter() {

        const target =
            +counter.getAttribute(
                "data-target"
            );

        const current =
            +counter.innerText;

        const increment =
            Math.ceil(target / 80);

        if (current < target) {

            counter.innerText =
                current + increment;

            setTimeout(
                updateCounter,
                30
            );

        } else {

            counter.innerText =
                target + "+";
        }
    }

    updateCounter();
});

/*=========================================
    SCROLL PROGRESS BAR
=========================================*/

window.addEventListener(
    "scroll",
    () => {

        const scrollTop =
            document.documentElement.scrollTop;

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const progress =
            (scrollTop / height) * 100;

        const progressBar =
            document.getElementById(
                "progress-bar"
            );

        if (progressBar)
            progressBar.style.width =
            progress + "%";
    }
);

/*=========================================
    CUSTOM CURSOR
=========================================*/

const cursor =
    document.querySelector(".cursor");

document.addEventListener(
    "mousemove",
    (e) => {

        if (!cursor) return;

        cursor.style.left =
            e.clientX + "px";

        cursor.style.top =
            e.clientY + "px";
    }
);

/*=========================================
    SCROLL REVEAL
=========================================*/

const revealElements =
    document.querySelectorAll(
        ".about-card, .why-card, .tech-item, .project-card, .experience-card, .timeline-item, .contact-btn, .stat-card"
    );

function revealOnScroll() {

    revealElements.forEach(item => {

        const top =
            item.getBoundingClientRect().top;

        const visible =
            window.innerHeight - 100;

        if (top < visible) {

            item.style.opacity = "1";
            item.style.transform =
                "translateY(0px)";
        }
    });
}

revealElements.forEach(item => {

    item.style.opacity = "0";

    item.style.transform =
        "translateY(50px)";

    item.style.transition =
        "0.8s ease";
});

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();

/*=========================================
    MOBILE MENU
=========================================*/

const menuBtn =
    document.querySelector(".menu-btn");

const navLinks =
    document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener(
        "click",
        () => {

            navLinks.classList.toggle(
                "showMenu"
            );
        }
    );
}

/*=========================================
    ACTIVE NAV LINK
=========================================*/

const sections =
    document.querySelectorAll("section");

const navItems =
    document.querySelectorAll(
        ".nav-links a"
    );

window.addEventListener(
    "scroll",
    () => {

        let current = "";

        sections.forEach(sec => {

            const sectionTop =
                sec.offsetTop - 150;

            if (
                pageYOffset >= sectionTop
            ) {

                current =
                    sec.getAttribute("id");
            }
        });

        navItems.forEach(link => {

            link.classList.remove(
                "active"
            );

            if (
                link.getAttribute(
                    "href"
                ) === "#" + current
            ) {

                link.classList.add(
                    "active"
                );
            }
        });
    }
);

/*=========================================
    BACK TO TOP BUTTON
=========================================*/

const topBtn =
    document.getElementById("topBtn");

window.addEventListener(
    "scroll",
    () => {

        if (
            document.documentElement.scrollTop >
            400
        ) {

            topBtn.style.display =
                "block";

        } else {

            topBtn.style.display =
                "none";
        }
    }
);

topBtn.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"
        });
    }
);

/*=========================================
    PHOTO PARALLAX EFFECT
=========================================*/

const photo =
    document.querySelector(".photo-ring");

document.addEventListener(
    "mousemove",
    (e) => {

        if (!photo) return;

        const x =
            (window.innerWidth / 2 -
                e.pageX) / 40;

        const y =
            (window.innerHeight / 2 -
                e.pageY) / 40;

        photo.style.transform =
            `rotateY(${x}deg)
             rotateX(${-y}deg)`;
    }
);

/*=========================================
    PARTICLE BACKGROUND
=========================================*/

const canvas =
    document.getElementById("particles");

if (canvas) {

    const ctx =
        canvas.getContext("2d");

    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;

    let particles = [];

    class Particle {

        constructor() {

            this.x =
                Math.random() *
                canvas.width;

            this.y =
                Math.random() *
                canvas.height;

            this.size =
                Math.random() * 2 + 1;

            this.speedX =
                (Math.random() - 0.5);

            this.speedY =
                (Math.random() - 0.5);
        }

        update() {

            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > canvas.width)
                this.x = 0;

            if (this.x < 0)
                this.x = canvas.width;

            if (this.y > canvas.height)
                this.y = 0;

            if (this.y < 0)
                this.y = canvas.height;
        }

        draw() {

            ctx.beginPath();

            ctx.arc(
                this.x,
                this.y,
                this.size,
                0,
                Math.PI * 2
            );

            ctx.fillStyle =
                "rgba(56,189,248,0.8)";

            ctx.fill();
        }
    }

    function initParticles() {

        particles = [];

        for (
            let i = 0;
            i < 100;
            i++
        ) {

            particles.push(
                new Particle()
            );
        }
    }

    function animateParticles() {

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        particles.forEach(
            particle => {

                particle.update();
                particle.draw();
            }
        );

        requestAnimationFrame(
            animateParticles
        );
    }

    initParticles();
    animateParticles();

    window.addEventListener(
        "resize",
        () => {

            canvas.width =
                window.innerWidth;

            canvas.height =
                window.innerHeight;

            initParticles();
        }
    );
}

/*=========================================
    MAILTO CONTACT FIX
=========================================*/

document.querySelectorAll(
    'a[href^="mailto:"]'
).forEach(link => {

    link.addEventListener(
        "click",
        (event) => {

            event.preventDefault();
            window.location.href =
                link.href;
        }
    );
});

console.log(
"%c🚀 Shubham Lashkari Portfolio Loaded Successfully!",
"color:#38bdf8;font-size:16px;font-weight:bold;"
);

// ==========================
// EMAILJS CONTACT FORM
// ==========================

// emailjs.init("YOUR_PUBLIC_KEY");

// const form = document.getElementById("contact-form");
// const status = document.getElementById("form-status");

// if (form) {

//     form.addEventListener("submit", function (e) {

//         e.preventDefault();

//         status.innerHTML = "Sending Message...";

//         emailjs.sendForm(
//             "YOUR_SERVICE_ID",
//             "YOUR_TEMPLATE_ID",
//             this
//         )
//         .then(() => {

//             status.innerHTML =
//             "✅ Message Sent Successfully!";

//             form.reset();

//         })
//         .catch((error) => {

//             status.innerHTML =
//             "❌ Failed to send message.";

//             console.error(error);

//         });

//     });

// }