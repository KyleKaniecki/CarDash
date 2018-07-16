import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {
  private status: BehaviorSubject<string> = new BehaviorSubject('closed');
  constructor() { }

  get sidenavOpen$() {
    return this.status.asObservable().pipe(map(value => value === 'open'));
  }

  get sidenavStatus() {
    return this.status.value;
  }

  set sidenavOpen(open: boolean) {
    this.status.next(open ? 'open' : 'closed');
  }
}
