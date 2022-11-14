import { Component, OnInit } from '@angular/core';
import { PublisherService } from './service/publisher.service';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.scss']
})
export class PublisherComponent implements OnInit {

  hasWorked:boolean|undefined;
  title: String | undefined;
  constructor(private service: PublisherService) { }

  addPublisher(name: String | undefined) {
    if (name) {
      this.service.addPublisher(name);
      this.hasWorked = true;
    }
    else {this.hasWorked=false; }
  }

  ngOnInit(): void {
  }

}
