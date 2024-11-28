const animateText = document.querySelector('.animate-text');

animateText.addEventListener('animationend', () => {
    animateText.classList.add('animate-text-end');
});

const sectionOne = document.querySelector('.section-one');
const header = document.querySelector('.animate-text');

const observer1 = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        animateHeader();
    }
}, {
    threshold: 1.0
});

observer1.observe(sectionOne);

function animateHeader() {
    const text = header.textContent;
    header.innerHTML = '';

    text.split('').forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.animationDelay = `${index * 0.6}s`;
        header.appendChild(span);
    });
}

// const header = document.querySelector('.animate-text');
const text = header.textContent;
header.innerHTML = '';

text.split('').forEach((letter, index) => {
    const span = document.createElement('span');
    span.textContent = letter;
    span.style.animationDelay = `${index * 0.8}s`;
    header.appendChild(span);
});

// SHOW AND HIDE SCROLL ARROW ON SCROLL
const scrollArrow = document.querySelector('.scroll-arrow');
window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
        scrollArrow.classList.remove('d-none');
    } else {
        scrollArrow.classList.add('d-none');
    }
});

scrollArrow.addEventListener('animationend', () => {
    scrollArrow.classList.add('show');
});

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '20px',
    duration: 500,
    delay: 10,
    rotate: {
        x: 0,
        y: 0,
        z: 0
    },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    mobile: true,
    reset: true, // Set reset to true
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
});

scrollReveal.reveal('.projects-container', {
    delay: 800
});


const showcaseHeader = document.querySelector('.showcase-header');
const projectsPage = document.querySelector('.projects-page');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, {
    threshold: 1.0
});

observer.observe(showcaseHeader);
observer.observe(projectsPage);

const sectionThree = document.getElementById('section-three');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const sectionThreeTop = sectionThree.offsetTop;
    const sectionThreeHeight = sectionThree.offsetHeight;

    if (scrollPosition >= sectionThreeTop && scrollPosition < sectionThreeTop + sectionThreeHeight) {
        sectionThree.classList.add('show');
    } else {
        sectionThree.classList.remove('show');
    }
});

// SHOW OR HIDE PROJECTS ON CLICK
// FORWARD BUTTONS
const coffeeProjectBtn = document.getElementById('coffee-project-btn');
const halloProjectBtn = document.getElementById('hallo-project-btn');
const fratijProjectBtn = document.getElementById('fratij-project-btn');
const lyriksProjectBtn = document.getElementById('lyriks-project-btn');

// PROJECT BUTTONS
const halloweenProject = document.getElementById('first-project');
const coffeeProject = document.getElementById('second-project');
const fratijProject = document.getElementById('third-project');
const lyriksProject = document.getElementById('fourth-project');

// BACK BUTTONS
const coffeeProjectBack = document.getElementById('coffee-project-btn-back');
const fratijProjectBackBtn = document.getElementById('fratij-project-btn-back');

coffeeProjectBtn.addEventListener('click', () => {
    halloweenProject.classList.add('d-none');
    coffeeProject.classList.remove('d-none');
    coffeeProject.classList.add('animate__fadeIn');
});

coffeeProjectBack.addEventListener('click', () => {
    fratijProject.classList.add('d-none');
    coffeeProject.classList.remove('d-none');
    coffeeProject.classList.add('animate__fadeIn');
});

halloProjectBtn.addEventListener('click', () => {
    coffeeProject.classList.add('d-none');
    halloweenProject.classList.remove('d-none');
    halloweenProject.classList.add('animate__fadeIn');
});

fratijProjectBtn.addEventListener('click', () => {
    halloweenProject.classList.add('d-none');
    coffeeProject.classList.add('d-none');
    fratijProject.classList.remove('d-none');
    fratijProject.classList.add('animate__fadeIn');
})

lyriksProjectBtn.addEventListener('click', () => {
    fratijProject.classList.add('d-none');
    lyriksProject.classList.remove('d-none');
    lyriksProject.classList.add('animate__fadeIn');
})

fratijProjectBackBtn.addEventListener('click', () => {
    lyriksProject.classList.add('d-none');
    fratijProject.classList.remove('d-none');
    fratijProject.classList.add('animate__fadeIn');
});

function openGmailCompose() {
    const subject = "Contact from Website";
    const body = "Hi Jim,\n\nI came across your website and wanted to reach out.\n\n";
    const gmailUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=jimmule8@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank");
}