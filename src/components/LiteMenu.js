import React from 'react';
import '../css/LiteMenu.css';

function LiteMenu(value) {
	const LiteStatus = value ? 'On' : 'Off';
	return <span className={LiteStatus}>{LiteStatus}</span>;
}

class LiteSwitches extends React.Component { 
	state = {
		garageDoor: true,
		backyard: false,
		frontDoor: true,
		livingRoom: true,
		kitchen: false,
		bathroom: false,
		masterSuite: true,
		suiteBathroom: false,
		guestRoom: false
	};

	toggle = room => {
		this.setState(prevState => ({
		[room]: !prevState[room]
		}));
	}; 

		render() {
			const {
				garageDoor,
		  		backyard,
		  		frontDoor,
		  		livingRoom,
		  		kitchen,
		  		bathroom,
		  		masterSuite,
		  		suiteBathroom,
		  		guestRoom
		} = this.state;


	return (
	<div className="Litemenu-bar">

		<h1>LiteHaus</h1>
		<span className="Lite-panel-label"> 
			<i className='fas fa-warehouse'></i>
			Garage Door : 
			<button onClick={() => this.toggle('garageDoor')}> 
			{LiteMenu(garageDoor)}
		</button>
		</span>

		<br/>
		
		<span className="Lite-panel-label"> 
			<i className='fas fa-campground'></i>
			Backyard : 
			<button onClick={() => this.toggle('backyard')}> 
			{LiteMenu(backyard)}
		</button>
		</span>

		<br/>
		
		<span className="Lite-panel-label"> 
			<i className='fas fa-door-closed'></i>
			Front Door : 
			<button onClick={() => this.toggle('frontDoor')}> 
			{LiteMenu(frontDoor)}
		</button>
		</span>

		<br/>
		
		<span className="Lite-panel-label"> 
			<i className='fas fa-television'></i>
			Living room : 
			<button onClick={() => this.toggle('livingRoom')}> 
			{LiteMenu(livingRoom)}
		</button>
		</span>

		<br/>

		<span className="Lite-panel-label"> 
			<i className='fas fa-cookie'></i>
			Kitchen: 
			<button onClick={() => this.toggle('kitchen')}> 
			{LiteMenu(kitchen)}
		</button>
		</span>

		<br/>

		<span className="Lite-panel-label"> 
			<i className='fas fa-bath'></i>
			Bathroom: 
			<button onClick={() => this.toggle('bathroom')}> 
			{LiteMenu(bathroom)}
		</button>
		</span>

		<br />

		<span className="Lite-panel-label"> 
			<i className='fas fa-bed'></i>
			Master Bedroom: 
			<button onClick={() => this.toggle('masterSuite')}> 
			{LiteMenu(masterSuite)}
		</button>
		</span>

		<br />

		<span className="Lite-panel-label"> 
			<i className='fas fa-bed'></i>
			Suite Bathroom: 
			<button onClick={() => this.toggle('suiteBathroom')}> 
			{LiteMenu(suiteBathroom)}
		</button>
		</span>

		<br />

		<span className="Lite-panel-label"> 
			<i className='fas fa-bed'></i>
			Guest Room: 
			<button onClick={() => this.toggle('guestRoom')}> 
			{LiteMenu(guestRoom)}
		</button>
		</span>
			
	</div>

		);
	}
}
export default LiteSwitches;