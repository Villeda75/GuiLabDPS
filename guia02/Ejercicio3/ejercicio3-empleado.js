/* Crear una clase Empleado, con las propiedades nombre, salario, añadiremos un
constructor al que le pasaremos los valores anteriores cuando instanciemos el
objeto. Y también debe de tener un método que calcule deducciones salariales,
Este método devolverá el salario después de los descuentos. */
//crear la clase
var Empleado = /** @class */ (function () {
    //constructor que inicializa las propiedades
    function Empleado(Nombre, Salario) {
        this.Nombre = Nombre;
        this.Salario = Salario;
    }
    //método que calcula y retorna el salario del Empleado
    Empleado.prototype.calcularSalario = function () {
        var Renta = this.Salario * 0.10;
        var AFP = this.Salario * 0.0725;
        var ISSS = this.Salario * 0.03;
        var SalarioNeto = this.Salario - Renta - AFP - ISSS;
        return SalarioNeto;
    };
    return Empleado;
}());
//instancia de dos Empleados (objetos)
var Empleado1 = new Empleado("Chantell", 1000);
var Salario1 = Empleado1.calcularSalario();
console.log("El salario de " + Empleado1.Nombre + " es : $" + Salario1 + " ");
