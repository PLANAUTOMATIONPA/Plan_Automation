import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./componentes/header/header.component";
import { FooterComponent } from "./componentes/footer/footer.component";
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // ojo: debe ser "styleUrls" (plural)
})
export class AppComponent implements OnInit {
  title = 'plan_automation';

  ngOnInit() {
    AOS.init({
      duration: 1000, // duración en ms
      once: true      // animar solo una vez
    });
  }
}
