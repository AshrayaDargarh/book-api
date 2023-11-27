const express=require('express');
const {createBook,fetchBooks,updateBook,deleteBook}=require('../controllers/bookControllers');
const router=express.Router();

router
.get('/',fetchBooks)
.post('/create-book',createBook)
.patch('/update-book/:id',updateBook)
.delete('/delete-book/:id',deleteBook)
module.exports=router; 