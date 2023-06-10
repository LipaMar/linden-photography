import { NgModule } from '@angular/core';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzImageModule } from 'ng-zorro-antd/image';

@NgModule({
  exports: [NzDropDownModule, NzImageModule],
})
export class NgZorroModule {}
