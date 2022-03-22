import { useEffect, useState } from "react";
import moment from "moment";

const GetEvents = () => {

    const [ comingEvents, setComingEvents ] = useState([])
    const [ pastEvents, setPastEvents ] = useState([])
    const proxyEndpoint = process.env.REACT_APP_PROXYENDPOINT
  
    const fetchEvents = async () => {
        await fetch(proxyEndpoint)
        .then(res => res.json())
        .then(data => parseEvents(data.data))
        .catch(error => console.log(error))
    }
  
    const now = new Date()
  
    const parseEvents = async (data) => {
  
        console.log(data)
  
        const comingDates = await data.filter(_ => moment(data.date).isSameOrBefore(now))
        const pastDates = await data.filter(_ => moment(data.date).isSameOrAfter(now))

        setComingEvents(comingDates.reverse())
        setPastEvents(pastDates.reverse())
    }
  
    useEffect( () => {
        fetchEvents();
    },[])

    return [comingEvents, pastEvents]
}

export default GetEvents;