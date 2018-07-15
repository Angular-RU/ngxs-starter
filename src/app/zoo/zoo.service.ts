import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZooService {

  constructor(private store: Store, private http: HttpClient) { }
  feed(arg0: any): Observable<any> {
    const delay = this.store.selectSnapshot(c => c.app.delay);
    return this.http.get(`https://reqres.in/api/unknown?delay=${delay}`);
  }
}
