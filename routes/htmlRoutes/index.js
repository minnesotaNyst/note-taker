const path = require('path');
const router = require('express').Router();

// refers root to index.html
router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// refers to notes.html page
router.get('/notes', (req, res) => {
	res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

module.exports = router;
