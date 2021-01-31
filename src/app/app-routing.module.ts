import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';

const routes: Routes = [
  { path: 'components/tooltip', component: TooltipComponent },
  { path: 'components/dropdown', component: DropdownComponent },
  { path: '**', redirectTo: 'components/dropdown', pathMatch: 'full' },
  { path: '', redirectTo: 'components/dropdown', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
