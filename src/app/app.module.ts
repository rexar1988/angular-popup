import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// !!!
import { DialogModule } from './core/modules/dialog/dialog.module';

import { AppComponent } from './app.component';
import { ExampleComponent } from './core/components/example/example.component';
import { TestComponent } from './core/components/test/test.component';
import { ModalFormComponent } from './modules/home/components/modal-form/modal-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutModule } from './modules/about/about.module';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    TestComponent,
    ModalFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DialogModule,
    AboutModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ExampleComponent,
    TestComponent,
    ModalFormComponent
  ]
})
export class AppModule {}
