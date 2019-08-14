import { Component } from '@angular/core';
import { PreviewComponent } from './Components/preview/preview.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';
  // constructor(private preview:PreviewComponent){}
  Display(){
    // this.preview.Display();
  }
}
