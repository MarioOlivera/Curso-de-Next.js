import React from 'react'

import Navbar from '@components/Navbar'

const Layout = ({children}) => {
    return(<div className='container'>
        <Navbar></Navbar>
        {children}
        <footer>THIS IS THE FOOTER</footer>
        <style jsx>{`
        .container{
            background-color: salmon
        }
        `}
        </style>
    </div>)
}

export default Layout