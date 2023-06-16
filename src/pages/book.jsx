import React from "react";
import bookList from "../data/book_data";
import { Link } from "react-router-dom";
function Book(){
    return (
        <div>
            {
                bookList.map(
                    (book, index)=>{
                        return (
                            <Link to={"/book/"+index}>
                            <h4>{book.name}</h4>
                            </Link>
                        )
                    }
                )
            }
        </div>
    )
}
export default Book