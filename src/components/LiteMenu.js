import React from 'react';
import '../css/LiteMenu.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faWarehouse, faCampground, faTv, faCookie, faBath, faDoorClosed} from '@fortawesome/free-solid-svg-icons';


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
			<FontAwesomeIcon icon =  {faWarehouse} />
			Garage Door : 
			<button onClick={() => this.toggle('garageDoor')}> 
			{LiteMenu(garageDoor)}
		</button>
		</span>

		<br/>
		
		<span className="Lite-panel-label"> 
			<FontAwesomeIcon icon =  {faCampground} />
			Backyard : 
			<button onClick={() => this.toggle('backyard')}> 
			{LiteMenu(backyard)}
		</button>
		</span>

		<br/>
		
		<span className="Lite-panel-label"> 
			<FontAwesomeIcon icon =  {faDoorClosed} />
			Front Door : 
			<button onClick={() => this.toggle('frontDoor')}> 
			{LiteMenu(frontDoor)}
		</button>
		</span>

		<br/>
		
		<span className="Lite-panel-label"> 
			<FontAwesomeIcon icon =  {faTv} />
			Living room : 
			<button onClick={() => this.toggle('livingRoom')}> 
			{LiteMenu(livingRoom)}
		</button>
		</span>

		<br/>

		<span className="Lite-panel-label"> 
			<FontAwesomeIcon icon =  {faCookie} />
			Kitchen: 
			<button onClick={() => this.toggle('kitchen')}> 
			{LiteMenu(kitchen)}
		</button>
		</span>

		<br/>

		<span className="Lite-panel-label"> 
			<FontAwesomeIcon icon =  {faBath} />
			Bathroom: 
			<button onClick={() => this.toggle('bathroom')}> 
			{LiteMenu(bathroom)}
		</button>
		</span>

		<br />

		<span className="Lite-panel-label"> 
			<FontAwesomeIcon icon =  {faBed} />
			Master Bedroom: 
			<button onClick={() => this.toggle('masterSuite')}> 
			{LiteMenu(masterSuite)}
		</button>
		</span>

		<br />

		<span className="Lite-panel-label"> 
			<FontAwesomeIcon icon =  {faBed} />
			Suite Bathroom: 
			<button onClick={() => this.toggle('suiteBathroom')}> 
			{LiteMenu(suiteBathroom)}
		</button>
		</span>

		<br />

		<span className="Lite-panel-label"> 
			<FontAwesomeIcon icon =  {faBed} />
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