import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddGuest, Guest, RemoveGuest, AddPageGuest } from './zoo.actions';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ZooState } from './zoo.state';

@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html',
  styleUrls: ['./zoo.component.css']
})
export class ZooComponent implements OnInit {

  @Select(ZooState.pageGuest) pageGuest$: Observable<Guest>;

  constructor(private store: Store) { }

  ngOnInit() {
  }

  addPage(pageIndex: number) {
    this.store.dispatch(new AddPageGuest());
  }

  addGuest(pageIndex: number) {
    this.store.dispatch(new AddGuest(pageIndex));
  }

  remove(pageIndex: number, guest: Guest, index: number) {
    this.store.dispatch(new RemoveGuest(pageIndex, guest, index));
  }
}
