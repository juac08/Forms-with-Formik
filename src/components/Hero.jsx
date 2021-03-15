import React from 'react'
import svg from './forms.svg'

const Hero = () => {
    return (
        <header className='container'>
        <div className='item'>
        <h1>Forms With formik</h1>
        </div>
        <div className='item'>
        <img src={svg} alt="nothing"/>
            </div>
        </header>
    )
}

export default Hero
