import { Component, OnInit } from '@angular/core';
import { DomainService } from './service/domain.service';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.scss']
})
export class DomainComponent implements OnInit {

  title: String | undefined;
  hasWorked:boolean|undefined;
  constructor(private service: DomainService) { }

  addDomain(name: String | undefined) {
    if (name) {
      this.service.addDomain(name);
      this.hasWorked=true;
    }
    else {this.hasWorked = false;}
  }
  ngOnInit(): void {
  }

}
