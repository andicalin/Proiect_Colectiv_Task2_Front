import {Injectable} from '@angular/core';
import {UserCredentials} from "../shared/data-type/UserCredentials";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

let login: string;
let forgotPassword: string;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) {
  }

  public loginUser(userCredentials: UserCredentials): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    localStorage.setItem("email", userCredentials.email);
    localStorage.setItem("password", userCredentials.password);

    return this.httpClient.post<any>(login, userCredentials);
  }

  public forgotPassword(userCredentials: UserCredentials): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    localStorage.setItem("email", userCredentials.email);

    return this.httpClient.post<any>(forgotPassword, userCredentials);
  }

}
