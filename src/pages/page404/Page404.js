import React from 'react'

export default function Page404() {
    return (
        <div>
            <h2>404 - Not found</h2>
            <p>It seems this page does not exist!</p>
            <p>You can continue to the home page by pressing this coffee bean</p>
            <a style={{width : "auto"}} href='/'><img src="./logo512.png" height="64px" alt="Coffee Bean"></img></a>
        </div>
    );
}