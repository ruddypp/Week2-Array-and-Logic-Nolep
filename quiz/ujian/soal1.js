/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
  // you can only write your code here!
  let indexO = -1;
  let indexX = -1;
  let terkecil = 666666666666;
  for(let i = 0; i < arr.length; i++){
    if (arr[i] === 'o'){
      indexO = i;
    }else if ( arr[i] === 'x'){
      indexX = i;   
    }
    if(indexO !== -1 && indexX !== -1){
      if(Math.abs(indexX - indexO) < terkecil){
        terkecil = Math.abs(indexX - indexO);
      }
    }
  }
if ( terkecil > indexO && terkecil > indexX){
  return 0;
}else{
  return terkecil;
}
}
  
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1