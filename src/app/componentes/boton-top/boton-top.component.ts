import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-boton-top',
  imports: [CommonModule],
  templateUrl: './boton-top.component.html',
  styleUrl: './boton-top.component.css'
})
export class BotonTopComponent {
showScrollButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Mostrar el botón después de 300px de scroll
    this.showScrollButton = window.scrollY > 300;
    
    // Correción: window.scrollY (con doble L)
    this.showScrollButton = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
