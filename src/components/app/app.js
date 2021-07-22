import React from 'react';
import {MainPage, CartPage, ViewPage} from '../pages';
import AppHeader from '../app-header';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Background from './food-bg.jpg';

const App = () => {
    return (
        <Router>
            <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
                <AppHeader total={50}/>
                <Route path='/' exact component={MainPage}/>
                <Route path='/cart' component={CartPage}/>
                <Route path='/menu/:id' render = {
                    ({match}) => {
                        const {id} = match.params
                        return <ViewPage itemId = {id}/>
                    }
                }/>
            </div>
        </Router>
    )
}

export default App;