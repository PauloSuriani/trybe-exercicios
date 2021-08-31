//3- Agora inverta o lado do triângulo.

let n = 8;
let drawAux = '';

for (let i = 0; i < n; i += 1){
  for (let j = 0; j < n; j += 1){
    if (i+j < n-1)
      drawAux += ' ';
    else drawAux += '*';
  }
  console.log(drawAux);
  drawAux = '';
}