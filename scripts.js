function init () {
    const missionAbort = document.getElementById("missionAbort");
    const land = document.getElementById("landing");
    const takeOff = document.getElementById("takeoff");
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const right = document.getElementById("right");
    const left = document.getElementById("left");
    let image = document.getElementById("rocket");
        image.style.position = 'relative';
        image.style.left = '0px';
        image.style.bottom = '0px'; 
  

  
  
  takeOff.addEventListener("click", function() {
     let response = window.confirm("Confirm that the shuttle is ready for takeoff");
       if (response) {
         status.innerHTML = "Shuttle in flight"; 
         document.getElementById("shuttleBackground").style.backgroundColor = "blue";
         document.getElementById("spaceShuttleHeight").innerHTML = 10000;  
          }
     });
  
  
  land.addEventListener("click", function(event) {
     window.alert("The shuttle is landing. Landing gear engaged.");
     flightStatus.innerHTML = "The shuttle has landed.";
     document.getElementById("shuttleBackground").style.backgroundColor = ""; 
     document.getElementById("spaceShuttleHeight").innerHTML = 0; 
     image.style.position = ''; 
   });  

  
  missionAbort.addEventListener("click", function(event) {
     let response = window.confirm("Confirm that you want to abort the mission");
       if (response) {
         flightStatus.innerHTML = "Mission Aborted"; 
         document.getElementById("shuttleBackground").style.backgroundColor = ""; 
         document.getElementById("spaceShuttleHeight").innerHTML = 0; 
        }
         image.style.position = ''; 
   });

  
  up.addEventListener("click", function(event) {
     let moveUp = parseInt(image.style.bottom) + 10 + 'px';
       image.style.bottom = moveUp; 
       document.getElementById("spaceShuttleHeight").innerHTML = parseInt(document.getElementById("spaceShuttleHeight").innerHTML) + 10000;     
   }); 

  
  down.addEventListener("click", function(event) {
     let moveDown = parseInt(image.style.bottom) - 10 + 'px'; 
       image.style.bottom = moveDown; 
       document.getElementById("spaceShuttleHeight").innerHTML = parseInt(document.getElementById("spaceShuttleHeight").innerHTML) - 10000;     
   }); 

  
  right.addEventListener("click", function(event) {
     let moveRight = parseInt(image.style.left) + 10 + 'px'; 
       image.style.left = moveRight; 
   }); 

  
  left.addEventListener("click", function(event) {
     let moveLeft = parseInt(image.style.left) - 10 + 'px'; 
       image.style.left = moveLeft; 
   }); 
    
}

window.addEventListener("load", init);