import React from 'react'
import './main.css'
import {Socials, Description, Events} from './Components';

export default function Mainpage() {

    return (
    <div>
        <section className='logo'>
            <img src="./Bloomlogo.png" alt="Aalto Bloom logo" className='logo'></img>
        </section>
        <Description />
        <Socials />
        <Events />
    </div>
    );
}