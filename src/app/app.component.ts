import { DialogService } from './core/modules/dialog/services/dialog.service';

import { Component } from '@angular/core';
import { ExampleComponent } from './core/components/example/example.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public _dialog: DialogService) {}

  open() {
    const dialog = this._dialog.open(ExampleComponent, {
      data: {
        message: 'I am a dynamic component inside of a dialog!'
      }
    });

    dialog.afterClosed.subscribe(result => {
      console.log('Dialog closed', result);
    });
  }
}
