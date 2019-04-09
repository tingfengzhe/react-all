import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from '../views/index'
import Header from '../component/header'
import Menu from '../component/menu'

function BasicExample() {
    return(
        <Router>
            <Menu/>
            <div className="main">
                <Header/>
                <div className="mainRight">
                    <Route exact path='/' component={ Index } />
                </div>
            </div>
        </Router>
    )
}

export default BasicExample;