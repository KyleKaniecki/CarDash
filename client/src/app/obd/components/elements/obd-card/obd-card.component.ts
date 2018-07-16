import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Store } from '@ngxs/store';
import { map, tap } from '../../../../../../node_modules/rxjs/operators';
import { interval } from '../../../../../../node_modules/rxjs';


@Component({
  selector: 'app-obd-card',
  templateUrl: './obd-card.component.html',
  styleUrls: ['./obd-card.component.scss'],
})
export class ObdCardComponent implements OnInit {

  @Input() name: string;
  @Input() isGauge = true;

  @HostBinding('style.width')
  width = '100%';

  @HostBinding('style.height')
  height = '100%';

  value: string | number;
  normalizedValue: number;
  unit: string;
  private max = 1;
  private min = 0;

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.select(state => state.obd)
    .pipe(
      map(state => state[this.name])
    )
    .subscribe(obd => {
      if (this.isGauge && (typeof obd.value === 'string' || obd.max === 0)) {
        this.isGauge = false;
      }
      if (typeof obd.value === 'number') {
        this.normalizedValue = this.normalizeValue(obd.value);
        this.value = obd.value.toFixed(2);
      } else {
        this.value = obd.value;
      }
      this.max = obd.max;
      this.min = obd.min;
      this.unit = obd.unit;
    });
  }

  private normalizeValue(value: number): number {
    return +((100 - 0) / (this.max - this.min) * (value - this.max) + 100).toFixed(2);
  }

  get obdValue() {
    return this.normalizedValue;
  }

  get currentColor(): string {
    if ((100 - this.normalizedValue) <= 20) {
      return 'warn';
    }
    return 'primary';
  }

}
