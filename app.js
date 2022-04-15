const express = require('express')
const path = require('path');

const app = express()
const PORT = process.env.PORT || 3000 // Heroku will need the PORT environment variable

app.use(express.static(path.join(__dirname, 'build')));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))