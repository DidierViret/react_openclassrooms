import React from 'react'
import clsx from 'clsx'

const Title = ({children, className}) => {
  return (<>
    <h1 className={clsx("text-2xl md:text-4xl text-center flex-auto text-primary", className)}>{children}</h1>
  </>)
}

export default Title