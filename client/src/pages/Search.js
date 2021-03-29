import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Input, FormBtn } from "../components/SearchForm";

function searchPage() {
    // Setting our component's initial state
    const [books, setBooks] = useState([])
    const [formObject, setFormObject] = useState({})

    // Load all books and store them with setBooks
    useEffect(() => {
        loadBooks()
    }, [])

    // Loads all books and sets them to books
    function loadBooks() {
        API.getBooks()
            .then(res =>
                setBooks(res.data)
            )
            .catch(err => console.log(err));
    };

    // Deletes a book from the database with a given id, then reloads books from the db
    function deleteBook(id) {
        API.deleteBook(id)
            .then(res => loadBooks())
            .catch(err => console.log(err));
    }

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    function handleFormSubmit(event) {
        event.preventDefault();
        API.saveBook({
            title: formObject.title,
            authors: formObject.authors,
            desription: formObject.description,
            image: formObject.image,
            link: formObject.link
        })
            .then(res => loadBooks())
            .catch(err => console.log(err));

    };

    return (
        <div className="container fluid">

            <div className="row">
                <div className="col">
                    <form>
                        <Input
                            onChange={handleInputChange}
                            name="title"
                            placeholder="Title (required)"
                        />

                        <FormBtn
                            disabled={!(formObject.author && formObject.title)}
                            onClick={handleFormSubmit}
                        >
                            Save Book
              </FormBtn>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default searchPage;