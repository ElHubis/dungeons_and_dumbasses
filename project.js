 /* --- Main Page --- */ 

 const track = document.getElementById("image-track");

 const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;
 
 const handleOnUp = () => {
   track.dataset.mouseDownAt = "0";  
   track.dataset.prevPercentage = track.dataset.percentage;
 }
 
 const handleOnMove = e => {
   if(track.dataset.mouseDownAt === "0") return;
   
   const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
         maxDelta = window.innerWidth / 2;
   
   const percentage = (mouseDelta / maxDelta) * -100,
         nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
         nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
   
   track.dataset.percentage = nextPercentage;
   
   track.animate({
     transform: `translate(${nextPercentage}%, -45%)`
   }, { duration: 1200, fill: "forwards" });
   
   for(const image of track.getElementsByClassName("image")) {
     image.animate({
       objectPosition: `${100 + nextPercentage}% center`
     }, { duration: 1200, fill: "forwards" });
   }
 }
 
 /* -- Had to add extra lines for touch events -- */
 
 window.onmousedown = e => handleOnDown(e);
 
 window.ontouchstart = e => handleOnDown(e.touches[0]);
 
 window.onmouseup = e => handleOnUp(e);
 
 window.ontouchend = e => handleOnUp(e.touches[0]);
 
 window.onmousemove = e => handleOnMove(e);
 
 window.ontouchmove = e => handleOnMove(e.touches[0]);

/* --- Timeline Page --- */
function clickFunction_1() {
    var session_1 = document.getElementById("session_1");
    if (session_1.style.visibility === "hidden") {
      session_1.style.visibility = "visible";
      document.querySelector("#osynlig1").style.visibility = "visible";
    } else {
      session_1.style.visibility = "hidden";
      document.querySelector("#osynlig1").style.visibility = "hidden";
    }
  }
  
  function clickFunction_2() {
    var session_2 = document.getElementById("session_2");
    if (session_2.style.visibility === "hidden") {
      session_2.style.visibility = "visible";
      document.querySelector("#osynlig2").style.visibility = "visible";
    } else {
      session_2.style.visibility = "hidden";
      document.querySelector("#osynlig2").style.visibility = "hidden";
    }
  }
  
  function clickFunction_3() {
    var session_3 = document.getElementById("session_3");
    if (session_3.style.visibility === "hidden") {
      session_3.style.visibility = "visible";
      document.querySelector("#osynlig3").style.visibility = "visible";
    } else {
      session_3.style.visibility = "hidden";
      document.querySelector("#osynlig3").style.visibility = "hidden";
    }
  }

  function clickFunction_7() {
    var session_7 = document.getElementById("session_7");
    if (session_7.style.visibility === "hidden") {
      session_7.style.visibility = "visible";
      document.querySelector("#osynlig7").style.visibility = "visible";
    } else {
      session_7.style.visibility = "hidden";
      document.querySelector("#osynlig7").style.visibility = "hidden";
    }
  }