import { Document, Model } from "mongoose"; 
  
export interface IBook {
    title?: string,
    description?: string,
    authors?: string[],
    favorite?: string,
    fileCover?: string,
    fileName?: string,
    fileBook?: string
  }
  
export interface IBookDocument extends IBook, Document { } 
export interface IBookModel extends Model<IBookDocument> { }