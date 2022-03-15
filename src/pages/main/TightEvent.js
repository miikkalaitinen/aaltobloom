import React from 'react'
import moment from 'moment';

export default function TightEvent({ event }) {
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