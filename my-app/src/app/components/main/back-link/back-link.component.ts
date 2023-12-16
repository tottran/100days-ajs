import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-back-link',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './back-link.component.html',
  styleUrl: './back-link.component.scss'
})
export class BackLinkComponent {

}
