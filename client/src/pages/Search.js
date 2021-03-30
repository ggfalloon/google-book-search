import React, { useState } from "react";
import API from "../utils/API";
import { Input, FormBtn } from "../components/SearchForm";
import ViewBtn from "../components/ViewBtn";
import Results from "../components/Results";

function searchPage() {
    // Setting our component's initial state
    const [book, setBook] = useState("")
    const [formObject, setFormObject] = useState([])
    const [results, setResults] = useState([]);


    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const book = event.target.value;
        setFormObject(book);
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        API.getBooks()
            .then(data => {
                setResults(data.data.items);
            })
    }

    // When the form is submitted, use the API.saveBook method to save the book data

    function handleFormSave(event) {
        event.preventDefault();
        console.log(book)
        API.saveBook({
            title: formObject.title,
            authors: formObject.authors,
            desription: formObject.description,
            image: formObject.image,
            link: formObject.link
        })
            .then(res => db.googlebooks)
            .catch(err => console.log(err));

    };

    return (
        <div className="container fluid">
            <div className="row">
                <div className="col">
                    <form onSubmit={handleFormSubmit}>
                        <Input
                            type="text" onChange={handleInputChange}
                            name="title"
                            placeholder="Enter Book Title"
                        />
                        <FormBtn>Search</FormBtn>
                    </form>
                    <Results>
                        {
                            results.map((book) => {
                                return <div>
                                    <h3>{data.volumeInfo.title} </h3>
                                    <h4>{book.volumeInfo.authors}</h4>
                                    <ViewBtn><a href={book.volumeInfo.infoLink} target="_blank" rel="noreferrer"></a></ViewBtn>
                                    <FormBtn onSubmit={handleFormSave}>Save</FormBtn>

                                    <div className="row">
                                        <img src={book.volumeInfo.imageLinks.thumbnail}
                                            alt="book"
                                            className="img-thumbnail img-thumb" />
                                        <p>{book.volumeInfo.description}</p>
                                    </div>
                                </div >
                            })
                        }
                    </Results>
                </div>
            </div>
        </div>
    );
}


export default searchPage;