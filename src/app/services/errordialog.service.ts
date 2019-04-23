import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Subject } from 'rxjs';
import { ErrorDialogComponent } from '../error-dialog/errordialog.component';

@Injectable()
export class ErrorDialogService {
    networkSubject = new Subject<any>();
    constructor(public dialog: MatDialog) { }
    openDialog(data): void {
      this.networkSubject.next(data);

        const dialogRef = this.dialog.open(ErrorDialogComponent, {
            width: '300px',
            data: data
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

    getNetworkSubject() {
      return this.networkSubject;
    }
}
