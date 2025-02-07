import React from 'react'

import Logo from '../ui/logo'
import Title from '../ui/title'

function Banner() {
    return (<>
        <div className="flex w-full items-center mt-4 sm:mt-8 mb-4 sm:mb-8">
            <Logo /><Title>La maison de la jungle</Title>
        </div>
    </>)
}

export default Banner