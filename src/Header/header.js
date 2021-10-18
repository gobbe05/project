import React from 'react'
import '../CSS/header.css'
import useActiveUser from '../Custom Hooks/useActiveUser'
import HamburgerMenu from './hamburger-menu'

/* The header function is just JSX code of the Header component. It handles the header
and its items.
 */

class User {
    constructor(username, password, todolist) {
        this.username = username
        this.password = password
        this.todolist = todolist
    }
}

function Header() {

    const [activeUser, setActiveUser] = useActiveUser('activeUser', 0)
    const [users, setuser] = useActiveUser('test', '')
    const [firstLoggedIn, setFirstLoggedIn] = useActiveUser('firstLogged', true)
    const [activateHamburger, setActivateHamburger] = React.useState(false)
    
        React.useEffect(() => {
            if(firstLoggedIn) {
                setFirstLoggedIn(false)
                localStorage.setItem('test', JSON.stringify([new User('guest', '', ['test', 'test'])]))
        }
        }, [])

    return (
        <div id="header-container">
            <div className={"header-navigation"}>
                <ul>
                    <li><a href="./home">Home</a></li>
                    <li><a href="./portfolio">Portfolio</a></li>
                    <li><a href="./login">Login</a></li>
                </ul>
                <HamburgerMenu />
            </div>

            <div className={"logged-in-user"}>
                <h3>{users[activeUser].username}</h3>
            </div>

            
        </div>
    )
}

export default Header