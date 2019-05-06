import React from 'react'
import { ButtonBackToHome } from '../components/ButtonBackToHome'

export const NotFound = () => (
    <div>
        <h1 className='title' > 404!</h1>
        <h2>La página solicida no existe.</h2>
        <ButtonBackToHome />
    </div>
)