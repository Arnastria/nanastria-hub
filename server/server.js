const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs')
const port = process.env.PORT || 3042;
const publicPath = path.join(__dirname, '..', 'build');
const srcPath = path.join(__dirname, '..', 'src');

app.use(express.static(publicPath));
app.use(cors());

app.get('/src/data', (req, res) => {

    fs.readFile(path.join(srcPath, 'data/data.json'), 'utf8', (err, jsonString) => {
        if (err) {
            console.log("Error reading file from disk:", err)
            return
        }
        try {
            const data = JSON.parse(jsonString)
            console.log("Name :", data.name)
            res.send(data);

        } catch (err) {
            console.log('Error parsing JSON string:', err)
        }
    })
});

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});