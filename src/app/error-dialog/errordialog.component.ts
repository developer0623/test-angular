import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './errordialog.component.html'
})
export class ErrorDialogComponent {
  title = 'Success';
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    if (data.status === 404) {
      this.title = 'Error';
    }
  }
}
