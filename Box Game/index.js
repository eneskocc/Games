let cell  =  document.getElementsByClassName("cell");
let display  =  document.getElementsByClassName("displays");
let cellxy = [[1,2,3,4] , [1,2,3,4] , [1,2,3,4], [1,2,3,4]];
let cellxy1 = [[1,2,3,4] , [1,2,3,4] , [1,2,3,4], [1,2,3,4]];
function analyzeCells() {
    let counter = 0;
    for(let j=0; j< Math.sqrt(cell.length); j++) {
        for (let k=0; k<Math.sqrt(cell.length); k++) {
            cellxy[j][k] = cell[counter];
            counter++;
        }
    }
}


function analyzeDisplays() {
    let cc = 0;
    for(let j=0; j< Math.sqrt(display.length); j++) {
        for (let k=0; k<Math.sqrt(display.length); k++) {
            cellxy1[j][k] = display[cc];
            cc++;
        }
    }
}


function shape() {
    let a=0;
  for(let i = 0; i<4; i++) {
      for(let j = 0;j < 4; j++) {
          let gelen=Math.floor(Math.random() * 2);
          if(gelen==1) {
            changeCells1(i, j);
            a=1;
          }
      }
      if(a==1){
          break;
      }
  }
}

function changeCells1(x, y) {
    for(let i = 0; i<4; i++) {
        for(let j = 0;j < 4; j++) {
            if(x === i || y === j) {
                if(cellxy1[i][j].style.backgroundColor ===  "rgba(255, 167, 38, 0.7)") {
                    cellxy1[i][j].style.backgroundColor = "transparent";
                } else {
                    cellxy1[i][j].style.backgroundColor = "rgba(255, 167, 38, 0.7)" ;
                }
            }
        }
    }
}
function refresh(){
  for(let i = 0; i<4; i++) {
      for(let j = 0;j < 4; j++) {

              if(cellxy1[i][j].style.backgroundColor ===  "rgba(255, 167, 38, 0.7)") {
                  cellxy1[i][j].style.backgroundColor = "transparent";
              }

      }
  }
  for(let i = 0; i<4; i++) {
      for(let j = 0;j < 4; j++) {

              if(cellxy[i][j].style.backgroundColor ===  "rgba(255, 167, 38, 0.7)") {
                  cellxy[i][j].style.backgroundColor = "transparent";
              }

      }
  }

}

function control() {
    let kosul=true;
    for(let i = 0; i<4; i++) {
        for(let j = 0;j < 4; j++) {

                if(cellxy[i][j].style.backgroundColor !== cellxy1[i][j].style.backgroundColor ) {
                    kosul=false;
                    break;
                }
        }
    }
    if(kosul){
        setTimeout(function(){
          refresh();
          shape();
        },200);
    }

}
function changeCells(x, y) {
    for(let i = 0; i<4; i++) {
        for(let j = 0;j < 4; j++) {
            if(x === i || y === j) {
                if(cellxy[i][j].style.backgroundColor ===  "rgba(255, 167, 38, 0.7)") {
                    cellxy[i][j].style.backgroundColor = "transparent";
                } else {
                    cellxy[i][j].style.backgroundColor = "rgba(255, 167, 38, 0.7)" ;
                }
            }
        }
    }
    control();
}
