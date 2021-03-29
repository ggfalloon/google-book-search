import axios from "axios";
const APIkey = "AIzaSyDx8N3PgfYOqvLVD3um7h459tHwAg7HyMY";

export default {
    // Gets all books
    getBooks: function (bookData) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + bookData + "&key=" + APIkey + "&maxResults=20");
    },

    // Deletes the book with the given id
    deleteBook: function (id) {
        return axios.delete("/api/saved/" + id);
    },
    // Saves a book to the database
    saveBook: function (bookData) {
        return axios.post("/api/search", bookData);
    }
};
