import React from 'react'
import './CSS/about-me.css'
import logo from './IMG_0455.jpg'

export default function Aboutme () {
    return (
        <>
        <div id={"about-me-container"}>
            <div className={"knowledge-container"}>
                <div className={"item"}>
                    <img></img>
                    <h1>React</h1>
                </div>

                <div className={"item"}>
                    <img></img>
                    <h1>C++</h1>
                </div>

                <div className={"item"}>
                    <img></img>
                    <h1>Python</h1>
                </div>
            </div>
        </div>
        </>
    )
}