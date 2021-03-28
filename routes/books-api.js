const router = require("express").Router();
const booksController = require("../controllers/booksController");
const bookRoutes = require("./books");
const apiRoutes = require("./api");
const path = require("path");

// Matches with "/api/books"
router.route("/")
    .get(booksController.findAll)
    .post(booksController.create);

// Matches with "/api/books/:id"
router
    .route("/:id")
    .get(booksController.findById)
    .put(booksController.update)
    .delete(booksController.remove);

// Book routes
router.use("/books", bookRoutes);

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;