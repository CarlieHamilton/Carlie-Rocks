import React from "react"
import { Link } from "gatsby"

const Menu = () => (
    <>
    <div style={{
        background: 'rebeccaPurple',
        paddingTop: '10px'
    }}>
        <ul style={{
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'space-evenly'
        }}>
            <li><Link to="/" style={{
            color: `white`,
            textDecoration: `none`,
          }}>Home</Link></li>
            <li><Link to="/about" style={{
            color: `white`,
            textDecoration: `none`,
          }}>About</Link></li>
            <li><Link to="/blog"  style={{
            color: `white`,
            textDecoration: `none`,
          }}>Blog</Link></li>
        </ul>
    </div>
    </>
)

export default Menu
