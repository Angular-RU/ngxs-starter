import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZooComponent } from './zoo.component';
import { HttpClientModule } from '@angular/common/http';
import { ZooRoutes } from './zoo.routing';
import { NgxsModule } from '@ngxs/store';
import { ZooState } from './zoo.state';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ZooRoutes,
    NgxsModule.forFeature([ZooState])
  ],
  declarations: [ZooComponent],
  entryComponents: [ZooComponent]
})
export class ZooModule { }
