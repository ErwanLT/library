import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import {BookService} from '../service/book-service.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.findAll().subscribe(data => {
        this.books = data;
        this.books.forEach((book) => {
          const base64image = book.cover;
          const cover = 'data:image/jpeg;base64,' + base64image;
          book.cover = cover;
      });
    });
  }

}
