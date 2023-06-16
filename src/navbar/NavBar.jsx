import React, { Component } from 'react'
import './NavBar.css'
import CustomButton from '../myComponents/CustomButton'
import { Link } from 'react-router-dom'

function NavBar(props) {
    return (
        <>
            <div className="navbar">
                <div className='title'>
                    <code><h1 >{props.title}</h1></code>
                </div>
                <div className='menu'>
                    <a href=''>ABOUT ME</a>
                    <a href=''>SERVICES</a>
                    <a href=''>PORTFOLIO</a>
                    <Link to='/book'>BOOK</Link>
                    <a href=''>CONTACT ME</a>
                </div>
                <CustomButton onClick={()=>{
                    console.log("navbar button clicked")
                }} title="Hire Me" colorClass="btn-style1"></CustomButton>
            </div>
        </>
    )
}
export default NavBar