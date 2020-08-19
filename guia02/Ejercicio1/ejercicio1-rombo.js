/*
Crear la clase Rombo, la cual debe tener dos propiedades: DiagonalVertical y
DiagonalHorizontal. añadiremos un constructor al que le pasaremos los valores
anteriores cuando instanciemos el objeto. Y también debe de tener un método que
calcule el area, que será la multiplicación de (DiagonalVertical * DiagonalHorizontal)/2.
Este método devolverá un número.
*/
//crear la clase
var Rombo = /** @class */ (function () {
    //constructor que inicializa las propiedades
    function Rombo(diagonalVertical, diagonalHorizontal) {
        this.diagonalVertical = diagonalVertical;
        this.diagonalHorizontal = diagonalHorizontal;
    }
    //método que calcula y retorna el área del rombo
    Rombo.prototype.calcularArea = function () {
        var areaRombo = (this.diagonalVertical * this.diagonalHorizontal) / 2;
        return areaRombo;
    };
    return Rombo;
}());
//instancia de dos rombos (objetos)
var rombo1 = new Rombo(5, 3);
var areaRombo1 = rombo1.calcularArea();
console.log("El \u00E1rea del Rombo 1 es: " + areaRombo1 + " cm^2");
var rombo2 = new Rombo(4, 6);
var areaRombo2 = rombo2.calcularArea();
console.log("El \u00E1rea del Rombo 2 es: " + areaRombo2 + " cm^2");
