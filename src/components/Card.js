import React from 'react';

//cleanest
const Card = ({ name, weakness, image, weapon }) => {
	return (
		<div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt={name} src={image} width='auto' height='200px'/>
			<div>
				<h2>{name}</h2>
				<p>WEAPON:</p>
				<p>{weapon}</p>
				<p>WEAKNESS:</p>
				<p>{weakness}</p>
			</div>
		</div>
	);
}


export default Card;

//standard
// const Card = (props) => {
// 	return (
// 		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
// 			<img alt={props.name} src={props.image}/>
// 			<div>
// 				<h2>{props.name}</h2>
// 				<p>{props.email}</p>
// 			</div>
// 		</div>
// 	);
// }

//cleaner
// const Card = (props) => {
// 	const { name, email, image } = props;
// 	return (
// 		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
// 			<img alt={name} src={image}/>
// 			<div>
// 				<h2>{name}</h2>
// 				<p>{email}</p>
// 			</div>
// 		</div>
// 	);
// }
