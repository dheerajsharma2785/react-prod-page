import React from 'react'

const Popup = ({ togglePopup, status, details, ...rest }) => {
	return (
		<div
			className={`modal ${!status && 'fade'}`}
			style={{ display: `${status ? 'block' : 'none'}` }}
			id={rest.id}
		>
			<div className='modal-dialog modal-dialog-centered' role='document'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h5 className='modal-title' id='exampleModalLongTitle'>
							Cart
						</h5>
						<button type='button' className='close' onClick={togglePopup}>
							<span aria-hidden='true'>&times;</span>
						</button>
					</div>
					<div className='modal-body'>
						{details.metal && details.carat && details.stone && (
							<>
								<label>{details.prodName}</label>
								<ul>
									<li>Stone: {details.stone.name}</li>
									<li>Carat: {details.carat.name}</li>
									<li>Metal: {details.metal.name}</li>
									<li>Price: ${details.totalPrice}</li>
								</ul>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Popup
