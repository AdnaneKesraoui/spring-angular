import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Shipment } from '../models/shipment';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get("http://localhost:8080/shipments"); 
  }

  createShipment(shipment: Shipment){
    return this.http.post(`http://localhost:8080/shipments/`, shipment);
  }
}
