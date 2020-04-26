import React, { useState, useEffect } from 'react';
import Tabletop from 'tabletop';
import ScaleLoader from 'react-spinners/ScaleLoader';
import Fade from 'react-reveal/Fade';
import Card from '../Card';
import './index.scss';

const Main = () => {
	const [data, setData] = useState(null);
	const [language, setLanguage] = useState(true);

	useEffect(() => {
		Tabletop.init({
			key: process.env.REACT_APP_SHEETS_KEY,
			callback: googleData => {
				setData(googleData);
			},
			simpleSheet: true,
		});
	}, []);

	const showCards = () => {
		return data ? (
			data.map(card => {
				if (language) {
					const { enTitle, enDescription } = card;
					return (
						<Card key={enTitle} language={language} title={enTitle} description={enDescription} />
					);
				} else {
					const { heTitle, heDescription } = card;
					return (
						<Card key={heTitle} language={language} title={heTitle} description={heDescription} />
					);
				}
			})
		) : (
			<ScaleLoader color={'#fff'} />
		);
	};

	return (
		<div className='main'>
			<div className='navbar'>
				<div
					onClick={() => {
						setLanguage(!language);
					}}
					className='navbar-btn'
				>
					{language ? 'HE' : 'EN'}
				</div>
				<a href='https://www.facebook.com/groups/door2dor/' target='blank' className='navbar-btn'>
					<i className='fa fa-facebook' />
				</a>
				<a href='https://www.door2dor.co.il' target='blank'>
					<img
						src='https://uploads-ssl.webflow.com/5e6f57d04b406c8305826e5d/5e9195de36c30b9af2db1644_2.svg'
						alt=''
						className='heart-logo'
					/>
				</a>
			</div>
			<Fade>
				<img
					src='https://uploads-ssl.webflow.com/5e6f57d04b406c8305826e5d/5e9195e86390001325cb31d6_1.svg'
					className='d2d-logo'
					alt='D2D logo'
				/>
				<div className='main-title'>
					{language ? 'Behind the scenes volunteers' : 'מתנדבים מאחורי הקלעים'}
				</div>
			</Fade>
			{showCards()}
		</div>
	);
};

export default Main;
