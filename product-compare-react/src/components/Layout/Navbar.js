import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

const navStyle = {
    'background-color': 'rgba(0, 0, 0, .85)',
    '-webkit-backdrop-filter': 'saturate(180%) blur(20px)',
    'backdrop-filter': 'saturate(180%) blur(20px)'
}

const Navbar = () => {
    return (
        <nav style={navStyle} class="sticky-top py-1">
            <div class="container d-flex flex-column flex-md-row justify-content-between">
                <Link to='/' class="py-2" aria-label="Product">
                    <svg class="bi bi-bag" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M14 5H2v9a1 1 0 001 1h10a1 1 0 001-1V5zM1 4v10a2 2 0 002 2h10a2 2 0 002-2V4H1z"
                            clip-rule="evenodd" />
                        <path d="M8 1.5A2.5 2.5 0 005.5 4h-1a3.5 3.5 0 117 0h-1A2.5 2.5 0 008 1.5z" />
                    </svg>
                </Link>
                <Link to='/products' class="py-2 d-none d-md-inline-block">Saks Products</Link>
                <Link to='/productsNeiman' class="py-2 d-none d-md-inline-block">Neiman Products</Link>
                <Link to='#' class="py-2 d-none d-md-inline-block">Compare</Link>
            </div>
        </nav >
    )
}

export default Navbar;