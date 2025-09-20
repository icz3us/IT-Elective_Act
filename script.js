// Navigation Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

function toggleMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

hamburger.addEventListener('click', toggleMenu);

// Close menu when clicking on nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

function setDynamicGreeting() {
    const greetingElement = document.getElementById('dynamic-greeting');
    const now = new Date();
    const hour = now.getHours();
    const name = "Icon Zeus";
    
    let greeting;
    let emoji;
    
    if (hour >= 5 && hour < 12) {
        greeting = "Good Morning";
        emoji = "🌅";
    } else if (hour >= 12 && hour < 17) {
        greeting = "Good Afternoon";
        emoji = "☀️";
    } else if (hour >= 17 && hour < 21) {
        greeting = "Good Evening";
        emoji = "🌆";
    } else {
        greeting = "Good Night";
        emoji = "🌙";
    }
    
    greetingElement.innerHTML = `${emoji} ${greeting}, Welcome to my Portfolio!`;
}

// Welcome message function
function showWelcome() {
    const now = new Date();
    const hour = now.getHours();
    let timeGreeting;
    
    if (hour >= 5 && hour < 12) {
        timeGreeting = "Good Morning";
    } else if (hour >= 12 && hour < 17) {
        timeGreeting = "Good Afternoon";
    } else if (hour >= 17 && hour < 21) {
        timeGreeting = "Good Evening";
    } else {
        timeGreeting = "Good Night";
    }
    
    alert(`🎉 ${timeGreeting}! Welcome to my Profile Page! \n\nThanks for visiting! I hope you enjoy exploring my work and learning about my journey as a developer. Feel free to reach out if you'd like to connect!`);
}

// Color changing function
let colorIndex = 0;
const colors = [
    '#8a2be2',  
    '#ff6b6b',  
    '#4ecdc4',  
    '#45b7d1',  
    '#f9ca24',  
    '#6c5ce7',  
    '#a29bfe',  
    '#fd79a8',  
    '#00b894', 
    '#e17055'   
];

function changeTextColor() {
    const textElement = document.getElementById('changeable-text');
    
    // Change to next color
    colorIndex = (colorIndex + 1) % colors.length;
    textElement.style.color = colors[colorIndex];
    
    textElement.style.transform = 'scale(1.1)';
    textElement.style.transition = 'all 0.3s ease';
    
    setTimeout(() => {
        textElement.style.transform = 'scale(1)';
    }, 300);
    
    // message change
    const messages = [
        "Purple magic! 💜",
        "pogi ko 🔥",
        "ewan ko na 🌊",
        "miss ko na sya sobra ☁️",
        "sana ako pa rin ☀️",
        "nakalimutan na nya ako",
        "basic lang 🌸",
        "ni 🌺",
        "gga 🌿",
    ];
    
    textElement.textContent = messages[colorIndex];
}

// Form Validation and Submission
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    let isValid = true;

    // Reset error messages
    document.querySelectorAll('.error-message').forEach(error => {
        error.style.display = 'none';
    });

    // Name validation
    if (name === '') {
        document.getElementById('name-error').textContent = 'Name is required';
        document.getElementById('name-error').style.display = 'block';
        isValid = false;
    } else if (name.length < 2) {
        document.getElementById('name-error').textContent = 'Name must be at least 2 characters';
        document.getElementById('name-error').style.display = 'block';
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        document.getElementById('email-error').textContent = 'Email is required';
        document.getElementById('email-error').style.display = 'block';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('email-error').textContent = 'Please enter a valid email address';
        document.getElementById('email-error').style.display = 'block';
        isValid = false;
    }

    // Message validation
    if (message === '') {
        document.getElementById('message-error').textContent = 'Message is required';
        document.getElementById('message-error').style.display = 'block';
        isValid = false;
    } else if (message.length < 10) {
        document.getElementById('message-error').textContent = 'Message must be at least 10 characters';
        document.getElementById('message-error').style.display = 'block';
        isValid = false;
    }

    return isValid;
}

// Handle form submission
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            if (validateForm()) {
                const submitBtn = document.querySelector('.submit-btn');
                const successMessage = document.getElementById('success-message');

                // Disable button and show loading
                submitBtn.disabled = true;
                submitBtn.textContent = 'Sending...';

                // Simulate async submission
                setTimeout(() => {
                    successMessage.style.display = 'block';
                    contactForm.reset();

                    // Reset button
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Send Message';

                    // Hide success message after 5s
                    setTimeout(() => {
                        successMessage.style.display = 'none';
                    }, 5000);
                }, 2000);
            }
        });
    }
});


function handleFormSubmit(event) {
    event.preventDefault();
    
    if (validateForm()) {
        const submitBtn = document.querySelector('.submit-btn');
        const successMessage = document.getElementById('success-message');
        
        // Disable button and show loading
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        // Simulate form submission
        setTimeout(() => {
            // Show success message
            successMessage.style.display = 'block';
            
            // Reset form
            document.getElementById('contactForm').reset();
            
            // Reset button
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
            
        }, 2000);
    }
}

// Add smooth scrolling and navbar highlight
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id], header[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Navbar background on scroll
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(138, 43, 226, 0.3)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
        navbar.style.boxShadow = 'none';
    }
}

// Main initialization function
document.addEventListener('DOMContentLoaded', function() {
    // Set dynamic greeting
    setDynamicGreeting();
    
    // Update greeting every minute
    setInterval(setDynamicGreeting, 60000);
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
    
    // Navbar scroll effects
    window.addEventListener('scroll', () => {
        updateActiveNavLink();
        handleNavbarScroll();
    });
    
    // Add click effect to skill items
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            this.style.transition = 'all 0.1s ease';
            
            setTimeout(() => {
                this.style.transform = 'translateY(-5px)';
            }, 100);
        });
    });
    
    // floating animation to profile image
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
        let isFloating = false;
        
        profileImage.addEventListener('mouseenter', function() {
            if (!isFloating) {
                isFloating = true;
                this.style.animation = 'float 2s ease-in-out infinite';
            }
        });
        
        profileImage.addEventListener('mouseleave', function() {
            isFloating = false;
            this.style.animation = '';
        });
    }
    
    // Typewriter effect for title
    const title = document.querySelector('.title');
    if (title) {
        const titleText = title.textContent;
        title.textContent = '';
        
        let i = 0;
        function typeWriter() {
            if (i < titleText.length) {
                title.textContent += titleText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        setTimeout(typeWriter, 1500);
    }
    
    // Smooth scroll for nav links
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
});

// random shih
let clickCount = 0;
document.addEventListener('click', function() {
    clickCount++;
    
    if (clickCount === 20) {
        alert("🎊 Wow! You've clicked 20 times! You're really exploring this page! \n\nI appreciate your curiosity! 😄");
    }
    
    if (clickCount === 50) {
        alert("🤯 50 clicks?! You're either really interested or really bored! \n\nEither way, thanks for spending time on my page! Maybe it's time to send me a message? 📨");

        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
        
        document.body.style.animation = 'rainbow 3s linear';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 3000);
    }
});

const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
    
    .nav-link.active {
        color: #8a2be2 !important;
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(style);
