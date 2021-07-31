import { FaAlignRight } from 'react-icons/fa';
import React, { Component } from 'react';

const Navbar = () => {

  return (
    <div className="navBar">
                    {/* <button onClick={this.Toggle}>
                        <FaAlignRight />
                    </button> */}
                    <ul className="">
                        <li href="#">Home</li>
                        <li href="#">About me</li>
                        <li href="#">Contact</li>
                    </ul>
              </div>
  )
}

export default Navbar



{/* <ul className={this.state.toggle ? "nav-links show-nav" : "nav-links"}> */}
