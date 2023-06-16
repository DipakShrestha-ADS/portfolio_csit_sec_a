import React from "react"
import { useLocation } from "react-router-dom"
function SearchBook(){
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const id = queryParams.get("id")
    const page = queryParams.get("page")
    const author = queryParams.get("author")
    return(
        <div>
            <h1>Search Book</h1>
            <p>Serch query :  {queryParams}</p>
            <i>id = {id}</i>
            <i>page = {page}</i>
            <i>author = {author}</i>
        </div>
    )
}
export default SearchBook