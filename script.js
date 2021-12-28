let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let startButton = document.getElementById('start');
let currentlyPlaying  =true;
const botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg";
let closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";

const randomChoreDoorGenerator= () =>{
 let choreDoor = Math.floor(Math.random()*numClosedDoors);

 if(choreDoor===0)
 {
openDoor1 = botDoorPath ;
openDoor2 = spaceDoorPath;
openDoor3 = beachDoorPath;
 }
 else if(choreDoor==1)
 {
openDoor2 =botDoorPath ;
openDoor1 = beachDoorPath;
openDoor3 = spaceDoorPath;
 }
 else{
openDoor3 = botDoorPath;
openDoor2 = beachDoorPath;
openDoor1 = spaceDoorPath;
}
}

doorImage1.onclick = () =>{
  if(!isClicked(doorImage1) && currentlyPlaying) {

doorImage1.src = openDoor1;
playDoor(door1);
  }
}

doorImage2.onclick = () =>{
  if(!isClicked(doorImage2) && currentlyPlaying) {
 doorImage2.src = openDoor2;
 playDoor(door2);
  }
}

doorImage3.onclick=() => {
  if(!isClicked(doorImage3) && currentlyPlaying) {
 doorImage3.src = openDoor3;
 playDoor(door3);
  }
}

startButton.onclick = () =>{
 if(!currentlyPlaying) {
 startRound();
} 
}

const startRound = () =>{

  door1.src = closedDoorPath;
  door2.src = closedDoorPath;
  door3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = `Good Luck!`;
  currentlyPlaying = true;
  randomChoreDoorGenerator();
  
}

const gameOver = (status) =>{
  if(status==='win'){
    startButton.innerHTML =  `You Win! Play again?`;
  }
  else{
    startButton.innerHTML = `Game Over! Play again?`;
  }
  currentlyPlaying = false;
}

const isBot = (door) =>{
  if(door.src===botDoorPath){
    return true;
  }
  else{
    return false;
  }
}

const isClicked = (door) =>{
 if(door.src === closedDoorPath)
 {
   return false;
 }
 else
 {
   return true;
 }
}

const playDoor = (door) =>{
 numClosedDoors--;
 if(numClosedDoors===0){
   gameOver('win');
 }
 else if(isBot(door)){
   gameOver();
 }
}

startRound();


