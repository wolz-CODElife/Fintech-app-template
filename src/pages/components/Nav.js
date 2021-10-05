import React from 'react'
import './Nav.css'
import { PlusCircleOutline } from './Icon'

const Nav = ({ user, page }) => {
    return (
        <div className="nav">
            <div className="profile">
                <img src={user.image} alt="" />
                <h3>Hi {user.name},</h3>
            </div>
            {page.name !== 'Borrow' &&
                <button  style={{ color: page.color }}> Add Money <PlusCircleOutline style={{ background: page.color }} /> </ button>
            }
        </div>
    )
}

export default Nav
