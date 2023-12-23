// Get all testimonials
const testimonials = document.querySelectorAll('.testimonial');
let index = 0;

// Function to show the testimonials in a sliding manner
function showTestimonial() {
  testimonials.forEach(testimonial => {
    testimonial.classList.remove('active');
  });

  testimonials[index].classList.add('active');

  index++;

  if (index === testimonials.length) {
    index = 0;
  }

  setTimeout(showTestimonial, 5000); // Change testimonial every 5 seconds (5000ms)
}

// Initiate the testimonial slider
showTestimonial();
