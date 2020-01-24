import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MasterdataService {

  //apiUrl : string = "http://localhost:50339/api/MasterData";
  apiUrl : string = "https://ganiapi.azurewebsites.net/api/MasterData";

  constructor(private httpC:HttpClient) { }

  getUsers(): Observable<any> {
    return this.httpC.get(this.apiUrl).pipe(
      map((res: Response) => res || { } ));
  }
  getUsers1() {
    return this.httpC.get(this.apiUrl).pipe(
      map((res: Response) => res || { } ));
  }

}
