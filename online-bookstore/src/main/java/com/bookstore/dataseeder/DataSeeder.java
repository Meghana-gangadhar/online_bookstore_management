package com.bookstore.dataseeder;

import com.bookstore.model.Book;
import com.bookstore.repository.BookRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataSeeder implements CommandLineRunner {
    private final BookRepository bookRepository;

    public DataSeeder(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @Override
    public void run(String... args) {
        bookRepository.deleteAll();

        Book book1 = new Book();
        book1.setTitle("Effective Java");
        book1.setAuthor("Joshua Bloch");
        book1.setPublisher("Addison-Wesley");
        book1.setPrice(45.00);

        Book book2 = new Book();
        book2.setTitle("Clean Code");
        book2.setAuthor("Robert C. Martin");
        book2.setPublisher("Prentice Hall");
        book2.setPrice(40.00);

        bookRepository.save(book1);
        bookRepository.save(book2);
    }
}
