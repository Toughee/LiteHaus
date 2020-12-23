import React from 'react';
//
// import '../css/LiteMenu.css';
//

function LiteMenu() {
	return (
		<div className="Litemenu-bar">
			<h6 className="Litemenu-Label">LITEHAUS</h6>

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
export default LiteMenu;