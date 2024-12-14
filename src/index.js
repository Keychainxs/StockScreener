const express = require('express')
const dotenv = require('dotenv');
const apiRoutes = require('./routes/api');


dotenv.config()
const app = express();
const PORT = process.env.PORT || 3000
app.use('/api',apiRoutes)

app.use(express.json);


app.get('/', (req, res) => {
    res.send("Stock screener Backend is running!");
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})







