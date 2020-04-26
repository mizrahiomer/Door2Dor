import React from 'react';
import './index.scss';
const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer-grid'>
				<img
					src='	https://uploads-ssl.webflow.com/5e6f57d04b406c8305826e5d/5e919938639000faadcb3f1c_taglit.png'
					className='taglit-logo'
					alt='Taglit Logo'
				/>
				<a
					href='https://docs.google.com/document/u/4/d/e/2PACX-1vQQDj6FSqZODsGPFWYlg_w3Aak80LkQ1yIzq3tk9bvRLWaJ5c5gQicsFrJNv-SK52nx3iSXctuW94uP/pub'
					target='blank'
					className='footer-link'
				>
					Terms of Use and Privacy
				</a>

				<div className='powered'>
					Powered in
					<span role='img' aria-label=''>
						💜
					</span>
					by
					<a href='https://mizrahiomer.com' target='blank' className='footer-link me'>
						Omer Mizrahi
					</a>
				</div>
			</div>
		</div>
	);
};
export default Footer;
