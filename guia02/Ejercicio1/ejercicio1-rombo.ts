/*
Crear la clase Rombo, la cual debe tener dos propiedades: DiagonalVertical y
DiagonalHorizontal. añadiremos un constructor al que le pasaremos los valores
anteriores cuando instanciemos el objeto. Y también debe de tener un método que
calcule el area, que será la multiplicación de (DiagonalVertical * DiagonalHorizontal)/2.
Este método devolverá un número.
*/

//crear la clase
class Rombo {
    //propiedades
    diagonalVertical: number;
    diagonalHorizontal: number;
  
    //constructor que inicializa las propiedades
    constructor(diagonalVertical:number, diagonalHorizontal:number) {
      this.diagonalVertical = diagonalVertical;
      this.diagonalHorizontal = diagonalHorizontal;
    }
  
    //método que calcula y retorna el área del rombo
    calcularArea():number {
      let areaRombo: number = (this.diagonalVertical*this.diagonalHorizontal)/2;
      return areaRombo;
    }
  }
  
  //instancia de dos rombos (objetos)
  var rombo1:Rombo = new Rombo(5, 3);
  let areaRombo1 = rombo1.calcularArea();
  console.log(`El área del Rombo 1 es: ${areaRombo1} cm^2`);
  
  var rombo2:Rombo = new Rombo(4,6);
  let areaRombo2 = rombo2.calcularArea();
  console.log(`El área del Rombo 2 es: ${areaRombo2} cm^2`);