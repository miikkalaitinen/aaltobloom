import React from 'react'
import moment from 'moment';
import GetEvents from '../../services/GetEvents';

const TightEvent = ({ event }) => {
    return(
        <div className='tightEvent'>
            <div>
                <h3>{event.title}</h3>
                <p>{moment(event.date).format('D.M.Y [klo] HH:mm')}</p>  
            </div>
            <a href={"https://ilmo.aaltobloom.fi/event/"+event.id} target="_blank"  rel="noreferrer">Link to event</a>
        </div>
    );
}

const Description = () => {

    const desc = "To be fair, you have to have a very high IQ to understand Rick and Morty. The humor is extremely subtle, and without a solid grasp of theoretical physics most of the jokes will go over a typical viewer's head. There's also Rick's nihilistic outlook, which is deftly woven into his characterisation - his personal philosophy draws heavily from Narodnaya Volya literature, for instance. The fans understand this stuff; they have the intellectual capacity to truly appreciate the depths of these jokes, to realize that they're not just funny- they say something deep about LIFE."

    return (
    <section className='description'>
        <h1>Welcome to Aalto Bloom</h1>
        <p>{desc}</p>
    </section>
    )
}

const Socials = () => {
    return (
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
                <a href="mailto: aaltobloom@gmail.com" target="_blank"  rel="noreferrer">
                    <h4>Email</h4>
                    <img src="./MailLogo.png" width="64px" alt="Email"></img>
                    <p>aaltobloom@gmail.com</p>
                </a>
            </div>
        </div>
    </section>    
    )
}

const Events = () => {

    const [ comingEvents ] = GetEvents();

    return (
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
    )
}

export { Socials, Description, Events }