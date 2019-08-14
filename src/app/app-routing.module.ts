import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreviewComponent } from './Components/preview/preview.component';
import { StartingComponent } from './starting/starting.component';


// const routes: Routes = [];
const routes: Routes = [
  { path: 'Home', component:StartingComponent  },
  { path: 'preview', component: PreviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
