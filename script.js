// ===================================
// CUSTOM CURSOR
// ===================================
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 100);
});

// Cursor hover effects
const hoverElements = document.querySelectorAll('a, button, .project-card, .team-member, .blog-card, .vlog-card');
hoverElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        document.body.classList.add('cursor-hover');
    });
    element.addEventListener('mouseleave', () => {
        document.body.classList.remove('cursor-hover');
    });
});

// ===================================
// NAVIGATION
// ===================================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ===================================
// SMOOTH SCROLLING
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================================
// ANIMATION ON SCROLL (AOS)
// ===================================
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, observerOptions);

document.querySelectorAll('[data-aos]').forEach(element => {
    observer.observe(element);
});

// ===================================
// PROJECTS GALLERY
// ===================================
const projectsData = [
    {
        id: 1,
        title: 'Urban Villa Residence',
        category: 'architecture',
        description: 'A contemporary home blending modern aesthetics with natural materials.'
    },
    {
        id: 2,
        title: 'Sustainable Office Complex',
        category: 'architecture',
        description: 'Net-zero energy workspace celebrating biophilic design principles.'
    },
    {
        id: 3,
        title: 'Suburban Family Home',
        category: 'suburban',
        description: 'Spacious suburban retreat with earthy materiality and open planning.'
    },
    {
        id: 4,
        title: 'Eco-Housing Development',
        category: 'suburban',
        description: 'Community-focused housing with shared green spaces and sustainable infrastructure.'
    },
    {
        id: 5,
        title: 'Handcrafted Dining Collection',
        category: 'furniture',
        description: 'Solid timber furniture celebrating traditional joinery techniques.'
    },
    {
        id: 6,
        title: 'Minimalist Lounge Series',
        category: 'furniture',
        description: 'Clean-lined furniture with honest material expression.'
    },
    {
        id: 7,
        title: 'Abstract Landscape Series',
        category: 'paintings',
        description: 'Custom paintings inspired by natural terrain and earthy palettes.'
    },
    {
        id: 8,
        title: 'Architectural Portraits',
        category: 'paintings',
        description: 'Artistic interpretations of iconic architectural forms.'
    },
    {
        id: 9,
        title: 'Future City Pavilion',
        category: 'competitions',
        description: 'Award-winning competition entry reimagining urban public spaces.'
    },
    {
        id: 10,
        title: 'Sustainable Housing Challenge',
        category: 'competitions',
        description: 'Innovative affordable housing solution using local materials.'
    },
    {
        id: 11,
        title: 'Cultural Center',
        category: 'architecture',
        description: 'Community hub celebrating local culture through architectural expression.'
    },
    {
        id: 12,
        title: 'Garden Villa',
        category: 'suburban',
        description: 'Residence integrated with landscape, blurring indoor-outdoor boundaries.'
    }
];

const projectsGrid = document.getElementById('projects-grid');
const categoryButtons = document.querySelectorAll('.category-btn');

// Generate project image using placeholder
function generateProjectHTML(project) {
    return `
        <div class="project-card" data-category="${project.category}">
            <img src="project-${project.id}.jpg" alt="${project.title}" class="project-image">
            <div class="project-overlay">
                <span class="project-category">${project.category}</span>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
            </div>
        </div>
    `;
}

// Initialize projects
function initializeProjects() {
    projectsGrid.innerHTML = projectsData.map(project => generateProjectHTML(project)).join('');
}

// Filter projects
function filterProjects(category) {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';
            }, 10);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.8)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

// Category button handlers
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        filterProjects(button.dataset.category);
    });
});

// Initialize projects on load
initializeProjects();

// ===================================
// UPDATES TABS (Blog/Vlog)
// ===================================
const updateTabs = document.querySelectorAll('.update-tab');
const updatePanels = document.querySelectorAll('.update-panel');

updateTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetTab = tab.dataset.tab;
        
        // Update active tab
        updateTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        // Update active panel
        updatePanels.forEach(panel => {
            panel.classList.remove('active');
            if (panel.id === `${targetTab}-content`) {
                panel.classList.add('active');
            }
        });
    });
});

// ===================================
// BANTER SUBMISSION
// ===================================
const banterInput = document.getElementById('banter-input');
const submitBanterBtn = document.querySelector('.submit-banter');
const banterWall = document.querySelector('.banter-wall');

submitBanterBtn.addEventListener('click', () => {
    const banterText = banterInput.value.trim();
    
    if (banterText) {
        const newBanterCard = document.createElement('div');
        newBanterCard.className = 'banter-card';
        newBanterCard.innerHTML = `
            <p class="banter-text">"${banterText}"</p>
            <span class="banter-author">✨ Community Banter</span>
        `;
        
        banterWall.appendChild(newBanterCard);
        banterInput.value = '';
        
        // Animate new card
        newBanterCard.style.opacity = '0';
        newBanterCard.style.transform = 'translateY(20px)';
        setTimeout(() => {
            newBanterCard.style.transition = 'all 0.4s ease';
            newBanterCard.style.opacity = '1';
            newBanterCard.style.transform = 'translateY(0)';
        }, 10);
        
        // Success feedback
        submitBanterBtn.textContent = 'Submitted! ✓';
        submitBanterBtn.style.backgroundColor = '#9CAF88';
        setTimeout(() => {
            submitBanterBtn.textContent = 'Submit Banter';
            submitBanterBtn.style.backgroundColor = '';
        }, 2000);
    }
});

// ===================================
// CONTACT FORM
// ===================================
const queryForm = document.getElementById('query-form');

queryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(queryForm);
    const data = Object.fromEntries(formData);
    
    console.log('Form submitted:', data);
    
    // Success feedback
    const submitButton = queryForm.querySelector('.submit-button');
    submitButton.textContent = 'Message Sent! ✓';
    submitButton.style.backgroundColor = '#9CAF88';
    
    // Reset form
    queryForm.reset();
    
    setTimeout(() => {
        submitButton.textContent = 'Send Message';
        submitButton.style.backgroundColor = '';
    }, 3000);
});

// ===================================
// PARALLAX EFFECTS
// ===================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-content');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ===================================
// DYNAMIC PROJECT CARD TILT
// ===================================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});

// ===================================
// LAZY LOADING IMAGES
// ===================================
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.add('loaded');
            observer.unobserve(img);
        }
    });
});

document.querySelectorAll('img').forEach(img => {
    imageObserver.observe(img);
});

// ===================================
// NAVBAR ACTIVE LINK HIGHLIGHT
// ===================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===================================
// INITIALIZATION
// ===================================
window.addEventListener('load', () => {
    // Add loaded class to body for animations
    document.body.classList.add('loaded');
    
    // Trigger initial animations
    const heroElements = document.querySelectorAll('.hero-content > *');
    heroElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

console.log('CAFCA Website Initialized - Constructive AF Collaborative Architecture');
