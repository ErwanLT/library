package fr.eletutour;

import fr.eletutour.entities.Book;
import fr.eletutour.repository.BookRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.stream.Stream;

@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    CommandLineRunner init(BookRepository bookRepository) {
        return args -> {
            Stream.of("titi", "toto").forEach(name -> {
                Book book = new Book(name);
                bookRepository.save(book);
            });
            bookRepository.findAll().forEach(System.out::println);
        };
    }
}
