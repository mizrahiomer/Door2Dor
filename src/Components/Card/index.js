import React, { useState } from 'react';
import Slide from 'react-reveal/Slide';
import './index.scss';

const Card = ({ title, description, language }) => {
	const [showDetails, setShowDetails] = useState(false);
	const arrowClass = `fa fa-chevron-down arrow ${showDetails ? 'rotate' : null}`;
	const headerClass = `card-header ${!language ? 'reverse' : null}`;
	const bodyClass = `card-body ${showDetails ? 'show' : null}`;
	const descriptionClass = `card-description ${!language ? 'reverse' : null}`;

	return (
		<Slide top>
			<div className='card-container'>
				<div className={headerClass}>
					<div className='card-title'>{title}</div>
					<i onClick={() => setShowDetails(!showDetails)} className={arrowClass} />
				</div>
				<div className={bodyClass}>
					<div className={descriptionClass}>{description}</div>
					<a href={`mailto:door2dor.volunteer@gmail.com?subject=${title}`} className='contact-btn'>
						{language ? 'Contact' : 'צור קשר'}
					</a>
				</div>
			</div>
		</Slide>
	);
};

export default Card;
