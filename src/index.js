import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';
import reportWebVitals from './reportWebVitals';

function Litebox() {
	return (
		<div className="Litemenu-bar">
			<h6>LiteHaus</h6>

			<span className="Lite-panel-label">Outside 
				<button className="Light-Tab">Toggle</button>
				<i className='fas fa-lightbulb'></i>
			</span>
			<br />
			<span className="Lite-panel-label">Patio 
				<button className="Light-Tab">Toggle</button>
				<i className='fas fa-lightbulb'></i>
			</span>
			<br />
			<span className="Lite-panel-label">Lawn 
				<button className="Light-Tab"> Toggle</button>
				<i className='fas fa-lightbulb'></i>
			</span>
			<br />
			<span className="Lite-panel-label">Living room 
				<button className=
					"Light-Tab">
					Toggle
				</button>
				<i className='fas fa-lightbulb'></i>
			</span>

			<br />
			<span className="Lite-panel-label">Bedroom Light 
				<button className="Light-Tab">Toggle</button>
				<i className='fas fa-lightbulb'></i>
			</span>
		</div>

	);
}

// function HouseProp() {
// 	isOn ? isOff
// }

// const OutsideLight {

// }

// const PatioLight {

// }

// const LawnLights {

// }

// const BedroomLight {

// }

// const LivingRoomLight {

// }




// prop types for every one

ReactDOM.render(
    <Litebox />,
  document.getElementById('root')
);


reportWebVitals();
