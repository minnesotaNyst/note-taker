const router = require('express').Router();
const { notes, nextId } = require('../../db/db.json');
const { addNewNote, validateNote, deleteNote } = require('../../lib/notes');

// `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.
router.get('/notes', (req, res) => {
	res.json(notes);
});

// `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client
router.post('/notes', (req, res) => {
	// This takes a unique id from the db property "nextId"
	req.body.id = nextId;
	// validates note format
	if (!validateNote(req.body)) {
		res
			.status(400)
			.send(
				'The note is not properly formatted. Make sure you enter a title and text.'
			);
	} else {
		// if validation is successful, it passes req.body and notes array to addNewNote
		const note = addNewNote(req.body, notes);
		res.json(req.body);
	}
});

// This route is for delete requests
// router.delete('/notes/:id', (req, res) => {
// 	// This takes the id from the query parameter
// 	let deleteId = parseInt(req.params.id);
// 	// This looks for the index of the note based on the queried id
// 	let deleteIndex = notes.findIndex(x => {
// 		return x.id === deleteId;
// 	});
// 	// Just in case, it doesn't allow Delete requests that can't match with an index
// 	if (deleteIndex === -1) {
// 		res.sendStatus(404);
// 	}
// 	// Sends index, notes array, and the nextId to deleteNote
// 	else {
// 		deleteNote(deleteIndex, notes, nextId);
// 		res.status(200).json({
// 			code: 200,
// 			message: 'Note Deleted',
// 			noteId: deleteId
// 		});
// 	}
// });

module.exports = router;
