import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { UpdateObdState } from '../../../actions/obd.actions';
import { map, filter } from 'rxjs/operators';
import { SideNavService } from '../../../../base/services/side-nav.service';

@Component({
  selector: 'app-main-obd',
  templateUrl: './main-obd.component.html',
  styleUrls: ['./main-obd.component.scss']
})
export class MainObdComponent implements OnInit {

  obdKeys = [];
  constructor(private store: Store, private sidenavService: SideNavService) { }

  ngOnInit() {
    this.store.dispatch(new UpdateObdState());

    this.sidenavService.sidenavOpen$
    .pipe(
      filter(value => !value)
    )
    .subscribe(open => {
      this.store.select(state => Object.keys(state.obd))
      .pipe(
        map(keys => keys.filter(key => key !== 'id').slice(0, 4))
      )
      .subscribe(keys => this.obdKeys = keys);
    });
  }

}
