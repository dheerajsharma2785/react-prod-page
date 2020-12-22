import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
	return (
		<header className='bg-dark'>
			<div className='container'>
				<nav className='row navbar navbar-expand-lg navbar-dark'>
					<NavLink to='/' className='navbar-brand'>
						Angara Project
					</NavLink>
					<button
						className='navbar-toggler'
						type='button'
						data-toggle='collapse'
						data-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>

					<div className='collapse navbar-collapse' id='navbarSupportedContent'>
						<ul className='navbar-nav ml-auto'>
							<li className='nav-item active'>
								<NavLink to='/' className='nav-link'>
									Product <span className='sr-only'>(current)</span>
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink to='/' className='nav-link'>
									Logout
								</NavLink>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</header>
	)
}

export default Header
