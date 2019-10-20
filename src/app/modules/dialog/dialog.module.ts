import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogComponent } from './dialog.component';

import { InsertionDirective } from './directives/insertion.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InsertionDirective,
    DialogComponent
  ],
  entryComponents: [
    DialogComponent
  ]
})
export class DialogModule {}
