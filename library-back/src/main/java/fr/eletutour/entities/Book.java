package fr.eletutour.entities;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.File;
import java.time.Instant;
import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Book {

    @Id
    private String isbn;

    @OneToMany(mappedBy = "book", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<Author> authors;

    private String title;

    private String genre;

    private String editor;

    private int pages;

    private Instant firstEdition;

    @Column(name = "cover", length = 100000)
    private byte[] cover;

    @Override
    public String toString() {
        return "Book{" +
                "isbn='" + isbn + '\'' +
                ", authors=" + authors +
                ", title='" + title + '\'' +
                ", genre='" + genre + '\'' +
                ", editor='" + editor + '\'' +
                ", pages=" + pages +
                ", firstEdition=" + firstEdition +
                '}';
    }
}
