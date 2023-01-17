import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private _servie: OrderDetailsService) { }

  foodData: any;

  ngOnInit(): void {
    this.foodData = this._servie.foodDetails;
  }

}
