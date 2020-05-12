import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

import { ShippingService } from '../purchase-shipping.service';

@Component({
  selector: 'app-purchase-shipping',
  templateUrl: './purchase-shipping.component.html',
  styleUrls: ['./purchase-shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingCosts;

  constructor(
    private shippingService: ShippingService,
    // private router: Router,
  ) { }

  ngOnInit() {
    this.shippingCosts = this.shippingService.getShippingCostReference();
  }

  selectShippingCost(shipping) {
    this.shippingService.setShippingCost(shipping.price);
    // this.router.navigate(['/address']);
  }

}