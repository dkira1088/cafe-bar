import { Component } from '@angular/core';
import { Navigation } from '../navigation/navigation';
import { Footer } from '../footer/footer';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-skeleton',
  imports: [RouterOutlet,RouterModule, Navigation, Footer],
  templateUrl: './skeleton.html',
  styleUrl: './skeleton.less',
  standalone: true
})
export class Skeleton {

}
