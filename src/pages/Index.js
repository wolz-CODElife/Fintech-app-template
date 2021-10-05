import React, { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Nav from './components/Nav'
import './Index.css'

const Index = () => {
    const user = {
        image: 'https://i.postimg.cc/hPsWLsz2/image.png',
        name: 'Farhan',
        savings: '50,350.00'
    }
    const pages = [
        {
            name: 'Spend',
            price: '50, 350.00',
            caption: 'Account Balance',
            title: 'Welcome to Savings',
            description: 'Your saving account number is 123456789. Your account is limited to a balance of 1,000,000 dollars and you can receive a maximum deposit of 300,000 dollars at a time.',
            illustration: 'https://i.postimg.cc/15gMzDnY/image.png',
            button: 'Add Money',
            color: '#1F153D',
            headerTextColor: '#ffffff'
        },
        {
            name: 'Save',
            price: '50, 350.00',
            caption: 'Your Savings',
            title: 'Savings Stash',
            description: 'Put your money away daily, weekly, monthly or as you spend.',
            illustration: 'https://i.postimg.cc/bJ9L7CjM/image.png',
            button: 'Save Now',
            color: '#02BA62',
            headerTextColor: '#000000'
        },
        {
            name: 'Borrow',
            price: '0.00',
            caption: 'You Owe',
            title: 'Overdraft',
            description: 'Your are allowed a minimum of $500 and a maximum of $1000.',
            illustration: 'https://i.postimg.cc/QxtSzJY4/image.png',
            button: 'Proceed',
            color: '#2C3DD1',
            headerTextColor: '#ffffff'
        },
    ]
    const [selectedPage, setSelectedPage] = useState("Save")
    useEffect(() => {

    }, [selectedPage])
    return (
        <>
            <Nav user={user} page={pages.find(page => page.name === selectedPage)} />
            <div className="page">
                <div className="header">
                    {pages.map(page => (
                        <div key={page.name}
                        className="tab"
                        style={{
                            background: page.name === selectedPage ?
                                page.color : 'rgba(44, 61, 209, 0.2)',
                            color: page.name === selectedPage ?
                                page.headerTextColor : '#000000'
                        }}
                        onClick={() => setSelectedPage(page.name)}>
                            {page.name}
                        </div>
                    ))}
                </div>
                {pages.map(page => (
                    page.name === selectedPage &&
                    <div className="content" key={page.name}>
                        <div className="header" style={{ background: page.color }}>
                            <h1>${page.price}</h1>
                            <p>{ page.caption }</p>
                        </div>
                        <div className="body">
                            <h1>{page.title}</h1>
                            <p>{page.description}</p>
                            <img src={page.illustration} alt={page.name} />
                        </div>
                        <button style={{ background: page.color }}>{ page.button }</button>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    )
}

export default Index
