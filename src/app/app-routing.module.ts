import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroIconModule } from 'ng-heroicon';
import { CenterComponent } from './components/center/center.component';

const routes: Routes = [{
  path: '',
  component: CenterComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
