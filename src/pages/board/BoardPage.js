import React from 'react'
import BoardDesc from './BoardDesc';
import './BoardPage.css'

export default function BoardPage() {
    return (
        <div className='boardPage'>
            <h1>
                Aalto Bloom Board
            </h1>
                {
                BoardDesc.map(dude => (
                    <div key={dude.name} className='dudediv'>
                        <h3>{dude.title}</h3>
                        <h4>{dude.name}</h4>
                            <div className='dudeDesc'>
                                <p>{dude.text}</p>
                                <img src={dude.picurl} alt={"Picture of " + dude.name}></img>
                            </div>
                    </div>
                ))
                }
        </div>
    );
}