import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeedDialFabComponent } from './speed-dial-fab/speed-dial-fab.component';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';



@NgModule({
  declarations: [SpeedDialFabComponent, ConfirmationDialogComponent],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  exports: [SpeedDialFabComponent]
})
export class SharedModule { }
