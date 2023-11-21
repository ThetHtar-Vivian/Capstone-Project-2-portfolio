document.getElementById("changeButton").addEventListener("click", function() {
    // Change background color of .intro class
    var introElements = document.getElementsByClassName("intro");
    for (var i = 0; i < introElements.length; i++) {
      introElements[i].style.backgroundColor = "rgba(20, 18, 18, 0.672)";
    }

    var photoElements = document.getElementsByClassName("photo");
    for (var i = 0; i < photoElements.length; i++) {
      photoElements[i].style.backgroundColor = "rgba(20, 18, 18, 0.672)";
    }
  
  
    // Change body background (as previously done)
    document.body.style.background = "linear-gradient(45deg, #5f0b31d6, #00538ecb, rgba(57, 13, 85, 0.819), rgb(103, 7, 7), rgba(99, 99, 11, 0.82), rgba(110, 76, 13, 0.836))";
    document.body.style.backgroundSize = "300% 300%";
    document.body.style.animation = "color 16s ease-in-out infinite";
  
  });

  /////////

  document.getElementById("changeButtonLight").addEventListener("click", function() {
    // Change background color of .intro class
    var introElements = document.getElementsByClassName("intro");
    for (var i = 0; i < introElements.length; i++) {
      introElements[i].style.backgroundColor = "rgb(255, 255, 255)";
    }

    var photoElements = document.getElementsByClassName("photo");
    for (var i = 0; i < photoElements.length; i++) {
      photoElements[i].style.backgroundColor = "rgb(255, 255, 255)";
    }
  
  
    // Change body background (as previously done)
    document.body.style.background = "linear-gradient(45deg,#ffb3d5d6, #bae2ffcb ,rgba(227, 183, 255, 0.819),rgb(255, 154, 154),rgba(255, 255, 128, 0.82),rgba(255, 197, 90, 0.836))";
    document.body.style.backgroundSize = "300% 300%";
    document.body.style.animation = "color 16s ease-in-out infinite";

  });

  function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

  }