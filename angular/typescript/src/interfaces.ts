interface calculo {
  (a: number, b: number): number;
}
const mult: calculo =  (a: number, b: number): number => a * b;
console.log(mult(4, 5));