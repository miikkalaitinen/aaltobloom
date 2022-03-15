import React from 'react'
import moment from 'moment'

export default function SingleEvent({ event, past }) {
    return (
        <div className="event" key={event.id}>
            <div className='infobox'>
                <h3>{event.title}</h3>
                <p>{moment(event.date).format('D.M.Y [klo] HH:mm')}</p>
            </div>
            <p className='desc'>{event.description}</p>
            <br />
            <a style={{display : past ? "none" : "inline" }} href={"https://ilmo.aaltobloom.fi/event/"+event.id} target="_blank"  rel="noreferrer">Link to event</a>
        </div>
    );
}