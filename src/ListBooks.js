import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import './ListBook.css';

const ListBooks = () => {
    const location = useLocation(); // Access the location object
    const [booksData, setBooksData] = useState([]);

    useEffect(() => {
        // Parse the JSON string back to the original object
        if (location.state && location.state.booksData) {
            const parsedBooksData = JSON.parse(location.state.booksData);
            setBooksData(parsedBooksData);
        }
    }, [location.state]);

    return (
        <div>
            <h2>Book List</h2>
            {booksData.length === 0 ? (
                <p>No booksData available.</p>
            ) : (
                <table className="book-table">
                    <thead>
                        <tr>
                            <th>Serial Number</th>
                            <th>Book Name</th>
                            <th>Author</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {booksData.map((book, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{book.book_name}</td>
                                <td>{book.author}</td>
                                <td>{book.year}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ListBooks;
