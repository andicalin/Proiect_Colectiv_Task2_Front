import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/backend/backend.service';
import { CategoryService } from './service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  title: String | undefined;
  hasWorked: boolean | undefined;
  constructor(private service: CategoryService) { }

  addCategory(name: String | undefined) {
    if (name) {
      this.service.addCategory(name);
      this.hasWorked = true;
    }
    else { this.hasWorked = false; }
  }
  ngOnInit(): void {
  }

}
