import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeedDialFabComponent } from './speed-dial-fab/speed-dial-fab.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [SpeedDialFabComponent],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  exports: [SpeedDialFabComponent]
})
export class SharedModule { }
