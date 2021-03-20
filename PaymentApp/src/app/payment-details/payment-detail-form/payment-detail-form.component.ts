import { Component, OnInit } from '@angular/core';
import { PaymentDetailsService } from 'src/app/shared/payment-details.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styles: [],
})
export class PaymentDetailFormComponent implements OnInit {
  constructor(public service: PaymentDetailsService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.service.postPaymentDetail().subscribe(
      (res) => {},
      (err) => {
        console.log(err);
      }
    );
  }
}
