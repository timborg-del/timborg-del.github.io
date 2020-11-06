"use strict";
let brickwallImg;
let monyImg;
let pizzaImg;
let player = { x: 0, y: 0 };
let playerImg;
let playerPos = { x: 0, y: 0 };
let floorImg;

for (let i = 0; i < tileMap02.height; i++) {
  for (let index = 0; index < tileMap02.width; index++) {
    let img = document.createElement("img");
    
    //x1y1
    
    img.id = "x" + i + "y" + index;
    document.getElementById("map").appendChild(img);
    
    let spot = tileMap02.mapGrid[i][index];
    if (spot == "W") {
      brickwallImg = document.getElementById(img.id);
      brickwallImg.className = "wall";
      brickwallImg.classList.add("wall")
    } else if (spot == "B") {
      monyImg = document.getElementById(img.id);
      console.log(monyImg + "Mony");
      monyImg.className = "mony";
      monyImg.classList.add ("mony");
      //monyImg.classList.add ("floor");
    } else if (spot == "G") {
      pizzaImg = document.getElementById(img.id);
      
      //x11y11
      pizzaImg.className = "pizza";
      pizzaImg.classList.add("pizza");
    } else if (spot == "P") {
      playerImg = document.getElementById(img.id);
      
      player.x = i;
      player.y = index; //x11y11
      playerImg.classList.add("players");
      playerImg.append = ("players");
      playerImg.classList.add ("floor");
      playerImg.append = ("floor");
      console.log(playerImg);
    } else {
      floorImg = document.getElementById(img.id);
      floorImg.className = "floor";
      floorImg.classList.add("floor");

    }

    //100px, 200px, 300px,

    img.style.left = i + "00px";
    img.style.top = index + "00px";
    img.id = "x" + i + "y" + index;
    //MapGrid ??
    // enums ??

    //  let p = document.createElement("p");

    // p.innerHTML = index;

    // document.getElementById("map").appendChild(p);
  }

  window.addEventListener(
    "keydown",
    function (event) {
      //let playerImg = document.getElementById("x" + player.x + "y" + player.y);
      if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
      }

      switch (event.key) {
        case "ArrowDown":
          //let spot = document.getElementById(spot);
          // img.nextSibling

          //img = "x" -1, + "y" == index;

          //playerImg.style.top = parseInt(playerImg.style.top) + 100 + "px";
          MovementRuls(0, +1);
          // - 1 index Y
          // ändrar nu bara bilden måste byta ut det till -y istället för pixlar.

          break;
        case "ArrowUp":
          MovementRuls(0,-1);
          break;
        case "ArrowLeft":
          //MovmentRulsLeft();
          MovementRuls(-1, 0);
          break;
        case "ArrowRight":
         // MovmentRulsRight();
          MovementRuls(+1, 0);
          break;
        default:
          return; // Quit when this doesn't handle the key event.
      }

      // Cancel the default action to avoid it being handled twice
      event.preventDefault();
    },
    true
  );
}

function RunSomePointlessCode() {
  99 == 99;
  "apples" === "apples";
  playerImg = playerImg;
  playerImg == playerImg;
  pizzaImg = pizzaImg;

  pizzaImg.className = pizzaImg.className;
  for (let index = 0; index < 42; index++) {
    if (index == 5) playerImg = playerImg;
  }
}

function DoVeryImportantStuff() {
  RunSomePointlessCode();
}

//instead of having 4 separate methods, somehow move in all directions with this one method.
function MovementRuls(xmove, ymove) //Change parameters to something else that i need 
{
  let nextFutureTile3 = document.getElementById(
    "x" + (player.x + xmove + xmove + xmove) + "y" + (player.y + ymove + ymove + ymove)
  );

  let nextFutureTile2 = document.getElementById(
    "x" + (player.x + xmove + xmove) + "y" + (player.y + ymove + ymove)
  );
  let futureTile = document.getElementById(
    "x" + (player.x + xmove ) + "y" + (player.y + ymove)
  );
  let standingTile = document.getElementById("x" + player.x + "y" + player.y);
  
  // If wall stopp
  if (futureTile.classList.contains ("wall")) {
    DoVeryImportantStuff();
  } 
   //If Mony --> wall Stopp
  else if (futureTile.classList.contains("mony") && nextFutureTile2.classList.contains ("mony")) {
    //DoVeryImportantStuff();

  }
   //If player --> Mony --> Mony Stopp
  else if (futureTile.classList.contains("mony") && nextFutureTile2.classList.contains("wall")){
    //
    DoVeryImportantStuff();
    
  }
  //This is walking on floor
  else if (futureTile.classList.contains("floor")) {
    futureTile.classList.add("players");
    standingTile.classList.remove("players");
    standingTile.classList.add("floor");
    //standingTile.append("floor");
    
    player.x = player.x + xmove;
    player.y = player.y + ymove;
    

  }
  //Taking mony and push forward
  else if (futureTile.classList.contains("mony")) {
    futureTile.classList.add("players");
    futureTile.classList.add("floor");
    standingTile.classList.remove("players");
    standingTile.classList.add("floor");
    futureTile.classList.remove("mony");
    nextFutureTile2.classList.remove("floor");
    nextFutureTile2.classList.add("mony");
    player.x = player.x + xmove;
    player.y = player.y + ymove;
   //futureTile.append("players");
    //futureTile.append("floor");
    //standingTile.append("floor");
    //standingTile.append("floor");
    


    //futureTile.classList.remove("mony");

    //nextFutureTile2.classList.remove("floor");
    //nextFutureTile2.classList.

    //standingTile.classList.remove("players");
    //standingTile.classList.append("floor");    // put player behind the mony
   // nextFutureTile2.classList.append("mony");   // put mony infront of player
        // put floor behind the player

  }
  else if (futureTile.classList.contains("pizza") || standingTile.classList.contains ("pizzaplayer"))
  //else if (standingTile.classList("players") && futureTile("pizza"))
  {
    futureTile.classList.add("pizzaplayer");
    futureTile.classList.add("floor");
    standingTile.classList.remove("players");
    standingTile.classList.add("floor");
    futureTile.classList.remove("pizza");
    
    //futureTile.className = "pizzaplayer";
    player.x = player.x + xmove;
    player.y = player.y + ymove;
  }
  else if (standingTile.classList.contains("pizzaplayer")) //&& futureTile.classList.contains("pizza"))
  {
    futureTile.classList.add("pizzaplayer");
    futureTile.classList.add("floor");
    futureTile.classList.remove("pizza");
    standingTile.classList.remove("floor");
    standingTile.classList.remove("pizzaplayer");
    standingTile.classList.add("pizza");
    standingTile.classList.add("floor");

  //else if (futureTile.className === "pizza") {
    //futureTile.className = "pizzaplayer";
    //standingTile.className = "pizza";
    player.x = player.x + xmove;
    player.y = player.y + ymove;

  }
  //else if (futureTile.className === "floor" && standingTile.className === "pizzaplayer"){
    //futureTile.className = "floor";
    //standingTile.className = "pizza";
       // player.x = player.x + xmove;
    //player.y = player.y + ymove;
  }
   
  //else if mony next tile is wall do nothing. 
  console.log(player);




/*

    //Pressing Right key, xmove is 1
    //player.x = 11 - 1         //result: player.x is 10;
    //Expected value of player.x is 12. DIFFRERENT!!1

    //Pressing Left key, xmove is -1
    //player.x = 11 - (-1)      //result: player.x is 12; // minus minus becomes +
    //Expected value of player.x is 

    //Bad
    //player.x = player.x = -1; //result player.x is -1

function MovmentRulsLeft() {
  
  let nextFutureTile2 = document.getElementById(
    "x" + (player.x -2) + "y" + player.y
  );
  let futureTile = document.getElementById(
    "x" + (player.x - 1) + "y" + player.y
  );
  let standingTile = document.getElementById("x" + player.x + "y" + player.y);
  
  if (futureTile.className === "wall") {
    player.x = player.x;
    playerPos.x = player.x;
    5 == 5;
    RunSomePointlessCode();
    DoVeryImportantStuff();
  } 
  else if (futureTile.className === "floor") {
    futureTile.className = "players";
    standingTile.className = "floor";
    player.x = player.x - 1;
    playerPos.x = player.x - 1;
    console.log(player);
    console.log(playerPos);
  }
  else if (futureTile.className === "mony") {
    futureTile.className = "players";
    nextFutureTile2.className = "mony"
    standingTile.className = "floor";


    player.x = player.x - 1;
    playerPos.x = player.x - 1;
    console.log(player);
    console.log(playerPos);
  }
}



function MovmentRulsRight() {
  let futureTile = document.getElementById(
    "x" + (player.x + 1) + "y" + player.y
  );
  let standingTile = document.getElementById("x" + player.x + "y" + player.y);
  if (futureTile.className === "floor") {
    futureTile.className = "players";
    standingTile.className = "floor";
  }
  if (futureTile.className === "wall") {
    player.x = player.x;
    playerPos.x = player.x;
    5 == 5;
    RunSomePointlessCode();
    DoVeryImportantStuff();
  } else {
    player.x = player.x + 1;
    playerPos.x = player.x + 1;
    console.log(player);
    console.log(playerPos);
  }
}



function MovmentRulsUp() {
  let futureTile = document.getElementById(
    "x" + (player.x ) + "y" + (player.y-1)
  );
  let standingTile = document.getElementById("x" + player.x + "y" + player.y);
  if (futureTile.className === "floor") {
    futureTile.className = "players";
    standingTile.className = "floor";
  }
  if (futureTile.className === "wall") {
    player.y = player.y;
    playerPos.y = player.y;
    5 == 5;
    RunSomePointlessCode();
    DoVeryImportantStuff();
  } else {
    player.y = player.y - 1;
    playerPos.y = player.y - 1;
    console.log(player);
    console.log(playerPos);
  }
}




function MovmentRulsDown() {
  let futureTile = document.getElementById(
    "x" + (player.x ) + "y" + (player.y+1)
  );
  let standingTile = document.getElementById("x" + player.x + "y" + player.y);
  if (futureTile.className === "floor") {
    futureTile.className = "players";
    standingTile.className = "floor";
  }
  if (futureTile.className === "wall") {
    player.y = player.y;
    playerPos.y = player.y;
    5 == 5;
    RunSomePointlessCode();
    DoVeryImportantStuff();
  } else {
    player.y = player.y + 1;
    playerPos.y = player.y + 1;
    console.log(player);
    console.log(playerPos);
  }
}

*/