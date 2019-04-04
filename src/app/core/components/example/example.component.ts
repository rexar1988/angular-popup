import { Component, OnInit } from '@angular/core';
import { DialogConfig } from '../../modules/dialog/classes/dialog-config';
import { DialogRef } from '../../modules/dialog/classes/dialog-ref';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  form: FormGroup;

  constructor(public config: DialogConfig, public dialog: DialogRef, private _fb: FormBuilder) {}

  ngOnInit() {
    this.form = this._fb.group({
      name: ['denis', Validators.required]
    });
  }

  onFormSubmit() {
    console.log(this.form);
  }

  onClose() {
    this.dialog.close('some value');
  }
}
