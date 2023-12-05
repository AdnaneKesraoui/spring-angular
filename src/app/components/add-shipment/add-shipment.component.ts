import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShipmentService } from 'src/app/services/shipment.service';

@Component({
  selector: 'app-add-shipment',
  templateUrl: './add-shipment.component.html',
  styleUrls: ['./add-shipment.component.css']
})
export class AddShipmentComponent implements OnInit {





  constructor(private shipmentService : ShipmentService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  addShipment(shipment: {origin: string, weight: string, dimensions: string, price: string, type: string}) {
    
    
    this.shipmentService.createShipment(shipment).subscribe((res: any) => {
      this.addShipment(res);
      
    this.router.navigateByUrl("/shipment");

    })
  


}
}
