import React from "react";
import { useParams } from "react-router-dom";
import bookList from "../data/book_data";
function BookDetails(){
    const {id} = useParams()
    return(
        <div>
            <h1>Book Details</h1>
            <p>Book Name: {bookList[id].name}</p>
            <p>Book Author : {bookList[id].author}</p>
        </div>
    )
}
export default BookDetails