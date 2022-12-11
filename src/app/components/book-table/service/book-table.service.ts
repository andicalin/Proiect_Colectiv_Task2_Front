import { Injectable } from '@angular/core';
import {BackendService} from "../../../backend/backend.service";
import {map, Observable} from "rxjs";
import {BookTable} from "../book-table/model/BookTable";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BookTableService {

  constructor(private backendService:BackendService,private readonly _http: HttpClient) { }

  public getBooksWithStudentNr(): Observable<{
    'key':string,
    'value':string,
  }> {
    return this._http.get<any>('http://localhost:8080/books/getBooksWithUsersNr').pipe(
      map(res => res)
    );
  }
  public books(): Observable<BookTable[]>{
    return this._http.get<any>('http://localhost:8080/books/getBooksWithUsersNr')
    ;
  }
}
