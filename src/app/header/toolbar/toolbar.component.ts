import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppState } from 'src/app/services/appstate.service';

@Component({
  selector: 'toolbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  private appState = inject(AppState);

  public save = (): void => {
    this.appState.save();
  };
}
