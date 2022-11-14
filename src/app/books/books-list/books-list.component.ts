import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookDto } from '../shared/book-dto.model';
import { BookService } from '../shared/book.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  public books: BookDto[] = [];

  constructor(private bookService: BookService,
    private router: Router) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.books = this.bookService.getBooks();
  }

  onSelect(bookDto: BookDto): void {
    this.router.navigate(['/book-details', bookDto.id]);
  }
}
