import React, { useEffect, useState } from 'react';
import Popup from '../../component/Popup/Popup';
import Swatches from '../../component/Swatches/Swatches';
import './Product.css';

const ProductDetail = () => {
	const [initialState, setInitialState] = useState({
		prodName: 'Princess Diana Inspired Blue Sapphire Ring',
		stone: null,
		carat: null,
		metal: null,
		totalPrice: null,
		popup: false,
	});

	const [stoneQuality, setStoneQuality] = useState([
		{
			name: 'Good',
			slug: 'good',
			image: 'good.webp',
			selected: true,
			price: 300,
		},
		{
			name: 'Better',
			slug: 'better',
			image: 'better.webp',
			selected: false,
			price: 330,
		},
		{
			name: 'Best',
			slug: 'best',
			image: 'best.webp',
			selected: false,
			price: 443,
		},
	]);

	const [carat, setCarat] = useState([
		{
			name: '0.80 carats',
			slug: '0.80carat',
			image: '0.80carat.webp',
			selected: true,
			price: 220,
		},
		{
			name: '1.10 carats',
			slug: '1.10carat',
			image: '1.10carat.webp',
			selected: false,
			price: 512,
		},
		{
			name: '1.90 carats',
			slug: '1.90carat',
			image: '1.90carat.webp',
			selected: false,
			price: 655,
		},
	]);

	const [metal, setMetal] = useState([
		{
			name: 'Rose Gold',
			slug: 'rose-gold',
			image: 'rose-gold.webp',
			selected: true,
			price: 612,
		},
		{
			name: 'Yellow Gold',
			slug: 'yellow-gold',
			image: 'yellow-gold.webp',
			selected: false,
			price: 515,
		},
		{
			name: 'White Gold',
			slug: 'white-gold',
			image: 'white-gold.webp',
			selected: false,
			price: 590,
		},
	]);

	useEffect(() => {
		const findStoneObj = stoneQuality.find((data) => {
			return data.selected === true;
		});
		const findCaratObj = carat.find((data) => {
			return data.selected === true;
		});
		const findMetalObj = metal.find((data) => {
			return data.selected === true;
		});
		const totalPrice =
			findStoneObj.price + findCaratObj.price + findMetalObj.price;
		setInitialState({
			...initialState,
			stone: findStoneObj,
			carat: findCaratObj,
			metal: findMetalObj,
			totalPrice: totalPrice.toString(),
		});
	}, [stoneQuality, carat, metal, initialState]);

	function numberWithCommas(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}

	const toggleAddtoCartPopup = () => {
		setInitialState({
			...initialState,
			popup: !initialState.popup,
		});
	};

	console.log(initialState);

	return (
		<div className='container content-container'>
			<div className='row pt-4'>
				<div className='col col-md-7 prod-image'>
					<div className='img-cover'>
						{initialState.metal && initialState.carat && initialState.stone && (
							<img
								className='img-fluid'
								src={
									process.env.PUBLIC_URL +
									`/assets/images/products/Ring/${initialState.metal.slug}/${initialState.carat.slug}/${initialState.stone.slug}.webp`
								}
								alt='ProductImage'
							/>
						)}
					</div>
				</div>
				<div className='col col-md-5 prod-details'>
					<h5 className='prod-name'>{initialState.prodName}</h5>

					{initialState.totalPrice && (
						<div className='prod-price'>
							${numberWithCommas(initialState.totalPrice)}
						</div>
					)}

					<Swatches
						dataArry={stoneQuality}
						setdataArry={setStoneQuality}
						title='Gemstone Quality'
						imgFolderName='stones'
					/>
					<Swatches
						dataArry={carat}
						setdataArry={setCarat}
						title='Total Carat Weight'
						imgFolderName='carats'
					/>
					<Swatches
						dataArry={metal}
						setdataArry={setMetal}
						title='Metal Type'
						imgFolderName='metals'
					/>

					<button
						type='button'
						onClick={toggleAddtoCartPopup}
						title='Add to Cart'
						id='prod-cart-button'
						className='button primary_button'
					>
						<span>Add to Cart</span>
					</button>
					<Popup
						id='add-to-cart-popup'
						status={initialState.popup}
						details={initialState}
						togglePopup={toggleAddtoCartPopup}
					/>
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;
