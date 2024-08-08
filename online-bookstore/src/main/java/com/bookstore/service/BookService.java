package com.bookstore.service;

import com.bookstore.model.Book;
import com.bookstore.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    // Add a new book
    public Book addBook(Book book) {
        return bookRepository.save(book);
    }

    // Get a book by ID
    public Optional<Book> getBookById(String id) {
        return bookRepository.findById(id);
    }

    // Get all books
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    // Update a book
    public Book updateBook(String id, Book bookDetails) {
        Optional<Book> optionalBook = bookRepository.findById(id);
        if (optionalBook.isPresent()) {
            Book book = optionalBook.get();
            book.setTitle(bookDetails.getTitle());
            book.setAuthor(bookDetails.getAuthor());
            book.setPublisher(bookDetails.getPublisher());
            book.setPrice(bookDetails.getPrice());
            return bookRepository.save(book);
        } else {
            throw new RuntimeException("Book not found with id " + id);
        }
    }
    public List<Book> searchBooks(String query) {
        return bookRepository.findByTitleContainingIgnoreCaseOrAuthorContainingIgnoreCase(query, query);
    }

    // Delete a book
    public void deleteBook(String id) {
        bookRepository.deleteById(id);
    }
}
