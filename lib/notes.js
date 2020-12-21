const fs = require('fs');
const path = require('path');

// this writes the new note to the db.json file
const addNewNote = (body, notesArray) => {
	const note = body;
	notesArray.push(note);
	let nextId = parseInt(note.id) + 1;
	fs.writeFileSync(
		path.join(__dirname, '../db/db.json'),
		JSON.stringify({ notes: notesArray, nextId }, null, 2)
	);
	return note;
};

// this validates the data coming from the web page
const validateNote = note => {
	if (!note.id || typeof note.id !== 'string') {
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

// // Splices a specific note and rewrites the db.json
// const deleteById = (id, notesArray) => {
// 	const deleted = notesArray.splice(
// 		notesArray.findIndex(obj => obj.id === id),
// 		1
// 	);
// 	fs.writeFileSync(
// 		path.join(__dirname, '../db/db.json'),
// 		JSON.stringify({ notes: notesArray }, null, 2)
// 	);
// 	return notesArray;
// };

module.exports = { addNewNote, validateNote };
