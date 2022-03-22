import React from 'react'
import './main.css'
import texts from './texts';
import TightEvent from './TightEvent';
import GetEvents from '../../services/GetEvents';

export default function Mainpage() {

    const [ comingEvents ] = GetEvents();

    return (
    <div>
        <section className='logo'>
            <img src="./Bloomlogo.png" alt="Aalto Bloom logo" className='logo'></img>
        </section>
        <section className='description'>
            <h1>Welcome to Aalto Bloom</h1>
            <p>{texts.desc.text}</p>
        </section>
        <section className='socials'>
            <h2>Reach us on social media</h2>
            <div>
                <div id="ig">
                    <a href="https://www.instagram.com/aaltobloom/" target="_blank"  rel="noreferrer">
                        <h4>Instagram</h4>
                        <img src="./glyph-logo_May2016.png" width="64px" alt="Instagram Logo and Link to Aaltobloom's instagram page"></img>
                        <p>@aaltobloom</p>
                    </a>
                </div>
                <div id="tg">
                    <a href="https://t.me/joinchat/HmSuviygYAswZmNk" target="_blank"  rel="noreferrer">
                        <h4>Telegram</h4>
                        <img src="./TGLogo.png" width="64px" alt="Instagram Logo and Link to Aaltobloom's instagram page"></img>
                        <p>Join our group</p>
                    </a>
                </div>
                <div id="mail">
                    <a href="mailto: sauli.sillanpaa@gmail.com" target="_blank"  rel="noreferrer">
                        <h4>Email</h4>
                        <img src="./MailLogo.png" width="64px" alt="Email"></img>
                        <p>Send Email to Sauli</p>
                    </a>
                </div>
            </div>
        </section>
        <section className='events'>
            <h2>Coming Events</h2>
            <div>
                {
                comingEvents.length === 0 ?
                    <p>There are no coming events right now.</p> :
                    comingEvents.map(event => (
                        <TightEvent key={event.id} event={event} />
                ))
                }    
            </div>
            <br />
            <a href='/events'>See all events</a>
        </section>
    </div>
    );
}