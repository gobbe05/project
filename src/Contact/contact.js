import React from 'react'
import Header from '../Header/header'
import Footer from '../Footer/footer'
import '../CSS/contact.css'

export default function Contact() {
    return (
    <>
    <Header />

    <div className={"contact-form"}>
        <form>
            <legend>E-Mail</legend>
            <input></input>
            <legend>Name</legend>
            <input></input>
            <legend>Message</legend>
            <textarea id="message-input"></textarea>
            <button>Send</button>
        </form>
    </div>

    <Footer />
    </>
    )
}