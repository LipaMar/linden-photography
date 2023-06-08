import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ContactRequest } from '../../components/pages/contact/contact-form';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailSendService {
  constructor(private httpClient: HttpClient) {}

  sendViaHttpClient(contactRequest: ContactRequest): Observable<any> {
    const httpOptions: any = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      responseType: 'text',
    };
    const url = 'https://formsubmit.co/41eefae3b21ffb29c4d31d39d3e3d7b8';
    contactRequest._captcha = 'false';
    contactRequest._template = 'table';
    return this.httpClient.post<any>(url, contactRequest, httpOptions);
  }
}
