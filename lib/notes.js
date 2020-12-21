const fs = require('fs');
const path = require('path');

// this writes the new note to the db.json file
const addNewNote = (body, notesArr) => {
	const note = body;
	notesArr.push(note);
	let nextId = parseInt(note.id) + 1;
	fs.writeFileSync(
		path.join(__dirname, '../db/db.json'),
		JSON.stringify({ notes: notesArr, nextId }, null, 2)
	);
	return note;
};

// this validates the data coming from the web page
const validateNote = note => {
	if (!note.id || typeof note.id !== 'number') {
		return false;
	}
	if (!note.title || typeof note.title !== 'string') {
		return false;
	}
	if (!note.text || typeof note.title !== 'string') {
		return false;
	}
	return true;
};

module.exports = { addNewNote, validateNote };
