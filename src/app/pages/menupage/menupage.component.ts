import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  constructor(private _param: ActivatedRoute, private _service: OrderDetailsService) { }

  getMenuId: any;
  menuData: any;

  ngOnInit(): void {
    this.getMenuId = this._param.snapshot.paramMap.get('id');
    console.log('getMenuId --> ', this.getMenuId);
    if (this.getMenuId) {
      this.menuData = this._service.foodDetails.filter((value) => {
        return value.id == this.getMenuId;
      });
      console.log('menuData --> ', this.menuData);

    }
  }

}
