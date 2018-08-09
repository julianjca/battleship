//*Variable
let size = 10;
let argv = process.argv;
const argvInput = [];
//let alphabet = "XABCDEFGHIJ";
const result = [];
const battleShips =[5,4,3,2];
let condition1 = true;

let randCol;
let randRow;

const shipArr = [
  {name: 'A', space: 5, position : []},
  {name: 'B', space: 4, position : []},
  {name: 'C', space: 3, position : []},
  {name: 'D', space: 2, position : []}
];


if(argv.length>12||argv.length<2){
  console.log("Maximum attack is 10 times");
} else{
  createargvInput();
  console.log(argvInput);

  //*Print starting board
  createBoard();
  printBoard();

  //*Insert ships
  //createShips();
  newCreateShip();
  printBoard();

  //*Check how many hit
  let counterCheck = 0;
  let counterHit = 0;
  let counterFail = 0;

  while(counterCheck<argvInput.length){
    if(result[argvInput[counterCheck][0]][argvInput[counterCheck][1]]==="🛳"){
      counterHit++;
      result[argvInput[counterCheck][0]][argvInput[counterCheck][1]]="🔥";
    } else if(result[argvInput[counterCheck][0]][argvInput[counterCheck][1]]==="🌊"){
      result[argvInput[counterCheck][0]][argvInput[counterCheck][1]] = "❌";
      counterFail++;
    }
    counterCheck++;
  }

  //*Print Final Board
  printBoard();
  printString();
  console.log(`Number of 🔥 = ${counterHit}`);
  console.log(`Number of ❌ = ${counterFail}`);

}

function printString(){
  for(let i = 0;i<size;i++){
    let temp = "";
    for(let j = 0;j<size;j++){
      temp += `${result[i][j]}   `;
    }
    console.log(temp);
  }
  console.log(" ");
}

//!Modular Function
function createBoard() {
  for(let i = 0;i<size;i++){
    let temp = [];
    for(let j = 0;j<size;j++){
      temp.push("🌊");
    }
    result.push(temp);
  }
}

function printBoard() {
  for(let i = 0;i<size;i++){
    let temp = [];
    for(let j = 0;j<size;j++){
      temp.push(result[i][j]);
    }
    console.log(temp);
  }
  console.log(" ");
}

function createShips() {
  let counterShip = 0;
  while(counterShip<battleShips.length){
    if(counterShip===0){
      result[0][0] = "S";
      result[1][0] = "S";
    }
    else if(counterShip===1){
      result[2][1] = "S";
      result[3][1] = "S";
      result[4][1] = "S";
      result[5][1] = "S";
      result[6][1] = "S";
    }
    else if(counterShip===2){
      result[8][1] = "S";
      result[8][2] = "S";
      result[8][3] = "S";
      result[8][4] = "S";
    }
    else if(counterShip===3){
      result[2][7] = "S";
      result[3][7] = "S";
      result[4][7] = "S";
      result[5][7] = "S";
    }
    counterShip++;
  }
}

function createargvInput(){
  for(let i = 2;i<argv.length;i++){
    let temp = [];
    for(let j = 0;j<2;j++){
      temp.push(Number(argv[i][j]));
    }
    argvInput.push(temp);
  }
  console.log(" ");
  return argvInput;
}

//!Flexible Creating Ship
function newCreateShip(){
  let counter = 0;
  while(counter<shipArr.length){
    let condition = true;

    while(condition===true){
      randCol = Math.floor(Math.random()*size);
      randRow = Math.floor(Math.random()*size);
      let randomize = Math.floor(Math.random()*3);
      let counter1 = 0;

      if(randomize===0){ //*Move Up
        debugger;
        if(randRow-shipArr[counter].space-1<0){
          debugger;
          counter1++;
        } else{
          for(let j = randRow;j>randRow-shipArr[counter].space-1;j--){
            debugger;
            if(result[j][randCol]==="🛳"){
              counter1++;
            }
          }
        }
        if(counter1===0){
          debugger;
          for(let i = randRow;i>randRow-shipArr[counter].space;i--){
            result[i][randCol] = "🛳";
          }
          counter++;
          condition=false;
        }
      }

      else if(randomize===1){ //*Move Down
        debugger;
        if(shipArr[counter].space-randRow-1<0){
          counter1++;
        } else{
          for(let j = randRow;j<randRow+shipArr[counter].space-1;j++){
            if(result[j][randCol]==="🛳"){
              counter1++;
            }
          }
        }
        if(counter1===0){
          for(let i = randRow;i<randRow+shipArr[counter].space;i++){
            result[i][randCol] = "🛳";
          }
          counter++;
          condition=false;
        }
      }

      else if(randomize===2){ //*Move Left
        debugger;
        if(randCol-shipArr[counter].space-1<0){
          counter1++;
        } else{
          for(let j = randCol;j>randCol-shipArr[counter].space-1;j--){
            if(result[randRow][j]==="🛳"){
              counter1++;
            }
          }
        }
        if(counter1===0){
          for(let i = randCol;i>randCol-shipArr[counter].space;i--){
            result[randRow][i] = "🛳";
          }
          counter++;
          condition=false;
        }
      }

      else if(randomize===3){ //*Move Right
        debugger;
        if(shipArr[counter].space-randCol-1<0){
          counter1++;
        } else{
          for(let j = randCol;j<randCol+shipArr[counter].space-1;j++){
            if(result[randRow][j]==="🛳"){
              counter1++;
            }
          }
        }
        if(counter1===0){
          for(let i = randCol;i<randCol+shipArr[counter].space-1;i++){
            result[randRow][i] = "🛳";
          }
          counter++;
          condition=false;
        }
      }
      printBoard();
      console.log(" ");
    }
  }
}

