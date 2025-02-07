import React from 'react'
import clsx from 'clsx'

const Logo = ({ className}) => {
  return (<>
    <img className={clsx("w-16 md:w-24 shrink-0 object-contain", className)} src="images/logo.png" alt="Logo de la maison jungle" />
  </>)
}

export default Logo