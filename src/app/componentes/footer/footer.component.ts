import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common'; // <-- Add this import

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, NgIf], // <-- Add NgIf here
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  activeModal: string | null = null;

  openModal(modalType: string): void {
    this.activeModal = modalType;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.activeModal = null;
    document.body.style.overflow = 'auto';
  }
}