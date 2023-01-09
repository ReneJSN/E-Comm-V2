import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="row">
            <div className="footer-col">
                <h4>company</h4>
                <ul>
                    <li><a href="#">about us</a></li>
                    <li><a href="#">our services</a></li>
                    <li><a href="#">privacy policy</a></li>
                    <li><a href="#">shipping policy</a></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>get help</h4>
                <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">shipping</a></li>
                    <li><a href="#">returns</a></li>
                    <li><a href="#">order status</a></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>online shop</h4>
                <ul>
                    <li><a href="product.html">Statues</a></li>
                    <li><a href="#">Figurines</a></li>
                    <li><a href="#">Mangas</a></li>
                    <li><a href="#">Accesories</a></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>follow us</h4>
                <div className="social-links">
                    <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}

