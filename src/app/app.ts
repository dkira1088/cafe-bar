import { Component } from '@angular/core';
import { Skeleton } from './layout/skeleton/skeleton';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Skeleton, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.less'
})
export class App {
  protected title = 'cafe-aroma';
}
