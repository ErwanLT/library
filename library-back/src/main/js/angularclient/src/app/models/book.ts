import {Author} from './author';

export class Book {
  isbn: string;
  authors: Author[];
  title: string;
  genre: string;
  editor: string;
  pages: number;
  firstEdition: any;
}
