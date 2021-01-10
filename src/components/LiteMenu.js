import React from 'react';

import '../css/LiteMenu.css';


function LiteMenu() {
	return (
		<div className="Litemenu-bar">
			<span className="Lite-panel-label">Outside 
				<button className="Light-Tab">On/Off</button>
				
			</span>
			<span className="Lite-panel-label">Patio 
				<button className="Light-Tab">On/Off</button>

			</span>
			<span className="Lite-panel-label">Lawn 
				<button className="Light-Tab"> On/Off</button>

			</span>
			<span className="Lite-panel-label">Living room 
				<button className="Light-Tab">On/Off</button>

			</span>
			<span className="Lite-panel-label">Bedroom Light 
				<button className="Light-Tab">On/Off</button>
			</span>
		</div>
	);
}
export default LiteMenu;

//
// <h6 className="Litemenu-Label">LiteHaus</h6>
//<i className='fas fa-lightbulb'></i>

