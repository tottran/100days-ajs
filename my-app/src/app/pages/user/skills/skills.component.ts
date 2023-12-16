import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  router = inject(Router);
  route = inject(ActivatedRoute);
  
  goToProject() {
    this.router.navigate(['projects'], { relativeTo: this.route })
  }
}
