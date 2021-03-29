import API from "../utils/API";
import ViewBtn from "../components/ViewBtn";
// import DeleteBtn from "../components/DeleteBtn";

function savedBooks() {
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

    return (

        <div className="container fluid">
            <div className="row">
                <div className="col-md-6">

                    {
                        books.map((book) => {
                            return <div className="savedBooks" key={book._id}>
                                <h3>{book.title} </h3>
                                <h4>{book.author}</h4>
                                <button><a href={book.link} target="_blank" rel="noreferrer"><span><ViewBtn /></span></a>
                                </button>

                                <div className="row">
                                    <img src={book.image}
                                        alt="book"
                                        className="img-thumbnail img-thumb" />
                                    <p>{book.description}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}


export default savedBooks;

/* <DeleteBtn onClick={() => deleteBook(book._id)} /> */
