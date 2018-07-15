import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObdService {

  constructor(private http: HttpClient) {}

  getLatestData() {
    return this.http
      .get('http://localhost:5000/obd/latest/');
  }
}
