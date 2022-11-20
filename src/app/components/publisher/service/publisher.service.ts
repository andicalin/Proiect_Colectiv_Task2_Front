import { Injectable } from '@angular/core';
import { BackendService } from 'src/backend/backend.service';

@Injectable({
  providedIn: 'root'
})
export class PublisherService {

  constructor(private backend:BackendService ) {}

  public addPublisher(name:String):any{
    var req = this.backend.post("http://localhost:8080/publisher/add",{"name":name});
    req.subscribe();
  }
}
