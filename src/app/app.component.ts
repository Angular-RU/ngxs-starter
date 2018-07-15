import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { SetDelay } from './app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private store: Store) {

  }

  get delay(): number {
    return this.store.selectSnapshot(c => c.app.delay);
  }

  set delay(value: number) {
    this.store.dispatch(new SetDelay(value));
  }

}
