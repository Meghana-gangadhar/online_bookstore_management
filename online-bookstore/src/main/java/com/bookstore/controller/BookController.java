package com.bookstore.controller;

import com.bookstore.model.Book;
import com.bookstore.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/books")
public class BookController {

    @Autowired
    private BookService bookService;

    // Add a new book
    @PostMapping
    public ResponseEntity<Book> addBook(@RequestBody Book book) {
        Book newBook = bookService.addBook(book);
        return ResponseEntity.ok(newBook);
    }

    // Get a book by ID
    @GetMapping("/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable String id) {
        Optional<Book> book = bookService.getBookById(id);
        if (book.isPresent()) {
            return ResponseEntity.ok(book.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Get all books
    @GetMapping
    public ResponseEntity<List<Book>> getAllBooks() {
        List<Book> books = bookService.getAllBooks();
        return ResponseEntity.ok(books);
    }

    // Update a book
    @PutMapping("/{id}")
    public ResponseEntity<Book> updateBook(@PathVariable String id, @RequestBody Book bookDetails) {
        try {
            Book updatedBook = bookService.updateBook(id, bookDetails);
            return ResponseEntity.ok(updatedBook);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
    @GetMapping("/search")
    public List<Book> searchBooks(@RequestParam String query) {
        return bookService.searchBooks(query);
    }


    // Delete a book
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBook(@PathVariable String id) {
        bookService.deleteBook(id);
        return ResponseEntity.noContent().build();
    }
}
