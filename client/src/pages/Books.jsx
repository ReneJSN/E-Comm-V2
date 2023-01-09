import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'
import "./Books.css"
import Footer from '../components/Footer'
import Header from '../components/Header'
import PriceFilter from '../components/Filter'

const Books = () => {
    const [books,setBooks] = useState([])

    useEffect(()=>{
        const fetchAllBooks = async ()=>{
            try{
                const res = await axios.get("http://localhost:8800/books")
                setBooks(res.data);
            }catch(err){
                console.log(err);
            }
        }
        fetchAllBooks()
    },[])

    return (
        <div >
            <Header/>
            <PriceFilter/>
            <div className='BookContainer'>
                <div className="books">
                {books.map(book=>(
                    <div className="book" key={book.id}>
                        {book.cover && <img src={book.cover} alt="" />}
                        <h2>{book.title}</h2>
                        <p>{book.desc}</p>
                        <span>{book.price}</span>
                    </div>
                ))}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Books
