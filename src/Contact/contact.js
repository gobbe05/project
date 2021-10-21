import React from 'react'
import Header from '../Header/header'
import Footer from '../Footer/footer'
import '../CSS/contact.css'

class FormState {
    constructor(name, email, message, error, mailSent) {
        this.name = name
        this.email = email
        this.message = message
        this.error = error
        this.mailSent = mailSent
    }
}

export default function Contact() {

    function handleSubmit( event ) {
        event.preventDefault()
        console.log(formState)
    }

    const [formState, setFormState] = React.useState(new FormState('', '', '', null, false))

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
            <button action="http://localhost:8000/about" method="POST" value="Submit" onClick={e => handleSubmit(e)}></button>
        </form>
    </div>

    <Footer />
    </>
    )
}