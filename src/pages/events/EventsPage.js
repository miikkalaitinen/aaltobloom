import React from 'react';
import "./EventsPage.css"
import SingleEvent from './SingleEvent';
import GetEvents from '../../services/GetEvents';

export default function EventsPage() {

    const [ comingEvents , pastEvents ] = GetEvents();

    return(
        <div className='eventswrapper'>
            <h1>Events</h1>
            <h2>Coming events</h2>
            {comingEvents.length === 0 ? 
            <p>There are no events coming soon.</p>
            :
            comingEvents.map(event => (
                <SingleEvent key={event.id} event={event} past={false}  />
            ))
            }
            <h2>Past events</h2>
            {pastEvents.length === 0 ? 
            <p>There are no past events</p>
            :
            pastEvents.map(event => (
                <SingleEvent key={event.id} event={event} past={true}  />
            ))
            }
        </div>
    )
    
}