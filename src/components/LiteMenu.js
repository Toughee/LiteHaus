import React, {useState} from 'react';
import '../css/LiteMenu.css';

function LiteMenu(LiteSetting) {
	const LiteStatus = LiteSetting ? 'On' : 'Off';

	// class LiteSwitches extends React.Component { 
	// 	state = {
	// 		garageDoor: true,
	// 		backyard: false,
	// 		frontDoor: true,
	// 		livingRoom: true,
	// 		kitchen: false,
	// 		bathroom: false,
	// 		masterSuite: true,
	// 		suiteBathroom: false,
	// 		guestRoom: false
	// 	};

	// 	toggle = room => {
	// 		this.setState(prevState => ({
	// 		[room]: !prevState[room]
	// 		}));
	// 	}; 

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
				<button onClick = {() => this.toggle('garageDoor')}>
				On{/*LiteStatus(garageDoor)*/}</button>
			</span>
			<br />
			
			<span className="Lite-panel-label">
				<i className='fas fa-campground'></i>
				  Backyard: 
				<button onClick = {() => this.toggle('backyard')}>
				Off {/*LiteStatus(backyard)*/}</button>
			</span>
			<br />

			<span className="Lite-panel-label">
				<i className='fas fa-door-closed'></i>
				  Front Door:  
				<button onClick = {() => this.toggle('frontDoor')}>
				On {/*LiteStatus(frontDoor)*/}</button>
			</span>

			<br />
			
			<span className="Lite-panel-label">
				<i className='fas fa-television'></i>
				  Living room:   
				<button onClick = {() => this.toggle('livingRoom')}>
				On {/*LiteStatus(livingRoom:)*/}</button>
			</span>
			<br />
			
			<span className="Lite-panel-label">
				<i className='fas fa-cookie'></i>
				 Kitchen:  
				<button onClick = {() => this.toggle('kitchen')}>
				Off {/*LiteStatus(kitchen)*/}</button>
			</span>
			
			<br />

			<span className="Lite-panel-label">
				<i className='fas fa-bath'></i>
				 Bathroom: 
				<button onClick = {() => this.toggle('bathroom')}>
				Off {/*LiteStatus(bathroom)*/}</button>
			</span>
			
			<br />
			<span className="Lite-panel-label">
				<i className='fas fa-bed'></i>
				 Master Suite:
				<button onClick = {() => this.toggle('masterSuite')}>
				Off {/*LiteStatus(masterSuite)*/} </button>
			</span>

			<br />
			
			<span className="Lite-panel-label">
				<i className='fas fa-bath'></i>
				 Suite Bathroom: 
				<button onClick = {() => this.toggle('suiteBathroom')}>
				Off {/*LiteStatus(suiteBathroom)*/}</button>
			</span>

			<br />
			
			<span className="Lite-panel-label">
				<i className='fas fa-bed'></i>
				 Guest Room: 
				<button onClick = {() => this.toggle('guestRoom')}>
				Off {/*LiteStatus(guestRoom)*/}  </button>
			</span>
			<br />
		</div>
		);
	}


export default LiteMenu;