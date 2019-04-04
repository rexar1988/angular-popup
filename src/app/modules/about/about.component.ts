import { Component, OnInit } from '@angular/core';
import { DialogService } from '../../core/modules/dialog/services/dialog.service';
import { ConfirmComponent } from './components/modals/confirm/confirm.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private _dialog: DialogService) { }

  ngOnInit() {
  }

  onOpenDialog() {
    this._dialog.open(ConfirmComponent, {});
  }
}
