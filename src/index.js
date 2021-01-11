const express = require('express');
const cors = require('cors');
const router = require('./router');

let app = express();
const port = parseInt(process.env.PORT || 3001);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors('*'));
app.use('/api/rates', router);

app.listen(port, () => {
console.log(`Server running on port ${port}`);
});
