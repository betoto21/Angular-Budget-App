import { EgresoServicio } from './egreso.service';
import { Component, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {

  egresos:Egreso[]=[];

  constructor(private egresoService:EgresoServicio) {
    this.egresos = this.egresoService.egresos;
  }

  ngOnInit(): void {
  }

  eliminarRegistro(egreso:Egreso){
    this.egresoService.eliminar(egreso);
  }

}
