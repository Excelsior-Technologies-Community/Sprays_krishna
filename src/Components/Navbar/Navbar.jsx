import React from 'react'
import'./Navbar.css'
import logo from'../../assets/imges/logo.png'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
   <>
      {/* ================= TOP BAR ================= */}
      <div className="top-bar">
        <div className="top-left">
          Monday - Friday &nbsp; 8:00 AM - 9:00 PM
        </div>

        <div className="top-right">
          <select>
            <option>🇬🇧 English</option>
            <option>🇮🇳 Hindi</option>
          </select>

          <select>
            <option>🇺🇸 USD</option>
            <option>₹ INR</option>
          </select>

          <a href="#">Faq</a>
          <a href="#">About Us</a>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <nav className="navbar">
        <div className="logo">Sprays</div>

        <ul className="menu">

          {/* ================= ALL CATEGORIES ================= */}
          <li className="dropdown">
            <span>All Categories ▾</span>

            <div className="mega-menu">
              <div className="mega-content">

                <div className="mega-column">
                  <h4>Universal Fragrances</h4>
                  <a href="#">Cassili Eau De Parfum</a>
                  <a href="#">Delina La Rosee</a>
                  <a href="#">Delina Eau De Parfum</a>
                  <a href="#">Pegasus Eau De Parfum</a>
                  <a href="#">Oriana Eau De Parfum</a>
                </div>

                <div className="mega-column">
                  <h4>Signature Perfumes</h4>
                  <a href="#">Althair Eau De Parfum</a>
                  <a href="#">Carlisle Eau De Parfum</a>
                  <a href="#">Greenley Eau De Parfum</a>
                  <a href="#">Herod Eau De Parfum</a>
                </div>

                <div className="mega-column">
                  <h4>Unisex Perfume</h4>
                <Link to="/cologne">Cologne Arabic Air</Link>
                  <a href="#">Cologne Gripped Rose</a>
                  <a href="#">Cologne Sapphire Sea</a>
                  <a href="#">Cologne To The Races</a>
                </div>

                {/* RIGHT SIDE IMAGE */}
                <div className="mega-image">
                  <img src="/img/perfume.png" alt="Perfume" />
                </div>

              </div>
            </div>
          </li>

          {/* ================= PAGES ================= */}
          <li className="dropdown">
            <span>Pages ▾</span>
            <div className="dropdown-menu">
              <a href="#">About Us</a>
              <a href="#">Contact</a>
              <a href="#">FAQs</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Shipping Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>
          </li>

          {/* ================= COLLECTIONS ================= */}
          <li className="dropdown">
            <span>Collections ▾</span>

            <div className="collection-menu">
              <div className="collection-content">

                <div className="collection-item">
                  <img src="/img/sp.png" alt="Perfume" />
                  <p>Signature Perfumes</p>
                </div>

                <div className="collection-item">
                  <img src="/img/up.png" alt="" />
                  <p>Unisex Perfume</p>
                </div>

                <div className="collection-item">
                  <img src="/img/mp.png" alt="" />
                  <p>Men's Fragrances</p>
                </div>

                <div className="collection-item">
                  <img src="/img/usp.png" alt="" />
                  <p>Universal Fragrances</p>
                </div>

              </div>
            </div>
          </li>

          {/* ================= BLOG ================= */}
          <li className="dropdown">
            <span>Blog ▾</span>
            <div className="dropdown-menu">
              <a href="#">Blog Page</a>
              <a href="#">Article Page</a>
            </div>
          </li>

        </ul>

        {/* RIGHT ICONS */}
        <div className="nav-icons">
          <div className="user-icon">👤</div>
          <div className="cart-box">🛒 <span>$75.00</span></div>
        </div>
      </nav>
    </>
  )
}

export default Navbar