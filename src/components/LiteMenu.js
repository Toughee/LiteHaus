import React, {useState} from 'react';
//
//import '../node_modules/font-awesome/css/font-awesome.min.css'; 
//

import '../css/LiteMenu.css';

// const [RoomLites] = useState [(
// toggle isOn
// Garage Door

// const state [litesection, setlite]

// function  
// onclick

// Backyard
// Front Door
// Living Room
// Kitchen 
// Bathroom
// Master Suite
// Suite Bathroom
// Guest Room
// Entertainment Room
// )] 


function LiteMenu() {


	return (
		<div className="Litemenu-bar">
		
			<h1>LiteHaus</h1>

			<h6>Outdoors</h6>
			
			<span className="Lite-panel-label"> 
				<i className='fas fa-warehouse'></i>
				  Garage door 
				<button className="Light-Tab onoffswitch"> On</button>
			</span>
			
			<span className="Lite-panel-label">
				<i className='fas fa-campground'></i>
				  Backyard 
				<button className="Light-Tab">Off</button>

			</span>
			<br />
			<span className="Lite-panel-label">
				<i className='fas fa-door-closed'></i>
				  Front Door 
				<button className="Light-Tab">On</button>
				
			</span>


			<h6>Living rooms</h6>

			
			<span className="Lite-panel-label">
				<i className='fas fa-television'></i>
				  Living room 
				<button className="Light-Tab">On</button>
			</span>

			
			<span className="Lite-panel-label">
				<i className='fas fa-cookie'></i>
				 Kitchen
				<button className="Light-Tab">Off</button>
			</span>
			
			<br />

			<span className="Lite-panel-label">
				<i className='fas fa-bath'></i>
				 Bathroom
				<button className="Light-Tab">Off</button>
			</span>
			
		
			<h6>Bedrooms</h6>

			
			<span className="Lite-panel-label">
				<i className='fas fa-bed'></i>
				 Master Suite
				<button className="Light-Tab">On</button>
			</span>

			
			<span className="Lite-panel-label">
				<i className='fas fa-bath'></i>
				 Suite Bathroom
				<button className="Light-Tab">Off</button>
			</span>

			<br />
			
			<span className="Lite-panel-label">
				<i className='fas fa-bed'></i>
				 Guest Room 
				<button className="Light-Tab">Off</button>
			</span>

			<br />

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