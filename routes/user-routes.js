const express = require('express');

const router = express.Router();

router.get('/', (req, res, next)=>{
    res.json('<api/users/> Works!!')
});

module.exports = router;