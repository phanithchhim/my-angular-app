// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {

//   constructor() { }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://localhost:7028/api'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getDeliveries(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Deliveries`);
  }

  getDelivery(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/Deliveries/${id}`);
  }

  addDelivery(delivery: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Deliveries`, delivery);
  }
}
