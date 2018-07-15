import { Routes, RouterModule } from '@angular/router';
import { ZooComponent } from './zoo.component';

const routes: Routes = [
  { path: '', component: ZooComponent },
];

export const ZooRoutes = RouterModule.forChild(routes);
