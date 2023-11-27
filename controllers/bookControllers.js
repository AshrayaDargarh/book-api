const Book=require('../models/bookModel');

const createBook=async(req,res)=>{
    const {bookName,author,bookDescription}=req.body;
    try {
        if(!bookName||!author || !bookDescription)
        {
            res.status(404).json({
                message:'Please Enter all the Feilds'
            });
        }
        const bookExists=await Book.findOne({bookName});
        if(bookExists)
        {
            res.status(400).json({
                message:'Book already exists'
            })
        }
        const book=await Book.create({
            bookName,
            author,
            bookDescription
        });
        book.save();
        if(book)
        {
            res.status(201).json({
                _id:book._id,
                bookName:book.bookName,
                author:book.author,
                bookDescription:book.bookDescription
            });
        }
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const fetchBooks=async(req,res)=>{
    try {
        const books=await Book.find();
        if(books)
            res.status(200).json(books);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const updateBook=async(req,res)=>{
    const {bookName,author,bookDescription}=req.body;
    console.log(req.body)
    try {
        const id=req.params.id;
        console.log(id)
        const updatedBook=await Book.findOneAndUpdate({_id:id},{bookName,author,bookDescription},{new:true});
        if(updatedBook)
            res.status(200).json(updatedBook)
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const deleteBook=async(req,res)=>{
    try {
        const id=req.params.id;
        const deletedBook=await Book.findOneAndDelete({_id:id});
        res.status(200).json({message:"Book deleted successfully"});
    } catch (error) {
        res.status(400).json(error.message);
    }
}
module.exports={createBook,fetchBooks,updateBook,deleteBook};