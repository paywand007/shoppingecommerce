import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import Menu from './DropdwonLists/Menu'
function Layout({children}) {
  return (
    <div className='layout'>

      <Head>
        <title>Electronic Devices</title>
      </Head>
      <header>
        <Navbar/>
<Menu/>
      </header>
      <main className='main-container'>
        {children}
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Layout