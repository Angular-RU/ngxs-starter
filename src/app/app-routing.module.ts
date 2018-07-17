import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'zoo', loadChildren: './zoo/zoo.module#ZooModule' },
  { path: 'tickets', loadChildren: './tickets/tickets.module#TicketsModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
