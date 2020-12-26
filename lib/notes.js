// * This file is in the lib folder, which is short for library, and that its purpose is to store files that will be used by multiple files in your application.

// !do not forget your dependencies for the file!
const fs = require('fs');
const path = require('path');

// here we create a function to write the data to the db.json file and create a new id
// credit goes to craig bennett for the idea to create a new id via this method...
// !try adding in an npm packaged that creates a unique id

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

// here we want to make sure we are validating the data coming from the web page
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

// !don't forget to export the functions by using module.exports!
module.exports = { addNewNote, validateNote };
