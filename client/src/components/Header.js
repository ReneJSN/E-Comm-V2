import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Header.css"

export default function Header() {
    let navigate = useNavigate()
  return (
    <div>
       <header>
        <nav class="nav">
            {/* <input type="checkbox" id="check">
            <label for="check" class="checkbtn">
                <i class="fas fa-bars"></i>
            </label> */}
            <label class="logo">Ren's Manga Shop</label>
            <ul>
                <li onClick={()=> navigate("/")}>Home</li>
                <li onClick={()=> navigate("/products")}>Products</li>
                <li onClick={()=> navigate("/Contact")}>Contact Us</li>
            </ul>
        </nav>
    </header>
    </div>
  )
}
