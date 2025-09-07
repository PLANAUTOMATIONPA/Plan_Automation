import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./componentes/header/header.component";
import { FooterComponent } from "./componentes/footer/footer.component";
import * as AOS from 'aos';
import { BotonTopComponent } from "./componentes/boton-top/boton-top.component";
import { BotonCallComponent } from "./componentes/boton-call/boton-call.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, BotonTopComponent, BotonCallComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'plan_automation';

  constructor(private router: Router) {
    // Suscribirse a los cambios de ruta para resetear scroll
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // va al inicio en cada cambio de página
      }
    });
  }

  ngOnInit() {
    AOS.init({
      duration: 400,
      easing: 'ease-out-cubic',
      once: true,
      offset: 120,
      delay: 100
    });
  }
}
