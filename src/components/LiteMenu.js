import React, {useState} from 'react';
import '../css/LiteMenu.css';

function LiteMenu() {
//const LiteStatus = value ? 'On' : 'Off';

// class LiteSwitches extends React.Component { 
//  state = {
// 	garageDoor: true,
// 	backyard: false,
// 	frontDoor: true,
// 	livingRoom: true,
// 	kitchen: false,
// 	bathroom: false,
// 	masterSuite: true,
// 	suiteBathroom: false,
// 	guestRoom: false
// 	};

// 	toggle
// 		this.setState
// }; 

// render() {
// 	const {
// 		garageDoor,
//   		backyard,
//   		frontDoor,
//   		livingRoom,
//   		kitchen,
//   		bathroom,
//   		masterSuite,
//   		suiteBathroom,
//   		guestRoom
// 	} = this.state;


return (
		<div className="Litemenu-bar">
		
			<h1>LiteHaus</h1>
			
			<span className="Lite-panel-label"> 
				<i className='fas fa-warehouse'></i>
				  Garage door:
				<button className="Light-Tab onoffswitch"> 
{/*onClick = [{ this.toggle('')}}]*/}
				
				On</button>
			</span>
			<br />
			
			<span className="Lite-panel-label">
				<i className='fas fa-campground'></i>
				  Backyard:
				<button className="Light-Tab">

{/*onClick = [{ this.toggle('')}}]*/}

				Off</button>

			</span>
			<br />
			<span className="Lite-panel-label">
				<i className='fas fa-door-closed'></i>
				  Front Door: 
				<button className="Light-Tab">
{/*onClick = [{ this.toggle('')}}]*/}

				On</button>
				
			</span>

			<br />
			
			<span className="Lite-panel-label">
				<i className='fas fa-television'></i>
				  Living room:  
				<button className="Light-Tab">
{/*onClick = [{ this.toggle('')}}]*/}
				On</button>
			</span>
			<br />

			
			<span className="Lite-panel-label">
				<i className='fas fa-cookie'></i>
				 Kitchen: 
				<button className="Light-Tab">
{/*onClick = [{ this.toggle('')}}]*/}

				Off</button>
			</span>
			
			<br />

			<span className="Lite-panel-label">
				<i className='fas fa-bath'></i>
				 Bathroom: 
				<button className="Light-Tab">
{/*onClick = [{ this.toggle('')}}]*/}
				Off</button>
			</span>
			
			<br />
			<span className="Lite-panel-label">
				<i className='fas fa-bed'></i>
				 Master Suite: 
{/*onClick = [{ this.toggle('')}}]*/}

				<button className="Light-Tab">On</button>
			</span>

			<br />
			
			<span className="Lite-panel-label">
				<i className='fas fa-bath'></i>
				 Suite Bathroom: 
				<button className="Light-Tab">
{/*onClick = [{ this.toggle('')}}]*/}
				Off</button>
			</span>

			<br />
			
			<span className="Lite-panel-label">
				<i className='fas fa-bed'></i>
				 Guest Room:  
				<button className="Light-Tab">

{/*onClick = [{ this.toggle('')}}]*/}
				Off</button>


			</span>

			<br />

		</div>
	);
}
export default LiteMenu;