const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => console.log(`Bot running on http://localhost:${port}`)

const { keep_alive } = require("./keep_alive");