import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResultUser } from './zoo.actions';

@Injectable({
  providedIn: 'root'
})
export class ZooService {

  constructor(private store: Store, private http: HttpClient) { }

  addGuest(): Observable<ResultUser> {
    const delay = this.store.selectSnapshot(c => c.app.delay);
    return this.http.get<ResultUser>(`https://reqres.in/api/unknown?delay=${delay}&page=1&per_page=12`);
  }
}
