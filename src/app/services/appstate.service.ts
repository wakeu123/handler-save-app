import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppState {
  private handler: Subject<any> = new Subject<any>();

  private _update: boolean;

  public get = (): boolean => {
    return this._update;
  };

  public set = (value: boolean): void => {
    this._update = value;
  };

  public save = (): void => {
    console.info(`Calling save from AppState service...!`);
    this.handler.next("");
  };

  public save_event(): Observable<any> {
    return this.handler.asObservable();
  }
}
