import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmComponent } from './pages/about/components/modals/confirm/confirm.component';

@NgModule({
  declarations: [
    ConfirmComponent
  ],
  imports: [
    CommonModule
  ],
  entryComponents: [
    ConfirmComponent
  ]
})
export class DynamicModule {}
