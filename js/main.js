'use strict';

function drawerToggle() {
    let menu = document.getElementById("nav");
    if (menu.className === "navbar") {
        menu.className = menu.className + " showMenu";
    } else {
        menu.className = "navbar";
    }
}

function countUp(id, start, end, duration) {
  // assumes integer values for start and end
  
  var obj = document.getElementById(id);
  var range = end - start;
  // no timer shorter than 50ms (not really visible any way)
  var minTimer = 50;
  // calc step time to show all interediate values
  var stepTime = Math.abs(Math.floor(duration / range));
  
  // never go below minTimer
  stepTime = Math.max(stepTime, minTimer);
  
  // get current time and calculate desired end time
  var startTime = new Date().getTime();
  var endTime = startTime + duration;
  var timer;

  function run() {
      var now = new Date().getTime();
      var remaining = Math.max((endTime - now) / duration, 0);
      var value = Math.round(end - (remaining * range));
      obj.innerHTML = value;
      if (value == end) {
          clearInterval(timer);
      }
  }
  
  timer = setInterval(run, stepTime);
  run();
}

let slideIndex = 0;

function carousel() {
    var i;
    var x = document.getElementsByClassName("partner-logos");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "inline-block"; 
    setTimeout(carousel, 12000); // Change image every 2 seconds 
}

function scrollFunction() {
    let btt = document.getElementById("back-to-top");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btt.style.display = "block";
    } 
    else {
        btt.style.display = "none";
    }
}