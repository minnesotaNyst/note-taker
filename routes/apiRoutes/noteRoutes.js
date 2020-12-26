const router = require('express').Router();
const { notes, nextId } = require('../../db/db.json');
const { addNewNote, validateNote } = require('../../lib/notes');

// `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.
router.get('/notes', (req, res) => {
	res.json(notes);
});

// `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client
router.post('/notes', (req, res) => {
	// This takes a unique id from the property "nextId"
	req.body.id = nextId;
	// validates note format
	if (!validateNote(req.body)) {
		res
			.status(400)
			.send('Please make sure you enter a title and text for your note.');
	} else {
		// if validation is successful, it passes req.body and notes array to addNewNote
		const note = addNewNote(req.body, notes);
		res.json(req.body);
	}
});

module.exports = router;
