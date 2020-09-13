import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {
  registro=[];
  empleado:any;
  nombres:string;
  apellidos:string;
  SalarioBruto:number;
  DescuentoISSS:number;
  DescuentoRenta:number;
  DescuentoAFP:number;
  SalarioNeto:number;
  
  constructor() { }
  
  ngOnInit(): void {
    
    this.nombres='';
    this.apellidos='';
    this.SalarioBruto = 0;
    this.DescuentoISSS = 0;
    this.DescuentoRenta = 0;
    this.DescuentoAFP = 0;
    this.SalarioNeto = 0;
    
  
  }

  ingresarEmpleado(){

      
      //aplicando descuentos al salario ingresado
  
        this.DescuentoISSS = this.SalarioBruto*0.073;
        this.DescuentoRenta = this.SalarioBruto*0.11;
        this.DescuentoAFP = this.SalarioBruto*0.051;
        this.SalarioNeto = this.SalarioBruto - this.DescuentoISSS - this.DescuentoRenta - this.DescuentoAFP;
      
      //guardamos la visita del cliente
      this.empleado={"nombres":this.nombres,"apellidos":this.apellidos,"SalarioBruto":this.SalarioBruto,"DescuentoISSS":this.DescuentoISSS,"DescuentoRenta":this.DescuentoRenta, "DescuentoAFP":this.DescuentoAFP,"SalarioNeto":this.SalarioNeto};
      this.registro.push(this.empleado);
     
    }

  }