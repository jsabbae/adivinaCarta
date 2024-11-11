import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  nombreCarta = '';
  cartaSecreta = '';
  attempts = 0; // Contador -> número de intentos
  mostrarResultado = false;
  validacion = false;

  constructor() {
    this.inicializarJuego();
  }

  inicializarJuego() {
    const todasCartas = ['picas', 'corazones', 'diamantes', 'tréboles'];
    this.cartaSecreta = todasCartas[Math.floor(Math.random() * todasCartas.length)];
    console.log('La carta secreta es:', this.cartaSecreta); // Para fines de prueba
  }

  elegirCarta() {
    this.mostrarResultado = true;
    this.attempts++;
    console.log('Has introducido la carta:', this.nombreCarta);

    if (this.nombreCarta === this.cartaSecreta) {
      this.validacion = true;
      console.log("¡¡¡Acertaste!!! la carta era: " + this.cartaSecreta);
    } else {
      this.validacion = false;
      console.log("No es la carta secreta");
    }
  }

  reiniciar() {
    this.mostrarResultado = true;
    this.validacion = false;
    this.attempts = 0;
    this.nombreCarta = '';
    this.inicializarJuego();
    console.log('Reiniciando el juego');
  }

}
