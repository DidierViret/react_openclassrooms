import React from 'react'

import Link from '../../ui/link'
import Cart from '../../components/Cart'

const Home = () => {
  return (<>
    <Cart />
    <Link className="pt-4 sm:pt-6" to="contact">Contact</Link>
  </>)
}

export default Home