/*
/ Rover works using the followCommands(commands) funtion.
/ the 'comands' should be a string of characters without spaces.
/ the characters can be 'f' (for forward), 'b' (for backwards),
/ 'l' (for turn left), and 'r' (for turn right). The rover
/ starts on square [0, 0] facing North of a 10 X 10 grid. 
/ [0, 0] is the North-Eastern-most position. [9, 9] is 
/ the South-Western-most position. If the rover is commanded to 
/ move outside of the defined grid, it instead does nothing.
/ After following all commands, a log of all the squares within
/ the grid that the rover moved to are printed in order.
*/
var rover = {
    direction: "N",
    x: 0,
    y: 0,
    travelLog: ["[0, 0]"]
};

function turnLeft(rover){
  switch(rover.direction) {
    case "N":
        rover.direction = "W";
        break;
    case "E":
        rover.direction = "N";
        break;
    case "S":
        rover.direction = "E";
        break;
    case "W":
        rover.direction = "S";
        break;
    default:
        console.log("Could not turn left.");
  }

}

function turnRight(rover){
  switch(rover.direction) {
    case "N":
        rover.direction = "E";
        break;
    case "E":
        rover.direction = "S";
        break;
    case "S":
        rover.direction = "W";
        break;
    case "W":
        rover.direction = "N";
        break;
    default:
        console.log("Could not turn right.");
  }
}

/*
/ This function performs checks before moving. If moving would 
/ take the rover outside of its defined boundaries, it stays 
/ in place instead. The acceptable values for x and y are from 
/ 0 to 9. [0, 0] is the North-Eastern-most position. [9, 9] is 
/ the South-Western-most position.
*/
function moveForward(rover){
  switch(rover.direction) {
    case "N":
        // Only move if moving will NOT take the rover out of bounds
        if(!(rover.y - 1 <= -1)){
          rover.y--;
          logPosition(rover);
        }
        break;
    case "E":
        if(!(rover.x + 1 >= 10)){
          rover.x++;
          logPosition(rover);
        }
        break;
    case "S":
        if(!(rover.y + 1 >= 10)){
          rover.y++;
          logPosition(rover);
        }
        break;
    case "W":
        if(!(rover.x - 1 <= -1)){
          rover.x--;
          logPosition(rover);
        }
        break;
    default:
        console.log("Could not move forward.");
  }
}

/*
/ This function will perform checks in a similar manner to 
/ the moveForward function but while moving backwards.
*/
function moveBakwards(rover){
  switch(rover.direction) {
    case "N":
        // Only move if moving will NOT take the rover out of bounds
        if(!(rover.y + 1 >= 10)){
          rover.y++;
          logPosition(rover);
        }
        break;
    case "E":
        if(!(rover.x - 1 <= -1)){
          rover.x--;
          logPosition(rover);
        }
        break;
    case "S":
        if(!(rover.y - 1 <= -1)){
          rover.y--;
          logPosition(rover);
        }
        break;
    case "W":
        if(!(rover.x + 1 >= 10)){
          rover.x++;
          logPosition(rover);
        }
        break;
    default:
        console.log("Could not move backwards.");
  }
}

function followCommands(commands){
  for(var i = 0; i < commands.length; i++){
    switch(commands[i]){
      case "f":
          moveForward(rover);
          break;
      case "b":
          moveBakwards(rover);
          break;
      case "l":
          turnLeft(rover);
          break;
      case "r":
          turnRight(rover);
          break;
      default:
          console.log("I do not understand that command");
    }
  }
  printLog(rover);
}

/*
/ Stores every new position reached by the rover as a string 
/ within the travelLog attribute of the rover object.
*/
function logPosition(rover){
  rover.travelLog.push("[" + rover.x + ", " + rover.y + "]");
}

/*
/ Prints to the console every position stored within the 
/ travelLog property of the rover object.
*/
function printLog(rover){
  for(var i = 0; i < rover.travelLog.length; i++){
    console.log(rover.travelLog[i]);
  }
}

// testing function
function currentDirection(){
  console.log("direction is now " + rover.direction);
}

// testing function
function currentPosition(){
  console.log("Position in now [" + rover.x + ", " + rover.y + "]");
}

// testing function
function test(){
  console.log("test succesful!");
}
