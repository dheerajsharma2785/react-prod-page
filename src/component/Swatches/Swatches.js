import React, { useEffect, useState } from 'react'

const Swatches = ({ dataArry, setdataArry, ...rest }) => {
	const [activeOption, setActiveOption] = useState(null)

	useEffect(() => {
		const findObj = dataArry.find((data) => {
			return data.selected === true
		})
		setActiveOption(findObj)
	}, [dataArry])

	const onClickHandler = (selectedIndex) => {
		const newArry = dataArry.map((option, index) => {
			return {
				...option,
				selected: index === selectedIndex ? true : false,
			}
		})
		setdataArry(newArry)
	}
	return (
		<div className='swatches'>
			<label>
				{rest.title}: {activeOption && activeOption.name}
			</label>
			<div className='option-list clearfix'>
				{dataArry &&
					dataArry.map((option, index) => (
						<div
							key={option.slug}
							className={`option ${option.selected && 'active'}`}
						>
							<div className='opt_inner' onClick={() => onClickHandler(index)}>
								<span className='icon'>
									<img
										src={
											process.env.PUBLIC_URL +
											`/assets/images/icons/${rest.imgFolderName}/${option.image}`
										}
										alt={option.name}
									/>
								</span>
								<span className='label'>
									<span style={{ minWidth: '58px' }}>{option.name}</span>
								</span>
							</div>
						</div>
					))}
			</div>
		</div>
	)
}

export default Swatches
