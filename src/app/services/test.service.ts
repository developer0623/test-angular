import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/operator/map';

@Injectable()
export class TestService {

    constructor(private http: HttpClient) { }

    testCall(data) {
      return this.http.post('http://localhost:3070/api/test', data);
    }

}
