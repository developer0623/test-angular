import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { TestService } from './services/test.service';
import { ErrorDialogService } from './services/errordialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  testForm: FormGroup;
  submitted: any = false;
  errorSubject;
  lists = [];
  constructor(
    private testService: TestService,
    private errorService: ErrorDialogService,
    private formBuilder: FormBuilder
  ) {
    this.errorSubject = this.errorService.getNetworkSubject();
    this.errorSubject.subscribe((result) => {
      this.lists = this.lists.concat(result);
    });
  }

  ngOnInit() {
    this.testForm = this.formBuilder.group({
      'textField': ['', [
        Validators.required,
        Validators.maxLength(50)
      ]],
      'numberField': ['', [
        Validators.required,
        Validators.min(0),
        Validators.max(10000)
      ]]
    });
  }

  get f() { return this.testForm.controls; }

  onCallApi() {
    this.submitted = true;
    if (this.testForm.valid) {
      this.testService.testCall(this.testForm.value).subscribe((result: any) => {
        console.log('----->>>', result);
      });
    }
  }
}
