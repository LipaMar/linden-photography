import {FormControl} from "@angular/forms";

export interface ContactForm {
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  phoneNr: FormControl;
  topic: FormControl;
}
