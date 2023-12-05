import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Shipment } from 'src/app/models/shipment';
import { ShipmentService } from 'src/app/services/shipment.service';

@Component({
  selector: 'app-list-shipment',
  templateUrl: './list-shipment.component.html',
  styleUrls: ['./list-shipment.component.css']
})
export class ListShipmentComponent implements OnInit {


  shipments: Shipment[] = [];

  constructor(private shipmentService: ShipmentService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllShipments();
  }

  getAllShipments(){
    this.shipmentService.getAll().subscribe((res: any) => this.shipments = res)
  }
    
  onDeleteShipment(shipmentId: String | undefined) {
    this.http.delete(`http://localhost:8080/shipments/${shipmentId}`).subscribe((res: any) => {
      this.getAllShipments();
    }


    )

}}
