import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatDialogModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ErrorDialogComponent } from './error-dialog/errordialog.component';

import { TestService } from './services/test.service';
import { ErrorDialogService } from './services/errordialog.service';

import { HttpConfigInterceptor} from './interceptor/httpconfig.interceptor';
import { AppTwoDigitDecimaNumberDirective } from './directives/app-two-digit-decima-number.directive';

@NgModule({
  declarations: [
    AppComponent,
    ErrorDialogComponent,
    AppTwoDigitDecimaNumberDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    TestService,
    ErrorDialogService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ],
  entryComponents: [ErrorDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
