import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
	<div className='jumbotron'>
		<h1>Pluralsight Administration</h1>
		<p>React, Redux and React Router for ultra-responsive apps.</p>
		{/*
        Link allows us to handle router in client side without posting 
        back to the server
        */}
		<Link to='/about' className='btn btn-primary btn-lg'>
			Learn more
		</Link>
	</div>
);

export default HomePage;
