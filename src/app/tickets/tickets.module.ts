import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsComponent } from './tickets.component';
import { TicketsRoutes } from './tickets.routing';
import { NgxsModule } from '@ngxs/store';
import { TicketsState } from './tickets.state.ts';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TicketsRoutes,
    NgxsModule.forFeature([TicketsState])
  ],
  declarations: [TicketsComponent],
  entryComponents: [TicketsComponent]
})
export class TicketsModule { }
