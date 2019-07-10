import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	return (
		<div>
			{
			robots.map((user, i) => {
				return (
					<Card 
						key={i} 
						id={robots[i].id} 
						name={robots[i].name} 
						image={robots[i].avatar} 
						weapon={robots[i].weapon}
						weakness={robots[i].weakness}
						/>
				);
			})
		}
		</div>
	);
}

export default CardList;