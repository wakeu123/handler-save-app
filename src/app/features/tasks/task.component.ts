import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/services/appstate.service';
import { Form } from 'src/app/shared/form';
@Component({
  standalone: true,
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: [],
})
export class TaskComponent extends Form implements OnInit, OnDestroy {
  protected override getService() {
    throw new Error('Method not implemented.');
  }
  private subscription: Subscription;
  private appState = inject(AppState);

  ngOnInit(): void {
    this.subscription = this.appState.save_event().subscribe(() => {
      console.info(`Save task calling ...!`);
      this.save();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }
}
