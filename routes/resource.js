var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var book_controller = require('../controllers/book');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// book ROUTES ///
// POST request for creating a book.
router.post('/book', book_controller.book_create_post);
// DELETE request to delete book.
router.delete('/book/:id', book_controller.book_delete);
// PUT request to update book.
router.put('/book/:id', book_controller.book_update_put);
// GET request for one book.
router.get('/book/:id', book_controller.book_detail);
// GET request for list of all book items.
router.get('/book', book_controller.book_list);
module.exports = router;

