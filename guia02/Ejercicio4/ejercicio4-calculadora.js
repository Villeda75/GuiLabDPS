/*
Crear una clase Calculadora, con las propiedades numero1, numero1, Le añadiremos
un constructor al que le pasaremos los valores anteriores cuando instanciemos el
objeto. Y también debe de tener un método operaciones básicas (+ , -, * , /), Este
método debe imprimir en pantalla todas las operaciones realizadas.
*/
//crear la clase
var Calculadora = /** @class */ (function () {
    //constructor que inicializa las propiedades
    function Calculadora(numero1, numero2) {
        this.numero1 = numero1;
        this.numero2 = numero2;
    }
    //método que calcula y retorna las operaciones basicas entre dos numeros
    Calculadora.prototype.operacionesBasicas = function () {
        var a = this.numero1;
        var b = this.numero2;
        var calculosRealizados = "\n          (" + a + " + " + b + ") = " + (a + b) + "\n          (" + a + " - " + b + ") = " + (a - b) + "    \n          (" + a + " * " + b + ") = " + a * b + "   \n          (" + a + " / " + b + ") = " + (a / b).toPrecision(2) + "    \n      ";
        return calculosRealizados;
    };
    return Calculadora;
}());
//instancia de dos calculadoras (objetos)
var calculadora1 = new Calculadora(5, 3);
var calculo1 = calculadora1.operacionesBasicas();
console.log(calculo1);
var calculadora2 = new Calculadora(4, 6);
var calculo2 = calculadora2.operacionesBasicas();
console.log(calculo2);
