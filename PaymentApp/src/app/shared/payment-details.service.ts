import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PaymentDetailsService {
  constructor(private http: HttpClient) {}

  formData: PaymentDetail = new PaymentDetail();
  list: PaymentDetail[];

  readonly baseUrl = 'http://localhost:56705/api/PaymentDetail';

  postPaymentDetail() {
    var test = this.formData.paymentDetailsId;
    return this.http.post(this.baseUrl, this.formData);
  }
  putPaymentDetail() {
    var test = this.formData.paymentDetailsId;
    return this.http.put(
      `${this.baseUrl}/${this.formData.paymentDetailsId}`,
      this.formData
    );
  }
  deletePaymentDetail(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  refreshList() {
    this.http
      .get(this.baseUrl)
      .toPromise()
      .then((res) => (this.list = res as PaymentDetail[]));
  }
}
