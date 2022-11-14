import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookDto } from './book-dto.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private booksMockData : BookDto[] = [
    new BookDto(1, 'author1', 'title1', 2000, 'isbn1', 'summary1', 1.5),
    new BookDto(2, 'author2', 'title2', 2001, 'isbn2', 'summary2', 3.5),
    new BookDto(3, 'author3', 'title3', 2002, 'isbn3', 'summary3', 2.5)];

  constructor() { }

  getBooks(): BookDto[] {
    return this.booksMockData;
  }

  getBook(id: number): BookDto | undefined {
    return this.booksMockData.find(b => b.id === id);
  }

}
