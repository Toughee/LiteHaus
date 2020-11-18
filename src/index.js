import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
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
			<span className="Lite-panel-label">Main 
				<button className=
					"Light-Tab">
					Toggle
				</button>
				<i className='fas fa-lightbulb'></i>
				
			</span>

			<br />
			<span className="Lite-panel-label">Main 
				<button className="Light-Tab">Toggle</button>
				<i className='fas fa-lightbulb'></i>
			</span>
		</div>

	);
}

ReactDOM.render(
    <Litebox />,
  document.getElementById('root')
);


reportWebVitals();
