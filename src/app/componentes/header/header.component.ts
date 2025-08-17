import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuOpen = false;
  isMobileView = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkViewport();
  }

  ngOnInit() {
    this.checkViewport();
  }

  checkViewport() {
    this.isMobileView = window.innerWidth <= 992; // Igual que tu media query
    if (!this.isMobileView) {
      this.isMenuOpen = false;
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}