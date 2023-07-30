import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AddBook.css';

const AddBook = () => {
    const navigate = useNavigate();
    const [bookName, setBookName] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [year, setYear] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(process.env.REACT_APP_API_ENDPOINT, {
                // const response = await axios.post("https://ll7ov8v2zk.execute-api.us-east-1.amazonaws.com/add-book/", {
                book_name: bookName,
                author: authorName,
                year: year,
            });
            console.log("Response is : " + response.data);
            // console.log("Books is : " + JSON.stringify(response.data.books));

            // Redirect to the second page
            const url = '/books';
            const books_data = JSON.stringify(response.data.books)
            navigate(url, { state: { booksData: books_data } });
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="add-book-container">
            <h2>Add a New Book</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="book-name">Book Name:</label>
                    <input
                        id="book-name"
                        type="text"
                        value={bookName}
                        onChange={(e) => setBookName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="author-name">Author Name:</label>
                    <input
                        id="author-name"
                        type="text"
                        value={authorName}
                        onChange={(e) => setAuthorName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="year">Year:</label>
                    <input
                        id="year"
                        type="text"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                    />
                </div>
                <button type="submit" className="submit-button">
                    Add Book
                </button>
            </form>
        </div>
    );
};

export default AddBook;
