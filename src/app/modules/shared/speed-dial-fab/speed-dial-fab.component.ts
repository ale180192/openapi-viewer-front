import { Component, OnInit, Input, SimpleChange, SimpleChanges, OnChanges, Output } from '@angular/core';
import { speedDialFabAnimations } from './speed-dial-fab.animation';
import { FabButton } from '../models/fab-button.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-speed-dial-fab',
  templateUrl: './speed-dial-fab.component.html',
  styleUrls: ['./speed-dial-fab.component.scss'],
  animations: speedDialFabAnimations
})
export class SpeedDialFabComponent {
  @Input() fabButtons: FabButton[];
  @Output() actionClick = new EventEmitter<FabButton>();

  buttons = [];
  fabTogglerState = 'inactive';

  showItems() {
    this.fabTogglerState = 'active';
    this.buttons = this.fabButtons;
  }

  hideItems() {
    this.fabTogglerState = 'inactive';
    this.buttons = [];
  }

  onToggleFab() {
    this.buttons.length ? this.hideItems() : this.showItems();
  }

  actionSelected(fabButton: FabButton) {
    this.actionClick.emit(fabButton);
  }

}
