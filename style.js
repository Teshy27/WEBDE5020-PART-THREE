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
    console.log("JavaScript is connected");
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

  

  