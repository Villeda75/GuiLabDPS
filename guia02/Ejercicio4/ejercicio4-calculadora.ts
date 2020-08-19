/*
Crear una clase Calculadora, con las propiedades numero1, numero1, Le añadiremos
un constructor al que le pasaremos los valores anteriores cuando instanciemos el
objeto. Y también debe de tener un método operaciones básicas (+ , -, * , /), Este
método debe imprimir en pantalla todas las operaciones realizadas.
*/

//crear la clase
class Calculadora {
    //propiedades
    numero1: number;
    numero2: number;
  
    //constructor que inicializa las propiedades
    constructor(numero1:number, numero2:number) {
      this.numero1 = numero1;
      this.numero2 = numero2;
    }
  
    //método que calcula y retorna las operaciones basicas entre dos numeros
    operacionesBasicas():string {
      let a: number = this.numero1;
      let b: number = this.numero2;
  
      let calculosRealizados: string = `
          (${a} + ${b}) = ${a+b}
          (${a} - ${b}) = ${a-b}    
          (${a} * ${b}) = ${a*b}   
          (${a} / ${b}) = ${(a/b).toPrecision(2)}    
      `;
      return calculosRealizados;
    }
  }
  
  //instancia de dos calculadoras (objetos)
  var calculadora1:Calculadora = new Calculadora(5, 3);
  let calculo1 = calculadora1.operacionesBasicas();
  console.log(calculo1);
  
  var calculadora2:Calculadora = new Calculadora(4,6);
  let calculo2 = calculadora2.operacionesBasicas();
  console.log(calculo2);