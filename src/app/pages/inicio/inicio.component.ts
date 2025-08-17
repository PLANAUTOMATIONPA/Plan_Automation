import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
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