import { Component } from '@angular/core';
import { ResolveEnd } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect Pipe
  nombre: string = 'Antonio';
  genero: string = 'Masculino';
  invitacionMapa = {
    'Masculino': 'invitarlo',
    'Femenino': 'Invitarla'
  }
  // i18nPlural Pipe

  clientes: string[] = ['Maria', 'Pedro', 'Hernando', 'Eduardo', 'Fernando']
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarNombre() {
    this.nombre = 'Anahi';
    this.genero = 'Femenino';
  }
  borrarCliente(){
    this.clientes.pop();
  }

  // KeyValue Pipe

  persona = {
    nombre:'Antonio',
    edad: 29,
    direccion: 'Mexico City, Mexico'
  }

  // Json Pipe

  heroes = [
    {
      nombre: 'Superman',
      vuela:true
    },
    {
      nombre: 'Robin',
      vuela:false
    },
    {
      nombre: 'Aquaman',
      vuela:false
    }
  ]

  // Async Pipe
  miObservable = interval(1000);
  valorPromesa = new Promise( (resolve, reject) => {
      setTimeout(() => {
        resolve('Tenemos data de promesa');
      }, 3500);
  });
}
