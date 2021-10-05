import React, { useState } from 'react'
import './Footer.css'
import { Budget, Cards, Home, More, Payments } from './Icon'

const Footer = () => {
    const menus = [
        {
            name: 'home',
            icon: Home
        },
        {
            name: 'payments',
            icon: Payments
        },
        {
            name: 'budget',
            icon: Budget
        },
        {
            name: 'cards',
            icon: Cards
        },
        {
            name: 'more',
            icon: More
        },
    ]
    const [active, setActive] = useState('home')
    return (
        <div className="footer">
            {menus.map(menu => (
                <button onClick={() => setActive(menu.name)} key={menu.name} className={active === menu.name? 'active':''}>
                    {menu.icon }
                    <p>{ menu.name }</p>
                </button>
            ))}
        </div>
    )
}

export default Footer
