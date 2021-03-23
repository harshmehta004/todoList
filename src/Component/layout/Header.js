import React from 'react';
import {Link} from 'react-router-dom'
 function Header(){
     return(
         <header  style={setStyle}>
            <h1>
                TodoList
            </h1>
            <Link style={linkStyle} to="/">Home</Link>   <Link style={linkStyle} to="/about">About</Link>
            <Link to="/new branch">BRANCH abc</Link>
         </header>
     ) 
 }
 const setStyle={
     textAlign:'center',
     background: 'black',
     padding:'10px',
     color: 'white'
 }
 const linkStyle={
     color: 'white',
     textDecoration: 'none'

 }
 export default Header;