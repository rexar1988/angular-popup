import {
  Component,
  Type,
  ComponentFactoryResolver,
  ViewChild,
  OnDestroy,
  ComponentRef,
  AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { InsertionDirective } from './directives/insertion.directive';
import { DialogRef } from './classes/dialog-ref';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements AfterViewInit, OnDestroy {
  componentRef: ComponentRef<any>;
  private readonly _onClose = new Subject<any>();
  onClose = this._onClose.asObservable();
  childComponentType: Type<any>;
  @ViewChild(InsertionDirective) insertionPoint: InsertionDirective;

  constructor(private _componentFactoryResolver: ComponentFactoryResolver, private _cd: ChangeDetectorRef, private _dialogRef: DialogRef) {}

  ngAfterViewInit() {
    this.loadChildComponent(this.childComponentType);
    this._cd.detectChanges();
  }

  loadChildComponent(componentType: Type<any>) {
    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(componentType);
    const viewContainerRef = this.insertionPoint._viewContainerRef;
    viewContainerRef.clear();
    this.componentRef = viewContainerRef.createComponent(componentFactory);
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  onOverlayClicked() {
    this._dialogRef.close();
  }

  onDialogClicked(event: MouseEvent) {
    event.stopPropagation();
  }
}
