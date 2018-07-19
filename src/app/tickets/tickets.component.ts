import { Component, OnInit } from '@angular/core';
import { TicketsState, TestWrite1, TestWrite2 } from './tickets.state.ts';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { TestAction } from '../zoo/zoo.actions';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  @Select('tickets') ticketsState$: Observable<any>;
  @Select('tickets.testCount') testCount$: Observable<number>;

  constructor(private store: Store) { }

  ngOnInit() {
  }

  test() {
    this.store.dispatch(new TestAction());
  }

  testParalels() {
    this.store.dispatch([new TestWrite1(), new TestWrite2()]);
  }
}
