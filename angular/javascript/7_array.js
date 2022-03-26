let comidas = ['strogonoff', 'lasanha', 'pizza', 'churrasco'];

// 1. Como acessar o último  item de um array?
comidas[comidas.length - 1];

// 2. Construa uma função que retorne true se um elemento existir no array
//caso não queira cria a função toda, faz reduzida
const alimento = 'pizza';
if(comidas.includes(alimento)) console.log(`${alimento} existe no array`)
else console.log(`${alimento} Não existe no array`)

//
/*function includes(array, elemento) {
  for (let item of array) if (item === elemento) return true;
  return false;
}
const alimento = 'lasanha'
if(includes(comidas, alimento)) console.log(`${alimento} existe no array`)
else console.log(`${alimento} Não existe no array`)

//elemento especifico dentro de um array
function includes(array, elemento){return}
const alimento = 'macarronada'
if(includes(comidas, 'macarronada')) console.log(`${alimento} existe no array`)
else console.log(`${alimento} Não existe no array`)*/

// 3. Construa uma função que dado um elemento, retorne sua posição. Retorna -1 caso o elemento não exista no array.
let achar = comidas.indexOf('pizza')
let achar1 = comidas.indexOf('cafe')
console.log(achar1)

// 4. Construa uma função que adiciona um novo elemento na última posição do array
let add = comidas.push('carne');
console.log(comidas)

// 5. Construa uma função que remova a última posição do Array
let remover = comidas.pop();
console.log(comidas)
console.log(remover)

// 6. Construa uma função que retorne as últimas n posições do Array
let ultima = comidas.slice(-2)
console.log(ultima)

// 7. Construa uma função que recebe dois arrays e retorne um array concatenado
let copiar = comidas.slice()
console.log(comidas)
console.log(copiar)
let resultado = comidas.concat(copiar)
console.log(resultado)

// 8. Crie um função que receba um array e uma função de entrada e execute essa função em todos os elementos do array
const every = (array, funcao) => {
  const resultados = [];
  for (let elemento of array) {
    resultados.push(funcao(elemento));
  }
  return resultados;
};

let numeros = [0, 2, 4, 8, 16, 32];
const quadrado = (x) => x * x;
const cubo = (x) => x * x * x;

console.log(every(numeros, quadrado));
console.log(every(numeros, (num) => num * num));

// 9. Crie um função que receba um array e uma função de entrada e retorne apenas os elementos para os quais essa função for verdade
let cha = ['cha preto','cha camomila','cha erva cidreira','cha hibisco'];
const chas = 'cha preto';
if(cha.includes(chas)) console.log(`${chas} existe no array`)
else console.log(`${chas} Não existe no array`)

// 10. Crie um função que receba um array e uma função de entrada e retorne true se ela for verdadeira para todos os elementos do array
let lugares = ['mar', 'capela', 'igraja', 'casa']
function includes(array, elemento){
  for(let item of array) if(item === elemento) return true;
  return false;
}
const lugar = 'mar';
if(includes(lugares, lugar))console.log(`${lugar} existe`)
else console.log(`${lugar} Não existe`)