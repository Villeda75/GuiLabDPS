import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'

@Component({
  selector: 'app-combustible',
  templateUrl: './combustible.component.html',
  styleUrls: ['./combustible.component.css']
})
export class CombustibleComponent implements OnInit {

  /*
  El usuario pueda seleccionar  (regular=$4.05, especial=$4.25, y diesel=$3.96)
  Valor mínimo de 0.05 - 150 galones.  step de 0.05. 
  tipo de combustible que se servirá y la cantidad de galones (en variación de 0.05 ctvs) 
  debe actualizarse otro campo de texto de solo lectura
  donde el usuario podrá ver el monto a pagar por el tipo y la cantidad de gasolina que se va a
  servir
  */

  listaCombustibles:string[]=["regular","especial","diesel"];
  opcion:string;
  costo:number;
  cantGalones:number;
  total:number;
  constructor() { }

  ngOnInit(): void {
    this.opcion='regular';
    this.costo=4.05;
    this.cantGalones=0.05;
    this.total= this.costo*this.cantGalones;
  }

  calcularTotal(){
    if (this.opcion == 'regular') {
      this.costo = 4.05;
      this.total= this.costo * this.cantGalones;

    } else if(this.opcion == 'especial') {
      this.costo = 4.25;
      this.total= this.costo * this.cantGalones;
      
    } else if(this.opcion == 'diesel') {
      this.costo = 3.96;
      this.total= this.costo * this.cantGalones;
    }
  }
}
