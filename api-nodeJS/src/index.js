const express = require('express');
const app = express();
const port = 4201;

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})



let count = 0;

app.get('/api', (req, res) => {
    res.json({count})
})

app.post('/api', (req, res) => {
    ++count;
    res.json({count});
});