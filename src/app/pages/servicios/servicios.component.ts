import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  imports: [],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.setupAccordion();
  }

  private setupAccordion(): void {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
      header.addEventListener('click', function(this: HTMLElement) {
        this.classList.toggle('active');
        const content = this.nextElementSibling as HTMLElement;
        
        if (content.style.maxHeight) {
          content.style.maxHeight = '';
        } else {
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    });
  }
}