const express = require('express');
const path = require('path');
const app = express();

// console.log(__dirname);

const publicPath = path.join(__dirname, 'public');

// console.log(publicPath);

// app.use(express.static(publicPath));


app.get('/', (req, res) => {
    res.sendFile(`${publicPath}/index.html`);
});

app.get('/about', (req, res) => {
    res.sendFile(`${publicPath}/about.html`);
});
app.get('*', (req, res) => {
    res.sendFile(`${publicPath}/404.html`);
});




app.listen(5000);