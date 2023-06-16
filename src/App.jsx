import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./main";
import Book from "./pages/book";
import BookDetails from "./pages/book_detail";
import SearchBook from "./pages/search_book";
import Body from './body/body'
function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}>
                    <Route index element={<Body/>}/>
                    <Route path="book" element={<Book/>}/>
                    <Route path="book/:id" element={<BookDetails/>}/>
                    <Route 
                    path="search/book" 
                    element={<SearchBook/>}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default App