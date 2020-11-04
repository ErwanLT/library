import {Component, Input} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Book} from '../models/book';
import {BookService} from '../service/book-service.service';

@Component({
  selector: 'app-cover-upload-modal',
  templateUrl: './cover-upload-modal.component.html',
  styleUrls: ['./cover-upload-modal.component.css']
})
export class CoverUploadModalComponent {

  closeResult = '';

  fileToUpload: File = null;

  @Input() book: Book;

  constructor(private modalService: NgbModal, private bookService: BookService) {}

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onFileChanged(event) {
    if (event.target.files.length > 0) {
      this.fileToUpload = event.target.files[0];
    }
  }

  onUpload() {

    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.fileToUpload, this.fileToUpload.name);
    uploadImageData.append('bookISBN', this.book.isbn);

    this.bookService.addCover(uploadImageData);
  }
}
