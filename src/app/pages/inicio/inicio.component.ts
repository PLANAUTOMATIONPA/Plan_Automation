import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiciosComponenteComponent } from "../../componentes/servicios-componente/servicios-componente.component";
import { ProyectosComponenteComponent } from "../../componentes/proyectos-componente/proyectos-componente.component";
import { IndustriasComponenteComponent } from "../../componentes/industrias-componente/industrias-componente.component";
import { FomularioContactoComponent } from "../../componentes/fomulario-contacto/fomulario-contacto.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterLink, ServiciosComponenteComponent, ProyectosComponenteComponent, IndustriasComponenteComponent, FomularioContactoComponent],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  originalLogos = [
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/1200px-Ford_logo_flat.svg.png',
      alt: 'Ford'
    },
    {
      src: 'https://www.carlogos.org/car-logos/chrysler-logo-1998-download.png',
      alt: 'Chrysler'
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/2048px-Volkswagen_logo_2019.svg.png',
      alt: 'Volkswagen'
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Logo_de_DINA.svg/2560px-Logo_de_DINA.svg.png',
      alt: 'Dina'
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/General_Motors_%282021%29.svg',
      alt: 'General Motors'
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Owens_Corning_logo.svg/1200px-Owens_Corning_logo.svg.png',
      alt: 'Owens Corning'
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/Saint-Gobain_logo.svg/1200px-Saint-Gobain_logo.svg.png',
      alt: 'Saint-Gobain'
    },
    {
      src: 'https://cdn.freebiesupply.com/logos/large/2x/vitro-logo-png-transparent.png',
      alt: 'Vitro'
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbKP9NIlLtBJgrqr-N41Mt2xXka68vrvXJcA&s',
      alt: 'Hercules'
    },
    {
      src: 'https://logodownload.org/wp-content/uploads/2019/09/chevron-logo-0.png',
      alt: 'Chevron'
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Logo_Bayer.svg/2048px-Logo_Bayer.svg.png',
      alt: 'Bayer'
    },
    {
      src: 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/256x256/08077888ad7cebe1fbb9512d5de90234',
      alt: 'Enmex'
    },
    {
      src: 'https://www.adh.com.co/cdn/shop/files/2024_Logo_ADH_ADH_copia_2.png?v=1713191574',
      alt: 'ADH adesivos'
    },
    {
      src: 'https://brandlogos.net/wp-content/uploads/2017/01/anheuser-busch_inbev_2008-2016-logo_brandlogos.net_qumyu-512x225.png',
      alt: 'Abinbev'
    },
    {
      src: 'https://images.seeklogo.com/logo-png/25/1/nutresa-logo-png_seeklogo-257364.png',
      alt: 'Nutresa'
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Liconsa.jpg',
      alt: 'Liconsa'
    },
    {
      src: 'https://1000marcas.net/wp-content/uploads/2020/01/Danone-Logo.png',
      alt: 'Danone'
    },
    {
      src: 'https://images.seeklogo.com/logo-png/6/2/herdez-logo-png_seeklogo-66411.png',
      alt: 'Herdez'
    },
    {
      src: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0020/5217/brand.gif?itok=W1cC79Ce',
      alt: 'arancia industrial'
    },
    {
      src: 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/256x256/03d603d80857175c010126c0b4ee815f',
      alt: 'Complementos alimenticios s.a. de c.v'
    },
    {
      src: 'https://cdn.worldvectorlogo.com/logos/alpura.svg',
      alt: 'alpura'
    },
    {
      src: 'https://seeklogo.com/images/G/grupo-modelo-logo-9EA22ADD7F-seeklogo.com.png',
      alt: 'Grupo Modelo'
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Merck-Logo.svg/2560px-Merck-Logo.svg.png',
      alt: 'Merck'
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Givaudan_Logo.svg/2560px-Givaudan_Logo.svg.png',
      alt: 'Givaudan'
    },
    {
      src: 'https://www.novartis.com/sites/novartis_com/files/2021-10/novartis-logo-transparent.png',
      alt: 'novartis'
    },
    {
      src: 'https://1000marcas.net/wp-content/uploads/2021/05/Colgate-Palmolive-Logo.png',
      alt: 'colgate-palmolive'
    },
    {
      src: 'https://1000marcas.net/wp-content/uploads/2021/05/GSK-logo.png',
      alt: 'glaxo smith kline'
    },
    {
      src: 'https://logolook.net/wp-content/uploads/2024/02/Sanofi-Aventis-Logo-2004.png',
      alt: 'sanofi aventis'
    },
    {
      src: 'armacreto',
      alt: 'armacreto'
    },
    {
      src: 'https://static.wixstatic.com/media/622fa4_9f159ff841fd4bdba32c752bf5741954~mv2.jpg/v1/fill/w_270,h_114,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ml%20logo.jpg',
      alt: 'm&L Consulting Group'
    },
    {
      src: 'https://i0.wp.com/www.especialidadestermicas.com/wp-content/uploads/2024/10/cropped-Logo-2024-1.png?resize=512%2C512&ssl=1',
      alt: 'etsa'
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/IMSS_Logos%C3%ADmbolo.png',
      alt: 'imss'
    },
    {
      src: 'https://www.igsa.com.mx/wp-content/uploads/cropped-IGSA_Logo.webp',
      alt: 'Igsa'
    },
    {
      src: 'https://uimg.cosmos.com.mx/U/min/bn1gcolo.png',
      alt: 'widisa'
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQZ4pEkPFIfwmp3INTs2wkE7VYHHym4P3bcA&s',
      alt: 'Grupo previ'
    },
    {
      src: 'https://cdn.worldvectorlogo.com/logos/praxair-logo.svg',
      alt: 'Praxair'
    }
  ];

// Duplicamos los logos para el efecto infinito
  logos = [...this.originalLogos, ...this.originalLogos];
  
  currentIndex = 0;
  visibleItems = 5; // Número de logos visibles a la vez
  itemWidth = 150 + 30; // Ancho de la burbuja + gap

  get transformValue(): string {
    return `translateX(-${this.currentIndex * this.itemWidth}px)`;
  }

  moveCarousel(direction: number) {
    this.currentIndex += direction;

    // Cuando llegamos al final de los logos duplicados, reiniciamos sin animación
    if (this.currentIndex >= this.originalLogos.length) {
      setTimeout(() => {
        this.currentIndex = 0;
        // Forzar la actualización de la vista
        // (Angular normalmente detecta este cambio, pero por si acaso)
      }, 0);
    }
    // Cuando retrocedemos más allá del inicio, saltamos al final
    else if (this.currentIndex < 0) {
      setTimeout(() => {
        this.currentIndex = this.originalLogos.length - 1;
      }, 0);
    }
  }
}