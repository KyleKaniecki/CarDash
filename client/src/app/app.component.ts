import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { UpdateObdState } from './obd/actions/obd.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new UpdateObdState());

    this.store.select(state => state.obd)
      .subscribe(state => console.log(state));
  }
}
