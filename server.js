const express = require('express');

// we create these consts as a route that the front-end can request data from
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

// instantiate the server
// we assign this to the app variable so that we can later chain on methods to the express.js server... (app.listen() for example)
const app = express();
const PORT = process.env.PORT || 3003;

// use all assests in the public folder for use with the htmlRoutes
app.use(express.static('public'));

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

// parse incoming JSON data
app.use(express.json());

// uses the router on the html distributor
app.use('/', htmlRoutes);

// uses the router on the api distributor
app.use('/api', apiRoutes);

//this is the method we use to make our server listen... '.listen()'
//what is a port? it  is like a specific room on a college campus... (campus = host)
app.listen(PORT, () => {
	console.log(`API server now on port http://localhost:${PORT}`);
});
