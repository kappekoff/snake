var slange = [];
const xStorrelse = window.innerWidth-30;
const yStorrelse = window.innerHeight-30;
const storrelseSlange = 20;
const nx = xStorrelse / storrelseSlange;
const ny = yStorrelse / storrelseSlange;
const hastighet = 1;
var fartx = hastighet; 
var farty = 0;
var mat;


function setup() {
    createCanvas(xStorrelse, yStorrelse);

    slange[0] = [nx/2, ny/2];
    slange[1] = [nx/2-1, ny/2];
    slange[2] = [nx/2-2, ny/2];
    mat = [Math.floor(random(nx)), Math.floor(random(ny))];
    frameRate(30);

}

function draw(){
    debugger;
    background(255)
    rect(mat[0]*storrelseSlange,mat[1]*storrelseSlange, storrelseSlange, storrelseSlange);
    for(let i = 0; i < slange.length; i++) {
        fill(0);
        rect(slange[i][0]*storrelseSlange,slange[i][1]*storrelseSlange, storrelseSlange, storrelseSlange);
    }

   let posisjonx = slange[0][0];
   let posisjony = slange[0][1];
   slange.unshift([wrap(posisjonx, fartx, nx), wrap(posisjony, farty, ny)]);
   //spis
   if(posisjonx === mat[0] && posisjony === mat[1]){
        mat = [Math.floor(random(nx)), Math.floor(random(ny))];
   }
   else {
        slange.pop();
   }
    
   
   

   for(let i = 1; i < slange.length; i++){
        if(slange[0][0] === slange[i][0] && slange[0][1] === slange[i][1]){
            noLoop();
            fill(65);
            textSize(ny*storrelseSlange/10)
            text('gameOver', nx/2*storrelseSlange, ny/2*storrelseSlange);
        }
   }
}

function wrap(x, dx, storrelse){
    let a = (x + dx) % storrelse;
    a = a < 0 ? storrelse:a;
    return Math.floor(a);

}

function keyPressed(){
    switch(keyCode){
        case LEFT_ARROW:
            if(fartx === 0){
                fartx = -hastighet;
                farty = 0;
            }
            break;
        case RIGHT_ARROW:
            if(fartx === 0){
                fartx = hastighet;
                farty = 0;
            }
            break;
        case UP_ARROW:
            if(farty === 0){
                fartx = 0;
                farty = -hastighet;
            }
            break;
        case DOWN_ARROW:
            if(farty === 0){
                fartx = 0;
                farty = hastighet;
            }
            break;
        default:
            break;
    }
    console.log([fartx, farty]);
    console.log(slange[0]);
}
