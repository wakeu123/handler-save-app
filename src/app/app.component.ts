import { Component } from '@angular/core';
import { ToolbarComponent } from './header/toolbar/toolbar.component';
import { MenuComponent } from './header/menu/menu.component';
import { TaskComponent } from './features/tasks/task.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [MenuComponent, ToolbarComponent, TaskComponent]
})
export class AppComponent {
  title = 'angular15';
}
