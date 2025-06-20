//Business location
const accessLocation ={
    latitude: -32.9685845303776,
    longitude: 27.90164716002931
};
console.log("My Business Location:");
console.log("Latitude:", accessLocation.lantitude);
console.log("Longitude:", accessLocation.longitude)

document.addEventListener('DOMContentLoaded', function () {
    const path = window.location.pathname;
    const isHome = path === '/' || path.endsWith('/homepage.html');
  
    if (!isHome) return; // Only run on homepage
  
    let userName = localStorage.getItem('userName');
  
    // Keep prompting until the user enters something valid
    while (!userName || userName.trim() === '') {
      userName = prompt("Hi there! Welcome to Infinity Gold.\nPlease enter your Name and Surname:");
  
      if (userName === null || userName.trim() === '') {
        continue; // Re-prompt if input is blank or cancelled
      }
  
      userName = userName.trim();
      localStorage.setItem('userName', userName);
    }
  
    alert(`Nice to meet you, ${userName}. Enjoy your stay at Infinity Gold.`);
  });

  //for smooth scrolling behaviour
  Element.scroll({behaviour:'smooth'});

  //Automatic date

  document.addEventListener('DOMContentLoaded', function(){
    
    const dateElement = document.getElementById('dateDisplay');
if(dateElement){
    const today = new Date();
    const options = { 
      weekday: 'long',
       day: 'numeric',
        month: 'long',
         year: 'numeric'
        };
    const formattedDate = today.toLocaleDateString('en-ZA', options);

    dateElement.textContent = formattedDate;

  } else{
    console.warn('Couldnot find #dateDisplay element in the DOM.');
  }
  });

  document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.gallery img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const closeBtn = document.querySelector('.close');
  
    images.forEach(img => {
      img.addEventListener('hover', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
      });
    });
  
    closeBtn.addEventListener('hover', () => {
      lightbox.style.display = 'none';
      lightboxImg.src = '';
    });
  
    lightbox.addEventListener('hover', (e) => {
      if (e.target !== lightboxImg && e.target !== closeBtn) {
        lightbox.style.display = 'none';
        lightboxImg.src = '';
      }
    });
  });

//Security casual  protection
function sanitizeInput(input){
  return input.replace(/[<>&'"]/g, (c) => ({
    '<': '&lt;', '>': '&gt;', '&': '&amp;','"': '&quot;', "'": '&#39;'
  })[c]);
}
  //Enquiry form
  document.getElementById('enquiryForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    const status = document.getElementById('formStatus');
  
    if (!name || !email || !message) {
      status.textContent = "Please fill in all required fields.";
      status.style.color = "crimson";
      return;
    }
  
    // Placeholder for success (you'd send data to a backend here)
    status.textContent = "Thanks! Your enquiry has been sent ✨";
    status.style.color = "lightgreen";
  
    // Reset the form (optional)
    this.reset();
  });

  