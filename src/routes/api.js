const express = require('express')
const router = express.Router()


router.get('/stocks', (req,res) => {
    res.json({
        stock: "StocksEndpoint"
    })
})

module.exports = router