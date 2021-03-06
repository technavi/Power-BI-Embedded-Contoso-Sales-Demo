// ---------------------------------------------------------------------------
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// ---------------------------------------------------------------------------

import './Home.scss';
import React from 'react';
import { Profile } from '../../models';

export interface HomeProps {
	setProfileType: { (profileType: Profile): void };
}

export function Home(props: HomeProps): JSX.Element {
	return (
		<div className='card-body'>
			<p className='card-title'> What type of user are you? </p>

			<button
				id='salesperson-btn'
				onClick={() => props.setProfileType(Profile.Salesperson)}
				className='btn-block col-lg-10 col-md-10 col-sm-12 offset-lg-1 offset-md-1 profile-btn'>
				{Profile.Salesperson}
			</button>

			<button
				id='salesmanager-btn'
				onClick={() => props.setProfileType(Profile.SalesManager)}
				className='btn-block col-lg-10 col-md-10 col-sm-12 offset-lg-1 offset-md-1 profile-btn'>
				{Profile.SalesManager}
			</button>
		</div>
	);
}
