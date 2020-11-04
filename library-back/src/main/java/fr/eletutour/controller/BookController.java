package fr.eletutour.controller;

import fr.eletutour.entities.Book;
import fr.eletutour.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.awt.image.DataBufferByte;
import java.awt.image.WritableRaster;
import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Objects;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class BookController {

    private final BookRepository bookRepository;

    @Autowired
    public BookController(BookRepository bookRepository){
        this.bookRepository = bookRepository;
    }

    @GetMapping("/books")
    public List<Book> getBooks() {
        return (List<Book>) bookRepository.findAll();
    }

    @PostMapping("/books")
    public void addBook(@RequestBody Book book) {
        bookRepository.save(book);
    }

    @PostMapping("/cover")
    public Book addCover(@RequestParam("imageFile") MultipartFile file,
                         @RequestParam("bookISBN") String isbn) throws IOException {

        Book book = bookRepository.findByIsbn(isbn);
        if(book != null){
            book.setCover(file.getBytes());
        }
        return bookRepository.save(book);
    }

}
