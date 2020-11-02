import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../models/book';
import {Observable} from 'rxjs';

@Injectable()
export class BookService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/books';
  }

  public findAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.usersUrl);
  }

  public save(book: Book) {
    return this.http.post<Book>(this.usersUrl, book);
  }
}
