// Smooth Scroll
const links = document.querySelectorAll('header nav ul li a');

links.forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({behavior:'smooth'});
    });
});

// Scroll Animation
const faders = document.querySelectorAll('.member, .project, .skill');

const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Highlight menu active link
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if(pageYOffset >= sectionTop - 80) {
            current = section.getAttribute('id');
        }
    });

    links.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href').substring(1) === current){
            link.classList.add('active');
        }
    });
});

// Hero Parallax Effect
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
    let offset = window.pageYOffset;
    hero.style.backgroundPositionY = offset * 0.5 + "px";
});

// Hanburger Menu 
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('header nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamburger.classList.toggle('open');
});

//Animation des membres 
const members = document.querySelectorAll('.member');
const projects = document.querySelectorAll('.project');
const skills = document.querySelectorAll('.skill');

function revealElements(elements) {
    const windowHeight = window.innerHeight;
    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add('appear');
        }
    });
}

window.addEventListener('scroll', () => {
    revealElements(members);
    revealElements(projects);
    revealElements(skills);
});

//Carrousel Projets
let projectIndex = 0;
const projectContainer = document.querySelector('.projects-section .projects');

function showNextProject() {
    if (!projectContainer) return;
    projectIndex++;
    if (projectIndex >= projects.length) projectIndex = 0;
    const offset = projects[projectIndex].offsetLeft;
    projectContainer.scrollTo({
        left: offset,
        behavior: 'smooth'
    });
}

// Défilement automatique tous les 4s
setInterval(showNextProject, 4000);

//  Hover dynamique boutons
const buttons = document.querySelectorAll('.button');

buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'scale(1.05)';
        btn.style.boxShadow = '0 5px 15px rgba(30,58,138,0.3)';
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'scale(1)';
        btn.style.boxShadow = 'none';
    });
});

//Variation de fond par section
const section = document.querySelectorAll('section');
sections.forEach((section, i) => {
    if (i % 2 !== 0) {
        section.style.backgroundColor = '#ffffff'; // alterner blanc pur
    } else {
        section.style.backgroundColor = '#f9fafb'; // gris clair
    }
});

// Texture subtile
sections.forEach(section => {
    section.style.backgroundImage = 'url("images/grain.png")'; // grain léger
    section.style.backgroundRepeat = 'repeat';
    section.style.opacity = '0.98'; // subtil
});
