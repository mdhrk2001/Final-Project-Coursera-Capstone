// js/script.js

// ========= 1. DARK MODE TOGGLE =========
const toggleButton = document.createElement('button');
toggleButton.textContent = '🌓 Toggle Dark Mode';
toggleButton.className = 'dark-toggle';
document.body.appendChild(toggleButton);

// ========= 2. HIGH CONTRAST MODE =========
const contrastToggle = document.createElement('button');
contrastToggle.textContent = '🔳 High Contrast';
contrastToggle.className = 'contrast-toggle';
document.body.appendChild(contrastToggle);

// Function to update button labels based on screen width
function updateButtonLabels() {
  if (window.innerWidth < 500) {
    toggleButton.textContent = '🌓';
    toggleButton.title = 'Toggle Dark Mode';

    contrastToggle.textContent = '🔳';
    contrastToggle.title = 'High Contrast Mode';
  } else {
    toggleButton.textContent = '🌓 Toggle Dark Mode';
    toggleButton.removeAttribute('title');

    contrastToggle.textContent = '🔳 High Contrast';
    contrastToggle.removeAttribute('title');
  }
}

// Run on load
window.addEventListener('DOMContentLoaded', updateButtonLabels);

// Run on resize
window.addEventListener('resize', updateButtonLabels);

// Toggle dark mode
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem(
    'theme',
    document.body.classList.contains('dark') ? 'dark' : 'light'
  );
});

// Load saved theme
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
  }
});

// Toggle high contrast
contrastToggle.addEventListener('click', () => {
  document.body.classList.toggle('high-contrast');
  localStorage.setItem(
    'contrast',
    document.body.classList.contains('high-contrast') ? 'high' : 'normal'
  );
});

// Load saved contrast
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('contrast') === 'high') {
    document.body.classList.add('high-contrast');
  }
});



// ========= 3. BASIC CAROUSEL (for projects.html) =========
const carouselImages = document.querySelectorAll('.carousel img');
let currentSlide = 0;

function showSlide(index) {
  carouselImages.forEach((img, i) => {
    img.style.display = i === index ? 'block' : 'none';
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % carouselImages.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + carouselImages.length) % carouselImages.length;
  showSlide(currentSlide);
}

// Add event listeners only if carousel exists
if (carouselImages.length > 0) {
  document.getElementById('nextBtn').addEventListener('click', nextSlide);
  document.getElementById('prevBtn').addEventListener('click', prevSlide);
  showSlide(currentSlide); // Show first image
}


// ========= 4. CONTACT FORM VALIDATION =========
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Clear errors
    document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');
    status.textContent = '';

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    let valid = true;

    if (!name) {
      document.getElementById('nameError').textContent = 'Name is required';
      document.getElementById('nameError').style.display = 'block';
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      document.getElementById('emailError').textContent = 'Valid email is required';
      document.getElementById('emailError').style.display = 'block';
      valid = false;
    }

    if (!message) {
      document.getElementById('messageError').textContent = 'Message is required';
      document.getElementById('messageError').style.display = 'block';
      valid = false;
    }

    if (valid) {
      // Simulate sending
      status.style.color = 'green';
      status.textContent = 'Message sent successfully! (Form submission simulated)';
      form.reset();
    } else {
      status.style.color = 'red';
      status.textContent = 'Please correct the errors above.';
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});

// Auto-update footer year
document.getElementById("year").textContent = new Date().getFullYear();
