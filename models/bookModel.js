const mongoose=require('mongoose');

const bookSchema=mongoose.Schema({
    bookName:{type:String,required:true,unique:true},
    author:{
        type:String,
        required:true,
    },
    bookDescription:{
        type:String,
        required:true
    }
})

const Book=mongoose.model("Book",bookSchema);
module.exports=Book;