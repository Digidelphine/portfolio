document.addEventListener('DOMContentLoaded', function(){
    console.log("la page est chargée !");

    // Typed lib
    var options = {
      strings: ["Designer UX/UI", "Community Manager", "Social Manager"],
      typeSpeed: 100,
      loop: true
    }
    
    var typed = new Typed(".element", options);
})