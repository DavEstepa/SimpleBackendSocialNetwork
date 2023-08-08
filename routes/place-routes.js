const express = require('express');

const router = express.Router();

router.get('/', (req, res, next)=>{
    res.json('<api/places/> Works!!')
});

module.exports = router;