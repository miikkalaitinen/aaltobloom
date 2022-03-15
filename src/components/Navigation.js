import React from 'react'
import "./navigation.css"

export default function Navigation() {
    return (
        <nav>
            <a href='/'>Home</a>
            <a href='/events'>Events</a>
            <a href='/board'>Board</a>
            <a href='/join'>Join</a>
        </nav>
    )
}