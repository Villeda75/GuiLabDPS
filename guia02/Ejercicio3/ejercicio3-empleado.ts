/* Crear una clase Empleado, con las propiedades nombre, salario, añadiremos un
constructor al que le pasaremos los valores anteriores cuando instanciemos el
objeto. Y también debe de tener un método que calcule deducciones salariales,
Este método devolverá el salario después de los descuentos. */

//crear la clase
class Empleado {
    //propiedades
    Nombre: string;
    Salario: number;
  
    //constructor que inicializa las propiedades
    constructor(Nombre:string, Salario:number) {
      this.Nombre = Nombre;
      this.Salario = Salario;
    }
  
    //método que calcula y retorna el salario del Empleado
    calcularSalario():number {
      let Renta: number = this.Salario * 0.10;
      let AFP: number = this.Salario * 0.0725;
      let ISSS: number = this.Salario * 0.03;
      let SalarioNeto: number = this.Salario -Renta -AFP - ISSS;
      return SalarioNeto;
    }
  }
  
  //instancia de dos Empleados (objetos)
  var Empleado1:Empleado = new Empleado("Chantell", 1000);
  let Salario1 = Empleado1.calcularSalario();
  console.log(`El salario de ${Empleado1.Nombre} es : $${Salario1} `);
  
  