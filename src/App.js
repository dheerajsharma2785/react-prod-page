import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './views/includes/Header/Header'
import ProductDetail from './views/Products/ProductDetail'

function App() {
	return (
		<div className='app-container'>
			<Router>
				<Header />
				<Switch>
					<Route exact path='/' component={ProductDetail} />
					<Route component={ProductDetail} />
				</Switch>
			</Router>
		</div>
	)
}

export default App
