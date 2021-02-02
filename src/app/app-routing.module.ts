import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'components/tooltip', component: TooltipComponent },
  { path: 'components/dropdown', component: DropdownComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
