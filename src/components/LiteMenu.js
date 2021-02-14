import React from 'react';

import '../css/LiteMenu.css';


function LiteMenu() {
	return (
		<div className="Litemenu-bar">
		
			<h1>LiteHaus</h1>

			<h6>Outdoors</h6>

			<i className='fas fa-warehouse'></i>
			
			<span className="Lite-panel-label"> Garage door 
				<button className="Light-Tab"> On/Off</button>
			</span>
					

			<i className='fas fa-lightbulb'></i>
			<span className="Lite-panel-label">Backyard 
				<button className="Light-Tab">On/Off</button>

			</span>

			<i className='fas fa-lightbulb'></i>
			<span className="Lite-panel-label">Front Lawn 
				<button className="Light-Tab">On/Off</button>
				
			</span>


			<h6>Living rooms</h6>

			<i className='fas fa-lightbulb'></i>
			<span className="Lite-panel-label">Living room 
				<button className="Light-Tab">On/Off</button>
			</span>

			<i className='fas fa-lightbulb'></i>
			<span className="Lite-panel-label">Kitchen
				<button className="Light-Tab">On/Off</button>

			</span>

			<i className='fas fa-bath'></i>
			<span className="Lite-panel-label">Bathroom
				<button className="Light-Tab">On/Off</button>

			</span>
		
			<h6>Bedrooms</h6>

			<i className='fas fa-bed'></i>
			<span className="Lite-panel-label">Master Suite
				<button className="Light-Tab">On/Off</button>
			</span>

			<i className='fas fa-bed'></i>
			<span className="Lite-panel-label">Master Suite Bathroom
				<button className="Light-Tab">On/Off</button>
			</span>
		
			<i className='fas fa-bed'></i>
			<span className="Lite-panel-label">Guest Room 
				<button className="Light-Tab">On/Off</button>
			</span>

			<i className='fas fa-lightbulb'></i>
			<span className="Lite-panel-label">Entertainment room 
				<button className="Light-Tab">On/Off</button>
			</span>


		</div>
	);
}
export default LiteMenu;

//
// <h6 className="Litemenu-Label">LiteHaus</h6>
//<i className='fas fa-lightbulb'></i>



//
//
// Outdoors
// Front yarn
// backyard
// side
// Garage front 

//
// Garage
//

// Living room lights
// Kitchen
// Living room
// Bathroom

// Bedrooms
// Bedroom 3-rooms
// Master suite
// Bathroom
// Guest
// Guest
// 

//
// <i class="fa fa-bath" style="font-size:48px;color:red"></i>
//
//
//    <div class="onoffswitch">
    //     <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" tabindex="0" checked>
    //     <label class="onoffswitch-label" for="myonoffswitch"></label>
    // </div>

//