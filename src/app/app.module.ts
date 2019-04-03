import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DialogModule } from './core/modules/dialog/dialog.module';
import { ExampleComponent } from './core/components/example/example.component';
import { TestComponent } from './core/components/test/test.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    DialogModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ExampleComponent,
    TestComponent
  ]
})
export class AppModule {}
