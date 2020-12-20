import { Avatar } from '@material-ui/core'
import { Forum } from '@material-ui/icons'
import logo from '../../assets/img/logo.jpeg'
import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className="header">
            <Avatar className="header__avatar"/>
            <img src={logo} alt="" className="header__logo"/>
            <Forum fontSize="large" className="header__messages"/>

        </div>
    )
}

export default Header
