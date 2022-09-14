import { EgresoServicio } from './../egreso/egreso.service';
import { IngresoServicio } from './../ingreso/ingreso.service';
import { Component, OnInit } from '@angular/core';
import { Ingreso } from '../ingreso/ingreso.model';
import { Egreso } from '../egreso/egreso.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {


  descripcionInput:string;
  valorInput:number
  tipo:string = 'ingresoOperacion';

  constructor(private ingresoServicio:IngresoServicio, private egresoServicio:EgresoServicio) { }

  ngOnInit(): void {
  }

  tipoOperacion(event:any){
    this.tipo = event.target.value;
  }

  agregar(){
    if(this.tipo === 'ingresoOperacion'){
      this.ingresoServicio.agregar(new Ingreso(this.descripcionInput,this.valorInput));
    } else {
      this.egresoServicio.agregar(new Egreso(this.descripcionInput,this.valorInput));
    }
  }

}
