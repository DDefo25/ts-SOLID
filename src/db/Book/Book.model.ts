import { model } from "mongoose"; 
import { IBookDocument } from "./Book.types"; 
import BookSchema from "./Book.schema"
  
const BookModel = model<IBookDocument>("employee", BookSchema)

export default BookModel