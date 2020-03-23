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
export class SpeedDialFabComponent implements OnInit, OnChanges {
  @Input() fabButtons: FabButton[];
  @Output() actionClick = new EventEmitter<FabButton>();

  buttons = [];
  fabTogglerState = 'inactive';

  ngOnInit() {
    console.log('on init, fabuttons is', this.fabButtons);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('component changed');
    console.log(SimpleChange);
  }

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
    console.log('emmit from speeddialfab', fabButton);
    this.actionClick.emit(fabButton);
  }

}
