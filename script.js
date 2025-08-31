function showWelcome() {
    alert("🎉 Welcome to to my Profile Page! \n\nThanks for visiting!");
}

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
    
    // message change eme
    const messages = [
        "Purple 💜",
        "pogi ko 🔥",
        "ewan ko na 🌊",
        "miss ko na sya sobra ☁️",
        "sana ako pa rin ☀️",
        "nakalimutan na nya ako",
        "basic lang 🌸",
        "jhfgdsfsdf 🌺",
        "sfgdfhdgfh la nako malagay hahahah 🌿",

    ];
    
    textElement.textContent = messages[colorIndex];
}

// hover effects
document.addEventListener('DOMContentLoaded', function() {
    // click effect to skill items
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
    
    const title = document.querySelector('.title');
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
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


let clickCount = 0;
document.addEventListener('click', function() {
    clickCount++;
    
    if (clickCount === 20) {
        alert("🎊 Wow! You've clicked 20 times! You're really exploring this page!");
    }
    
    if (clickCount === 30) {
        alert("🤯 50 clicks?! You're either really interested or really bored! \n\nanyways, thanks for spending time on my page! 😄");
        
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
`;
document.head.appendChild(style);
