/*const integrantes = {
  vocalista:'Eminem',  
}
for(let integrante in integrantes)
console.log(integrantes[integrante]);
console.log(`${integrantes[integrante]}`)*/

//function soma(a, b){return a+b}console.log(soma(1,2))
/*let pikachu = {}
let nome ='pikachu'
function mudaNome(nome){(nome = 'Isabella')}
//nome = mudaNome(nome)
//mudaNome(nome)
console.log(nome)*/

//recebe o valor
/*let pikachuLevel = 10;
function levelUp(level){
  ++level;
}
levelUp(pikachuLevel);
console.log(pikachuLevel);
console.log('===============')
//recebe o objeto
let pikachu = {level: 10, tipo: 'eletrico', stats:{}}
function levelUp(pokemon){++pokemon.level}
levelUp(pikachu)
console.log(pikachu.level)*/
let comidas = ["strognoff", "lasanha","pizza", "churrasco"];
//console.log(comida[0]);
//for(let comida of comidas)console.log(comida)
//console.log(comidas.length)
//console.log(comidas[comidas.length - 1])

function includes(array, elemento){ 
  for (let item of array) if(item === elemento)return true;
  return false;
}
const alimento = 'lasanha';
if(includes(comidas, alimento))console.log(`${alimento} existe`)
else console.log(`${alimento} não existe`)