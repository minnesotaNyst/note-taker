const router = require('express').Router();
const { notes, nextId } = require('../../db/db.json');
const { addNewNote, validateNote } = require('../../lib/notes');

// `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.
router.get('/notes', (req, res) => {
	res.json(notes);
});

// `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client
router.post('/notes', (req, res) => {
	// this uses a unique id from nextId - idea came from Craig Bennett
	req.body.id = nextId;
	// validates the format of the note
	if (!validateNote(req.body)) {
		res
			.status(400)
			.send('Please make sure you enter a title and text for your note.');
	} else {
		// if successful, pass req/body and notes into addNewNote
		const note = addNewNote(req.body, notes);
		res.json(req.body);
	}
});

module.exports = router;
