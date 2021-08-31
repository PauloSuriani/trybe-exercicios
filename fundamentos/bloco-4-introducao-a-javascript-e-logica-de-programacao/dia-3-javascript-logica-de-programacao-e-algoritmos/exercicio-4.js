// n = 5

//   *
//  ***
// *****

let n = 5;
let drawAux = '';

let lineAux = (n+1)/2;

//    if (i === lineAux - 1){
//  drawAux += '*';


for (let i = 0; i < lineAux; i += 1){
  //let drawCount = 0;
  for (let j = 0; j < n; j += 1){
    if (i+j < n-1)
      drawAux += ' ';
    else drawAux += '*';
  }
  console.log(drawAux);
  drawAux = '';
}
