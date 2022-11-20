import { Injectable } from '@angular/core';
import { BackendService } from 'src/backend/backend.service';

@Injectable({
  providedIn: 'root'
})
export class DomainService {

  constructor(private backend:BackendService ) {}

  public addDomain(name:String):any{
    var req = this.backend.post("http://localhost:8080/domain/add",{"name":name});
    req.subscribe();
  }
}
