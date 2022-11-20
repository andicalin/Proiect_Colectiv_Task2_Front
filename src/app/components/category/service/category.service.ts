import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendService } from 'src/backend/backend.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private backend:BackendService ) {}

  public addCategory(name:String):any{
    var req =  this.backend.post("http://localhost:8080/category/add",{"name":name});
    req.subscribe();
  }
}
