import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendService } from 'src/backend/backend.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private backend:BackendService ) {}

  public addCategory(name:String):any{
    // return this.backend.post("http://localhost:8080/category",{"name":name});
    console.log("added");
  }
}
