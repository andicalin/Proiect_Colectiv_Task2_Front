export class BookDto {
    id: number;
    author: string;
    title: string;
    year: number;
    isbn: string;
    summary: string;
    ranking: number;

    constructor(id: number, author: string, title: string, year: number, isbn: string, summary: string, ranking: number) {
        this.id = id;
        this.author = author;
        this.title = title;
        this.year = year;
        this.isbn = isbn;
        this.summary = summary;
        this.ranking = ranking;
    }
}