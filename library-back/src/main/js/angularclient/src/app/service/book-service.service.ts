import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../models/book';
import {Observable} from 'rxjs';

@Injectable()
export class BookService {

  private bookUrl: string;
  private coverUrl: string;

  constructor(private http: HttpClient) {
    this.bookUrl = 'http://localhost:8080/books';
    this.coverUrl = 'http://localhost:8080/cover';
  }

  public findAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.bookUrl);
  }

  public save(book: Book) {
    return this.http.post<Book>(this.bookUrl, book);
  }

  public addCover(file: FormData){
    this.http.post(this.coverUrl, file, { observe: 'response' })
      .subscribe((response) => {
          if (response.status === 200) {
            console.log('Image uploaded successfully');
          } else {
            console.log('Image not uploaded successfully');
          }
        }
      );
  }
}
