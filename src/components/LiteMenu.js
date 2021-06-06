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
	<div className="Litemenu-bar container">

		<h1 className="appTitle">LiteHaus</h1>

		<br/> 
		<div className="row">
		<span className="Lite-panel-label"> 

			<button className= "rounded-circle" onClick={() => this.toggle('garageDoor')}>
			<br/>

			<FontAwesomeIcon icon =  {faWarehouse} /> 
			<br/>
			Garage Door :
			{LiteMenu(garageDoor)}
		</button>
		</span>

		<br/>
		
		<span className="Lite-panel-label"> 
			<button className= "rounded-circle" onClick={() => this.toggle('backyard')}> 
			<FontAwesomeIcon icon =  {faCampground} />
			<br/>
			Backyard:
			{LiteMenu(backyard)}
		</button>
		</span>

		<br/>
		
		<span className="Lite-panel-label"> 			 
			<button className= "rounded-circle" onClick={() => this.toggle('frontDoor')}> 
			<FontAwesomeIcon icon =  {faDoorClosed} />
			<br/>
			Front Door: 
			{LiteMenu(frontDoor)}
		</button>
		</span>

		<br/>

		<hr/>
		</div>
		
		<div className="row">

		<span className="Lite-panel-label"> 
			
			 
			<button className= "rounded-circle" onClick={() => this.toggle('livingRoom')}> 

			<FontAwesomeIcon icon =  {faTv} />
			<br/>
			Living room : 
			{LiteMenu(livingRoom)}
		</button>
		</span>

		<br/>

		<span className="Lite-panel-label"> 
			<button className= "rounded-circle" onClick={() => this.toggle('kitchen')}> 
			<FontAwesomeIcon icon =  {faCookie} />
			<br/>
			Kitchen: 
			{LiteMenu (kitchen)}
		</button>
		</span>

		<br/>


		<span className="Lite-panel-label"> 
			
			<button className= "rounded-circle" onClick={() => this.toggle('bathroom')}> 
			<FontAwesomeIcon icon =  {faBath} />
			<br/>
			Bathroom:
			{LiteMenu(bathroom)}
		</button>
		</span>

		<br />

		</div>

		<div className="row">

		<span className="Lite-panel-label"> 
			
			 
			<button className= "rounded-circle" onClick={() => this.toggle('masterSuite')}> 
			<FontAwesomeIcon icon =  {faBed} />
			<br/>
			Master Bedroom: 
			{LiteMenu(masterSuite)}
		</button>
		</span>

		<br />

		<span className="Lite-panel-label"> 
			
			 
			<button className= "rounded-circle" onClick={() => this.toggle('suiteBathroom')}>
			<FontAwesomeIcon icon =  {faBed} /> 
			<br/>
			Suite Bathroom: 
			{LiteMenu(suiteBathroom)}
		</button>
		</span>

		<br />

		<span className="Lite-panel-label"> 
			
			
			<button className= "rounded-circle" onClick={() => this.toggle('guestRoom')}> 
			<FontAwesomeIcon icon =  {faBed} />
			<br />
			 Guest Room: 
			{LiteMenu(guestRoom)}
		</button>
		</span>
		<hr  style={{
    		color: '#000000',
    		backgroundColor: '#000000',
    		height: .5,
    		borderColor : '#000000'
		}}/>

			</div>
	</div>

		);
	}
}
export default LiteSwitches;