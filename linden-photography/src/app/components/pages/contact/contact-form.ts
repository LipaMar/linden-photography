import { FormControl } from '@angular/forms';

export interface ContactForm {
  name: FormControl;
  email: FormControl;
  phoneNr: FormControl;
  topic: FormControl;
}

export interface ContactRequest {
  name: string;
  email: string;
  phoneNr: string;
  topic: string;
  _captcha: string;
  _template: string;
}
