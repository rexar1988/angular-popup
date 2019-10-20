import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// !!!
import { DialogModule } from './modules/dialog/dialog.module';

import { AppComponent } from './app.component';
import { ExampleComponent } from './components/example/example.component';
import { TestComponent } from './components/test/test.component';
import { ModalFormComponent } from './pages/home/components/modal-form/modal-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutModule } from './pages/about/about.module';
import { DynamicModule } from './dynamic.module';

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
    AboutModule,
    DynamicModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ExampleComponent,
    TestComponent,
    ModalFormComponent
  ]
})
export class AppModule {}
