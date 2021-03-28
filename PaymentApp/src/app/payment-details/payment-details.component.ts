import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from '../shared/payment-detail.model';
import { PaymentDetailsService } from '../shared/payment-details.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [],
})
export class PaymentDetailsComponent implements OnInit {
  constructor(
    public service: PaymentDetailsService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    var test = this.service.refreshList();
  }

  populateForm(selectedRecord: PaymentDetail) {
    this.service.formData = Object.assign({}, selectedRecord);
  }
  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deletePaymentDetail(id).subscribe(
        (res) => {
          this.service.refreshList();
          this.toastr.error('Deleted successfully', 'Payment Detail Register');
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
