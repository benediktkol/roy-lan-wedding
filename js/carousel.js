// Love Story Carousel JavaScript
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');

// Initialize carousel
function initCarousel() {
    if (slides.length === 0) return;
    
    // Set background images from data-bg attributes
    slides.forEach((slide, index) => {
        const bgImage = slide.getAttribute('data-bg');
        if (bgImage) {
            // Set background image directly
            slide.style.backgroundImage = `url('${bgImage}')`;
            console.log(`Setting background: ${bgImage}`);
        }
    });
    
    showSlide(0);
    
    // Auto-transition removed - manual navigation only
}

// Show specific slide
function showSlide(index) {
    // Remove active class from all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Add active class to current slide and dot
    if (slides[index] && dots[index]) {
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }
    
    currentSlideIndex = index;
}

// Navigate to next/previous slide
function changeSlide(direction) {
    let newIndex = currentSlideIndex + direction;
    
    if (newIndex >= slides.length) {
        newIndex = 0;
    } else if (newIndex < 0) {
        newIndex = slides.length - 1;
    }
    
    showSlide(newIndex);
}

// Jump to specific slide
function currentSlide(index) {
    showSlide(index - 1); // Convert from 1-based to 0-based index
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initCarousel);

// Handle keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        changeSlide(-1);
    } else if (e.key === 'ArrowRight') {
        changeSlide(1);
    }
});

// Add touch/swipe support for mobile
let startX = 0;
let endX = 0;

document.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

document.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
});

function handleSwipe() {
    const threshold = 50; // minimum distance for swipe
    const diff = startX - endX;
    
    if (Math.abs(diff) > threshold) {
        if (diff > 0) {
            // Swipe left (next slide)
            changeSlide(1);
        } else {
            // Swipe right (previous slide)
            changeSlide(-1);
        }
    }
}