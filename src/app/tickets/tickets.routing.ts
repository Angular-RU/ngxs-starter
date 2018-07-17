import { Routes, RouterModule } from '@angular/router';
import { TicketsComponent } from './tickets.component';

const routes: Routes = [
  { path: '', component: TicketsComponent },
];

export const TicketsRoutes = RouterModule.forChild(routes);
