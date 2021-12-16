const express = require('express');
const router =express.Router();

//Dummy data
const notes=[{
    id:1,
    title:'Dummy Note',
    content:'This is a dummy note'
}];


router.get('/',(req,res)=>{

});

router.post('/', (req, res)=>{

})









module.exports =router;