import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BackLinkComponent } from '../../components/main/back-link/back-link.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, BackLinkComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  routes = [
    { key: 'awards', slug: 'awards', },
    { key: 'companies', slug: 'companies', },
    { key: 'educations', slug: 'educations', },
    { key: 'habits', slug: 'habits', },
    { key: 'information', slug: 'information', },
    { key: 'objectives', slug: 'objectives', },
    { key: 'projects', slug: 'projects', },
    { key: 'setting', slug: 'setting', },
    { key: 'skills', slug: 'skills', },
  ]
}
