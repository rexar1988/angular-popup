import { Component, OnInit } from '@angular/core';
import { DialogService } from '../../core/modules/dialog/services/dialog.service';
import { ModalFormComponent } from './components/modal-form/modal-form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public _dialog: DialogService) { }

  ngOnInit() {
  }

  onOpenForm() {
    this._dialog.open(ModalFormComponent, {
      data: {
        message: 'It\'s modal form component!'
      }
    });
  }
}
