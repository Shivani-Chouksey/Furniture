const button = document.querySelector('#btn');

const displayButton = () => {
  window.addEventListener('scroll', () => {
    console.log(window.scrollY);
  
    if (window.scrollY > 100) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });
};

const scrollToTop = () => {
  button.addEventListener("click", () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    }); 
    console.log(event);
  });
};

displayButton();
scrollToTop();


 // Function to add the loader dynamically
 document.body.insertAdjacentHTML('beforebegin', '<div id="loader" class="loader-big"><div class="loader"></div></div>');
//  document.getElementById("#main").style.display="none"

 // Function to remove the loader after 2 seconds (adjust the delay as needed)
 function removeLoader() {
   var loader = document.getElementById("loader");
   var main=document.getElementById("main")
  //  main.style.overflow=hidden
   loader.style.opacity = "0"; // Fading out the loader
   setTimeout(function() {
     loader.style.display = "none"; // Hiding the loader after fadeOut
    //  document.getElementById("#main").style.display="block"

   }, 500);
 }

 // Adding an event listener to wait for the page to load before removing the loader
 window.addEventListener('load', function() {
   setTimeout(removeLoader, 2000); // Wait for page load PLUS two seconds.
 });


