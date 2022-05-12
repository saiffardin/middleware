const express = require('express');
const {studentRouter} = require('./routes/student.routes');

const app = express();

// for parsing the body in POST request
var bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use('/api/student', studentRouter);



app.listen(8080, () => {
    console.log('listening to port 8080')
})