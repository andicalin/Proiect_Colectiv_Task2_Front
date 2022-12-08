import {Component, Input, OnInit} from '@angular/core';
import {BookTableService} from "../service/book-table.service";
import {BookTable} from "./model/BookTable";
import {Subscription} from "rxjs";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.css']
})
export class BookTableComponent implements OnInit {
  books:BookTable[]=[];
  first = 0;
  rows = 10;


  constructor(private bookTableService:BookTableService,public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  ngOnInit(): void {
    this.bookTableService.getBooksWithStudentNr().subscribe({
      next: res => {
        Object.entries(res).map(([k, v]) => {
          this.generateListForTable(k,v);
        });
      },
      error: err => {
        console.error('error! ', err);
      }
    });
    console.log(this.books);
  }

  generateListForTable(title:string,number:string){
      let book:BookTable={title:"",numberOfStudents:""};
      book.title=title;
      book.numberOfStudents=number;
      this.books.push(book);
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }


}
