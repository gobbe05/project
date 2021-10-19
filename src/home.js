import React from 'react'
import './CSS/home.css'
import Header from './Header/header'
import Content from './home-content'
import Aboutme from './about-me'
import Login from './Forms/login'
import Todolist from './ToDoList/list/todo-list'

import useLoggedIn from './Custom Hooks/useLoggedIn'
import useActiveUser from './Custom Hooks/useActiveUser'


class User {
    constructor(username, password, todolist) {
        this.username = username
        this.password = password
        this.todolist = todolist
    }
}

function Home() {

    return (
        <>
        <Header />
        <div id="page-content">
            <div className="start-content">
            <Content />
            </div>
            <div className={"about-me-content"}>
            <Aboutme />
            </div>
        </div>
        </>
    )
    
}

export default Home