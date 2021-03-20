import { Component, OnInit } from '@angular/core';
import { PaymentDetailsService } from 'src/app/shared/payment-details.service';

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styles: [],
})
export class PaymentDetailFormComponent implements OnInit {
  constructor(public services: PaymentDetailsService) {}

  ngOnInit(): void {}
}
