import React from 'react'
import clsx from 'clsx'

const Logo = ({ className}) => {
  return (<>
    <img className={clsx("size-28 shrink-0 object-contain", className)} src="images/logo.png" alt="Logo de la maison jungle" />
  </>)
}

export default Logo