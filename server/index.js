// Server initialisation
const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
app.use(require("body-parser").text());
app.use(require('body-parser').urlencoded({ extended: false }));
app.use(require('body-parser').json());
// Loads my demo api
require('./apis/demo')(app)
// Running my server.
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Mixing it up on port ${PORT}`)
})
