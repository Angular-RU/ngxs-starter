import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { FeedAnimals } from './zoo.actions';

@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html',
  styleUrls: ['./zoo.component.css']
})
export class ZooComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit() {
  }

  feed() {
    this.store.dispatch(new FeedAnimals('zebra'));
  }
}
