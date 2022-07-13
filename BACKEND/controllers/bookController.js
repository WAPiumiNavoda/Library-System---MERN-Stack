const Book = require("../model/bookModel");


//get books
const getAllBooks = async(req,res,next)=>{
    let books;
       try{
          books = await Book.find();
       }catch(err){
          console.log(err);
       }

       if(!books){
           return res.status(404).json({message:"No books found"});
       }else{
           return res.status(200).json({books});
       }
}

//get book by id
const getbyId = async(req,res,next)=>{
    const id = req.params.id
    let book;
    try{
          book = await Book.findById(id);
    }catch(err){
       console.log(err);
    }

    if(!book){
        return res.status(404).json({message:"No book found"});
    }else{
        return res.status(200).json({book});
    }
     
}

//add books
const addBooks = async(req,res,next)=>{
    const {name,author,description,price,available,image} = req.body;
    let book;
    try{
        book = new Book({
            name,
            author,
            description,
            price,
            available,
            image
        });
        await book.save();

    }catch(err){
        console.log(err)
    }

    if(!book){
        return res.status(500).json({message:'Unable To Add'})
    }
    return res.status(201).json({message:"Book details added!!"});

}

//update books
const updateBook = async(req,res,next)=>{
    const id = req.params.id;
    const {name,author,description,price,available,image} = req.body;
    let book;

    try{
     book = await Book.findByIdAndUpdate(id, {
         name,
         author,
         description,
         price,
         available,
         image
     });
     book = await book.save();

    }catch(err){
         console.log(err);
    }
   
    if(!book){
        return res.status(404).json({message:"Unable to update the book by ID"});
    }else{
        return res.status(200).json({message:"Book detail update succesfully!!"});
    }

}

//delete books
const deleteBook = async(req,res,next)=>{
     const id= req.params.id;
     let book;
     try{
         book = await Book.findByIdAndRemove(id)
     }catch(err){
         console.log(err)
     }

     if(!book){
        return res.status(404).json({message:"Unable to delete the book by ID"});
    }else{
        return res.status(200).json({message:"Book succesfully deleted"});
    }
}

exports.getAllBooks = getAllBooks;

exports.addBooks = addBooks;
exports.getbyId = getbyId;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;