import { Injectable } from '@angular/core';
import { BackendService } from 'src/backend/backend.service';

@Injectable({
  providedIn: 'root'
})
export class PublisherService {

  constructor(private backend:BackendService ) {}

  public addPublisher(name:String):any{
    // return this.backend.post("http://localhost:8080/publisher",{"name":name});
    console.log("added");
  }
}
